import React, { useMemo, useState, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  setOtherTableExpenses,
  gallonsCalculator,
} from "../../../../redux/slices/truckerCalculatorSlice";
import {
  normalize,
  toNum,
  fmt,
  safeDiv,
  round2,
  pct,
} from "../../../../utils/exprenseHelpers";

const ExpenseSection = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { totalGross, totalMiles } = useSelector(
    (s) => s.truckerCalculator.main
  );
  const mpgFromStore = useSelector((s) => s.truckerCalculator.gallons);

  const initialSections = useMemo(
    () => [
      {
        name: "services",
        title: t("trucker-calculator.expenseSections.services"),
        items: [
          {
            id: "dispatch",
            label: t("trucker-calculator.expenseSections.labels.dispatch"),
            value: "",
            type: "gross",
          },
          {
            id: "safety",
            label: t("trucker-calculator.expenseSections.labels.safety"),
            value: "",
            type: "fixed",
          },
          {
            id: "factoring",
            label: t("trucker-calculator.expenseSections.labels.factoring"),
            value: "",
            type: "gross",
          },
        ],
      },
      {
        name: "wages",
        title: t("trucker-calculator.expenseSections.wages"),
        items: [
          {
            id: "driverSalary",
            label: t("trucker-calculator.expenseSections.labels.driverSalary"),
            value: "",
            type: "miles",
          },
          {
            id: "bonuses",
            label: t("trucker-calculator.expenseSections.labels.bonuses"),
            value: "",
            type: "fixed",
          },
        ],
      },
      {
        name: "deductions",
        title: t("trucker-calculator.expenseSections.deductions"),
        items: [
          {
            id: "otherDeductions",
            label: t(
              "trucker-calculator.expenseSections.labels.otherDeductions"
            ),
            value: "",
            type: "fixed",
          },
        ],
      },
      {
        name: "expenses",
        title: t("trucker-calculator.expenseSections.expenses"),
        items: [
          {
            id: "gallons",
            label: t("trucker-calculator.expenseSections.labels.gallons"),
            value: "",
            type: "gallons",
          },
          {
            id: "fuel",
            label: t("trucker-calculator.expenseSections.labels.fuel"),
            value: "",
            type: "miles",
          },
          {
            id: "tolls",
            label: t("trucker-calculator.expenseSections.labels.tolls"),
            value: "",
            type: "fixed",
          },
          {
            id: "maint",
            label: t("trucker-calculator.expenseSections.labels.maintenance"),
            value: "",
            type: "fixed",
          },
          {
            id: "eld",
            label: t("trucker-calculator.expenseSections.labels.eld"),
            value: "",
            type: "fixed",
          },
          {
            id: "ifta",
            label: t("trucker-calculator.expenseSections.labels.ifta"),
            value: "",
            type: "fixed",
          },
        ],
      },
      {
        name: "other",
        title: t("trucker-calculator.expenseSections.labels.other"),
        items: [
          {
            id: "other",
            label: t("trucker-calculator.expenseSections.labels.other"),
            value: "",
            type: "fixed",
          },
        ],
      },
    ],
    [t]
  );

  const [sections, setSections] = useState(initialSections);

  const [focusMap, setFocusMap] = useState({});
  const setFocused = (sec, id, val) =>
    setFocusMap((m) => ({ ...m, [sec]: { ...(m[sec] || {}), [id]: val } }));
  const isFocused = (sec, id) => !!(focusMap[sec] && focusMap[sec][id]);

  const computedSections = useMemo(() => {
    return sections.map((sec) => {
      const items = sec.items.map((it) => {
        const v = toNum(it.value);

        if (it.type === "gallons") {
          return {
            ...it,
            _monthlyExpense: 0,
            amount: 0,
            perMile: mpgFromStore,
          };
        }

        let monthlyExpense = 0;
        if (it.type === "fixed") {
          monthlyExpense = v;
        } else if (it.type === "gross") {
          monthlyExpense = round2((Number(totalGross) / 100) * v);
        } else if (it.type === "miles") {
          monthlyExpense = round2(v * Number(totalMiles));
        }

        const perMile =
          it.type === "miles"
            ? v
            : round2(safeDiv(monthlyExpense, Number(totalMiles)));

        const amount =
          it.type === "fixed"
            ? pct(monthlyExpense, Number(totalGross))
            : monthlyExpense;

        return { ...it, _monthlyExpense: monthlyExpense, amount, perMile };
      });

      return { ...sec, items };
    });
  }, [sections, totalGross, totalMiles, mpgFromStore]);

  useEffect(() => {
    const payload = computedSections.map((sec) => {
      const sum = sec.items
        .filter((i) => i.type !== "gallons")
        .reduce((s, i) => s + (Number(i._monthlyExpense) || 0), 0);
      return { name: sec.name, expense: sum };
    });
    dispatch(setOtherTableExpenses(payload));
  }, [computedSections, dispatch]);

  const handleValueChange = useCallback(
    (secName, itemId, raw, itemType) => {
      const nextRaw = normalize(raw);
      setSections((prev) =>
        prev.map((sec) =>
          sec.name !== secName
            ? sec
            : {
                ...sec,
                items: sec.items.map((it) =>
                  it.id === itemId ? { ...it, value: nextRaw } : it
                ),
              }
        )
      );

      if (itemType === "gallons") {
        const gallons = toNum(nextRaw);
        dispatch(gallonsCalculator({ gallons }));
      }
    },
    [dispatch]
  );

  const handleTypeChange = useCallback((secName, itemId, newType) => {
    if (newType === "gallons") return;
    setSections((prev) =>
      prev.map((sec) =>
        sec.name !== secName
          ? sec
          : {
              ...sec,
              items: sec.items.map((it) =>
                it.id === itemId ? { ...it, type: newType } : it
              ),
            }
      )
    );
  }, []);

  const displayValue = (secName, item) => {
    const raw = item.value;
    if (raw === "" || raw == null) return "";
    if (isFocused(secName, item.id)) return raw;

    if (item.type === "gross") return `${fmt(raw)}%`;
    if (item.type === "miles") return `$${fmt(raw)}`;
    if (item.type === "fixed") return `$${fmt(raw)}`;
    if (item.type === "gallons") return fmt(raw);
    return raw;
  };

  return (
    <div className="space-y-8">
      {computedSections.map((section) => (
        <div key={section.name} className="bg-base-100 rounded-xl shadow py-4">
          <h2 className="text-lg font-semibold mb-2">{section.title}</h2>

          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-base-200 text-base-content">
                <tr>
                  <th className="text-left w-1/6">
                    {t("trucker-calculator.expenseSections.table.type")}
                  </th>
                  <th className="text-left w-2/6">
                    {t("trucker-calculator.expenseSections.table.value")}
                  </th>
                  <th className="text-left w-1/6">
                    {t("trucker-calculator.expenseSections.table.method")}
                  </th>
                  <th className="w-1/6"></th>
                  <th className="w-1/6"></th>
                </tr>
              </thead>

              <tbody>
                {section.items.map((item) => {
                  const amountCell =
                    item.type === "gallons"
                      ? ""
                      : item.type === "fixed"
                      ? `${fmt(item.amount)}%`
                      : `$${fmt(item.amount)}`;

                  const perMileCell =
                    item.type === "gallons"
                      ? `${fmt(item.perMile)} mpg`
                      : `$${fmt(item.perMile)}`;

                  return (
                    <tr key={item.id} className="hover:bg-base-200">
                      <td className="whitespace-nowrap">{item.label}</td>

                      <td>
                        <input
                          type="text"
                          inputMode="decimal"
                          value={displayValue(section.name, item)}
                          onChange={(e) =>
                            handleValueChange(
                              section.name,
                              item.id,
                              e.target.value,
                              item.type
                            )
                          }
                          onFocus={(e) => {
                            setFocused(section.name, item.id, true);
                            e.target.select();
                          }}
                          onBlur={() =>
                            setFocused(section.name, item.id, false)
                          }
                          placeholder={
                            item.type === "gross"
                              ? "0%"
                              : item.type === "gallons"
                              ? "0"
                              : "$0"
                          }
                          className="input input-bordered input-sm w-full border-x-0 border-t-0 !outline-0"
                        />
                      </td>

                      <td>
                        {item.type !== "gallons" ? (
                          <select
                            value={item.type}
                            onChange={(e) =>
                              handleTypeChange(
                                section.name,
                                item.id,
                                e.target.value
                              )
                            }
                            className="select select-bordered select-sm w-28"
                          >
                            <option value="fixed">
                              {t(
                                "trucker-calculator.expenseSections.methods.fixed"
                              )}
                            </option>
                            <option value="gross">
                              {t(
                                "trucker-calculator.expenseSections.methods.gross"
                              )}
                            </option>
                            <option value="miles">
                              {t(
                                "trucker-calculator.expenseSections.methods.miles"
                              )}
                            </option>
                          </select>
                        ) : (
                          <input
                            type="text"
                            disabled
                            className="input input-bordered input-sm w-28 opacity-60"
                          />
                        )}
                      </td>

                      {item.type !== "gallons" ? (
                        <>
                          <td className="whitespace-nowrap">{amountCell}</td>
                          <td className="whitespace-nowrap">{perMileCell}</td>
                        </>
                      ) : (
                        <>
                          <td className="whitespace-nowrap"></td>
                          <td className="whitespace-nowrap">{perMileCell}</td>
                        </>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseSection;
