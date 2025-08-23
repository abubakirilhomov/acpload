import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  main: {
    // базовые входы (всегда числа!)
    totalGross: 0,
    workingDays: 0,
    totalMiles: 0,

    // производные
    netProfit: 0,
    netProfitPercent: 0,

    profitPerDay: 0,
    profitPerDayPercent: 0,

    mileProfit: 0,
    mileProfitPercent: 0,

    grossPerMile: 0,

    costPerMile: 0,
    costPerMilePercent: 0,

    totalExpenses: 0,
    totalExpensesPercent: 0,
  },
  fixed: {
    expense: 0,
    costPerMile: 0,
  },
  gross: {
    expense: 0,
    costPerMile: 0,
  },
  perMile: {
    expense: 0,
    costPerMile: 0,
  },
  fixedTableExpenses: 0,
  otherTableExpenses: 0,
  gallons: 0,
};

const safeDiv = (a, b) => (b ? a / b : 0);
const round2 = (n) => Math.round((Number.isFinite(n) ? n : 0) * 100) / 100;
const pct = (part, whole) => round2(safeDiv(part * 100, whole));

const recalcAll = (state) => {
  const m = state.main;

  // total expenses
  const totalExpenses =
    Number(state.fixedTableExpenses) + Number(state.otherTableExpenses);
  m.totalExpenses = round2(totalExpenses);
  m.totalExpensesPercent = pct(m.totalExpenses, m.totalGross);

  // net profit
  const netProfit = Number(m.totalGross) - Number(m.totalExpenses);
  m.netProfit = round2(netProfit);
  m.netProfitPercent = pct(m.netProfit, m.totalGross);

  // per-day
  m.profitPerDay = round2(safeDiv(m.netProfit, m.workingDays));
  // % от netProfit (как у тебя было)
  m.profitPerDayPercent = pct(m.profitPerDay, m.netProfit);

  // per-mile
  m.grossPerMile = round2(safeDiv(m.totalGross, m.totalMiles));
  m.costPerMile = round2(safeDiv(m.totalExpenses, m.totalMiles));
  m.mileProfit = round2(safeDiv(m.netProfit, m.totalMiles));

  // проценты от grossPerMile
  m.costPerMilePercent = pct(m.costPerMile, m.grossPerMile);
  m.mileProfitPercent = pct(m.mileProfit, m.grossPerMile);
};

const truckerCalculatorSlice = createSlice({
  name: "truckerCalculator",
  initialState,
  reducers: {
    setTotalGross: (state, action) => {
      state.main.totalGross = Number(action.payload) || 0;
      recalcAll(state);
    },
    setWorkingDays: (state, action) => {
      state.main.workingDays = Math.min(Number(action.payload) || 0, 31);
      recalcAll(state);
    },
    setTotalMiles: (state, action) => {
      state.main.totalMiles = Math.max(Number(action.payload) || 0, 0);
      recalcAll(state);
    },

    fixedCalculator: (state, action) => {
      const { monthly } = action.payload;
      const expense = pct(monthly, state.main.totalGross);
      const costPerMile = round2(safeDiv(monthly, state.main.totalMiles));
      state.fixed.expense = expense;
      state.fixed.costPerMile = costPerMile;
      recalcAll(state);
    },
    grossCalculator: (state, action) => {
      const { monthly } = action.payload;
      const expense = round2((state.main.totalGross / 100) * monthly);
      const costPerMile = round2(safeDiv(expense, state.main.totalMiles));
      state.gross.expense = expense;
      state.gross.costPerMile = costPerMile;
      recalcAll(state);
    },
    perMileCalculator: (state, action) => {
      const { monthly } = action.payload;
      const expense = round2(monthly * state.main.totalMiles);
      state.perMile.expense = expense;
      state.perMile.costPerMile = monthly;
      recalcAll(state);
    },

    setFixedTableExpenses: (state, action) => {
      const arr = Array.isArray(action.payload) ? action.payload : [];
      state.fixedTableExpenses = arr.reduce((s, n) => s + (Number(n) || 0), 0);
      recalcAll(state);
    },
    setOtherTableExpenses: (state, action) => {
      // action.payload = [{ name: "tableName", exprense: [120, 520, 651...] }]
      const arr = Array.isArray(action.payload) ? action.payload : [];
      state.otherTableExpenses = arr.reduce(
        (s, n) => s + (Number(n.expense) || 0),
        0
      );
      recalcAll(state);
    },
    gallonsCalculator: (state, action) => {
      const { gallons } = action.payload;
      state.gallons = round2(safeDiv(state.main.totalMiles, gallons));
    },
  },
});

export const {
  setTotalGross,
  setWorkingDays,
  setTotalMiles,

  fixedCalculator,
  grossCalculator,
  perMileCalculator,

  setFixedTableExpenses,
  setOtherTableExpenses,
  gallonsCalculator,
} = truckerCalculatorSlice.actions;

export default truckerCalculatorSlice.reducer;
