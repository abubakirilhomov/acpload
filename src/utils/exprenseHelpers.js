// ── математика ───────────────────────────────────────────────────────────────
export const safeDiv = (a, b) => (b ? a / b : 0);
export const round2 = (n) =>
  Math.round((Number.isFinite(n) ? n : 0) * 100) / 100;
export const pct = (part, whole) => round2(whole ? (part * 100) / whole : 0);

// ── парсинг/формат (поддерживает запятую и промежуточные состояния "0.", ".5") ─
export const normalize = (s) =>
  (s ?? "")
    .toString()
    .replace(/,/g, ".") // запятые -> точки
    .replace(/[^0-9.]/g, "") // только цифры и точки
    .replace(/(\..*)\./g, "$1"); // одна точка

// Для расчётов: пустая строка -> 0
export const toNum = (s) => {
  const c = normalize(s);
  if (c === "") return 0;
  const n = Number(c);
  return Number.isFinite(n) ? n : 0;
};

// Формат числа до 2 знаков (без валюты/знака %)
export const fmtNum = (n) =>
  n === "" || n === null || n === undefined
    ? ""
    : Number(n).toLocaleString("en-US", { maximumFractionDigits: 2 });

// Алиас, если где-то используется короткое имя
export const fmt = fmtNum;

// ── расчёт по строке расходов ────────────────────────────────────────────────
/**
 * computeRow — считает показатели по строке расходов с учётом типа
 * @param {Object} row    — { type: 'fixed'|'gross'|'miles', monthly: number }
 * @param {Object} totals — { totalGross: number, totalMiles: number }
 * @returns {{
 *  monthlyExpense:number,
 *  amountDisplay:{kind:'percent'|'money', value:number},
 *  perMile:number
 * }}
 */
export function computeRow(row, totals) {
  const totalGross = Number(totals?.totalGross) || 0;
  const totalMiles = Number(totals?.totalMiles) || 0;
  const m = Number(row?.monthly) || 0;

  if (row?.type === "fixed") {
    // monthly = $/month
    const monthlyExpense = m;
    const amountPercent = pct(monthlyExpense, totalGross);
    const perMile = round2(safeDiv(monthlyExpense, totalMiles));
    return {
      monthlyExpense,
      amountDisplay: { kind: "percent", value: amountPercent },
      perMile,
    };
  }

  if (row?.type === "gross") {
    // monthly = % от gross (m — это проценты)
    const percentOfGross = m;
    const monthlyExpense = round2((totalGross / 100) * percentOfGross);
    const perMile = round2(safeDiv(monthlyExpense, totalMiles));
    return {
      monthlyExpense,
      amountDisplay: { kind: "money", value: monthlyExpense },
      perMile,
    };
  }

  // type === 'miles' — m = $/mile
  const ratePerMile = m;
  const monthlyExpense = round2(ratePerMile * totalMiles);
  const perMile = round2(ratePerMile);
  return {
    monthlyExpense,
    amountDisplay: { kind: "money", value: monthlyExpense },
    perMile,
  };
}

// ── утилиты для таблиц (FixedExpensesTable и совместимость) ──────────────────
/**
 * enrichRows — рассчитывает amount/perMile по всем строкам
 * @param {Array} rows   — [{ id, type, monthly, ... }] (monthly может быть строкой)
 * @param {Object} totals — { totalGross, totalMiles }
 * @returns {{enrichedRows:Array, monthlyExpenses:Array<number>}}
 */
export function enrichRows(rows, totals) {
  const enrichedRows = (rows || []).map((r) => {
    const numericRow = { ...r, monthly: toNum(r.monthly) };
    const { monthlyExpense, amountDisplay, perMile } = computeRow(
      numericRow,
      totals
    );
    return {
      ...r,
      amount: amountDisplay?.value ?? 0,
      perMile: perMile ?? 0,
    };
  });

  const monthlyExpenses = enrichedRows.map((r) => {
    const { monthlyExpense } = computeRow(
      { ...r, monthly: toNum(r.monthly) },
      totals
    );
    return monthlyExpense;
  });

  return { enrichedRows, monthlyExpenses };
}

/**
 * computeMonthlyExpensesList — только список monthlyExpense (удобно для dispatch)
 * @param {Array} rows
 * @param {Object} totals
 * @returns {number[]}
 */
export function computeMonthlyExpensesList(rows, totals) {
  return (rows || []).map((r) => {
    const { monthlyExpense } = computeRow(
      { ...r, monthly: toNum(r.monthly) },
      totals
    );
    return monthlyExpense;
  });
}

// ── совместимость со старыми импортами (если где-то остались) ───────────────
export const onlyNumber = normalize;
export const toNumber = toNum;
export const fmtInt = fmtNum;
