import React, { useState, useCallback, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setFixedTableExpenses } from "../../../../redux/slices/truckerCalculatorSlice";
import {
  normalize,
  toNum,
  fmtNum,
  computeRow,
} from "../../../../utils/exprenseHelpers";

const FixedExpensesTable = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const main = useSelector((s) => s.truckerCalculator.main);

  const [rows, setRows] = useState([
    {
      id: "truckPayment",
      titleKey: "truckPayment",
      weekly: "",
      monthly: "",
      type: "fixed",
    },
    {
      id: "trailerPayment",
      titleKey: "trailerPayment",
      weekly: "",
      monthly: "",
      type: "fixed",
    },
    {
      id: "truckInsurance",
      titleKey: "truckInsurance",
      weekly: "",
      monthly: "",
      type: "fixed",
    },
    {
      id: "trailerInsurance",
      titleKey: "trailerInsurance",
      weekly: "",
      monthly: "",
      type: "fixed",
    },
  ]);

  const [focusMap, setFocusMap] = useState({});
  const setFocused = (rowId, field, val) =>
    setFocusMap((m) => ({
      ...m,
      [rowId]: { ...(m[rowId] || {}), [field]: val },
    }));
  const isFocused = (rowId, field) =>
    !!(focusMap[rowId] && focusMap[rowId][field]);

  const totals = useMemo(
    () => ({
      totalGross: Number(main?.totalGross) || 0,
      totalMiles: Number(main?.totalMiles) || 0,
    }),
    [main?.totalGross, main?.totalMiles]
  );

  useEffect(() => {
    const monthlyExpenses = rows.map((r) => {
      const numericRow = { ...r, monthly: toNum(r.monthly) };
      const { monthlyExpense } = computeRow(numericRow, totals);
      return monthlyExpense;
    });
    dispatch(setFixedTableExpenses(monthlyExpenses));
  }, [rows, totals, dispatch]);

  const handleWeeklyChange = useCallback((id, raw) => {
    const rawNorm = normalize(raw);
    setRows((prev) =>
      prev.map((r) => {
        if (r.id !== id) return r;

        if (r.type !== "fixed") {
          return { ...r, weekly: rawNorm };
        }

        if (rawNorm === "") return { ...r, weekly: "", monthly: "" };
        const weeklyNum = toNum(rawNorm);
        const monthlyNum = (weeklyNum * 4).toString();
        return { ...r, weekly: rawNorm, monthly: monthlyNum };
      })
    );
  }, []);

  const handleMonthlyChange = useCallback((id, raw) => {
    const rawNorm = normalize(raw);
    setRows((prev) =>
      prev.map((r) => {
        if (r.id !== id) return r;

        if (rawNorm === "") {
          return {
            ...r,
            monthly: "",
            weekly: r.type === "fixed" ? "" : r.weekly,
          };
        }

        if (r.type === "fixed") {
          const monthlyNum = toNum(rawNorm);
          const weeklyNum = (monthlyNum / 4).toString();
          return { ...r, monthly: rawNorm, weekly: weeklyNum };
        }

        return { ...r, monthly: rawNorm };
      })
    );
  }, []);

  const handleTypeChange = useCallback((id, value) => {
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, type: value } : r))
    );
  }, []);

  const displayWeekly = (row) => {
    const raw = row.weekly;
    if (raw === "" || raw == null) return "";
    if (isFocused(row.id, "weekly")) return raw;
    return `$${fmtNum(toNum(raw))}`;
  };

  const displayMonthly = (row) => {
    const raw = row.monthly;
    if (raw === "" || raw == null) return "";
    if (isFocused(row.id, "monthly")) return raw;
    const n = fmtNum(toNum(raw));
    return row.type === "gross" ? `${n}%` : `$${n}`;
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full bg-base-100 shadow-md rounded-xl">
        <thead className="bg-base-200 text-base-content">
          <tr>
            <th className="text-left w-1/6">
              {t("trucker-calculator.expenses.fixed")}
            </th>
            <th className="text-left w-1/6">
              {t("trucker-calculator.expenses.weekly")}
            </th>
            <th className="text-left w-1/6">
              {t("trucker-calculator.expenses.monthly")}
            </th>
            <th className="text-left w-1/6">
              {t("trucker-calculator.expenses.type")}
            </th>
            <th className="w-1/6 text-left"></th>
            <th className="w-1/6 text-left"></th>
          </tr>
        </thead>

        <tbody>
          {rows.map((item) => {
            // В рендере считаем метрики (без dispatch!)
            const numericRow = { ...item, monthly: toNum(item.monthly) };
            const { amountDisplay, perMile } = computeRow(numericRow, totals);

            return (
              <tr key={item.id} className="hover:bg-base-200">
                <td className="whitespace-nowrap">
                  {t(`trucker-calculator.expenses.items.${item.titleKey}`)}
                </td>

                <td>
                  <input
                    type="text"
                    inputMode="decimal"
                    aria-label={`${item.titleKey}-weekly`}
                    value={displayWeekly(item)}
                    onChange={(e) =>
                      handleWeeklyChange(item.id, e.target.value)
                    }
                    onFocus={(e) => {
                      setFocused(item.id, "weekly", true);
                      e.target.select();
                    }}
                    onBlur={() => setFocused(item.id, "weekly", false)}
                    placeholder="$0"
                    disabled={item.type !== "fixed"}
                    className="input input-bordered input-sm w-full border-x-0 border-t-0 !outline-0 disabled:opacity-60"
                  />
                </td>

                <td>
                  <input
                    type="text"
                    inputMode="decimal"
                    aria-label={`${item.titleKey}-monthly`}
                    value={displayMonthly(item)}
                    onChange={(e) =>
                      handleMonthlyChange(item.id, e.target.value)
                    }
                    onFocus={(e) => {
                      setFocused(item.id, "monthly", true);
                      e.target.select();
                    }}
                    onBlur={() => setFocused(item.id, "monthly", false)}
                    placeholder={item.type === "gross" ? "0%" : "$0"}
                    className="input input-bordered input-sm w-full border-x-0 border-t-0 !outline-0"
                  />
                </td>

                <td>
                  <select
                    className="select select-bordered select-sm w-28"
                    value={item.type}
                    onChange={(e) => handleTypeChange(item.id, e.target.value)}
                    aria-label={`${item.titleKey}-type`}
                  >
                    <option value="fixed">
                      {t("trucker-calculator.expenseSections.methods.fixed")}
                    </option>
                    <option value="gross">
                      {t("trucker-calculator.expenseSections.methods.gross")}
                    </option>
                    <option value="miles">
                      {t("trucker-calculator.expenseSections.methods.miles")}
                    </option>
                  </select>
                </td>

                <td className="whitespace-nowrap text-left">
                  {item.type === "fixed"
                    ? `${amountDisplay.value}%`
                    : `$${fmtNum(amountDisplay.value)}`}
                </td>

                <td className="whitespace-nowrap text-left">
                  ${fmtNum(perMile)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FixedExpensesTable;
