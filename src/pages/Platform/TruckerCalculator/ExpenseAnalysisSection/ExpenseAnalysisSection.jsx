import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const safeDiv = (a, b) => (b ? a / b : 0);

const ExpenseAnalysisSection = () => {
  const { t } = useTranslation();

  const fixedTableExpenses = useSelector(
    (s) => s.truckerCalculator.fixedTableExpenses
  );
  const otherTableExpenses = useSelector(
    (s) => s.truckerCalculator.otherTableExpenses
  );
  const totalMiles = useSelector((s) => s.truckerCalculator.main.totalMiles);

  const cats = useMemo(() => {
    const fixed = Number(fixedTableExpenses) || 0;
    const other = Number(otherTableExpenses) || 0;

    return [
      {
        name: t("trucker-calculator.expenseAnalysis.categories.fixed"),
        amount: fixed,
        perMile: safeDiv(fixed, totalMiles),
        color: "#ef4444",
      },
      {
        name:
          t("trucker-calculator.expenseSections.labels.other") ||
          t("trucker-calculator.expenseSections.labels.other"),
        amount: other,
        perMile: safeDiv(other, totalMiles),
        color: "#3b82f6",
      },
    ];
  }, [fixedTableExpenses, otherTableExpenses, totalMiles, t]);

  const total = useMemo(
    () => cats.reduce((s, c) => s + (Number(c.amount) || 0), 0),
    [cats]
  );

  const data = useMemo(
    () => ({
      labels: cats.map((c) => c.name),
      datasets: [
        {
          data: cats.map((c) => c.amount),
          backgroundColor: cats.map((c) => c.color),
          borderWidth: 0,
        },
      ],
    }),
    [cats]
  );

  const options = useMemo(
    () => ({
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function (context) {
              const value = Number(context.raw || 0).toLocaleString("en-US", {
                maximumFractionDigits: 2,
              });
              return `$${value}`;
            },
          },
        },
      },
      cutout: "60%",
    }),
    []
  );

  return (
    <div className="shadow rounded-xl p-6 mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-lg font-semibold mb-4">
          {t("trucker-calculator.expenseAnalysis.title")}
        </h2>
        <div className="space-y-2">
          {cats.map((cat) => (
            <div
              key={cat.name}
              className="flex justify-between items-center border-b py-2"
            >
              <span className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: cat.color }}
                />
                {cat.name}
              </span>
              <span>
                $
                {Number(cat.amount).toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })}
              </span>
              <span className="text-sm text-gray-500">
                $
                {safeDiv(Number(cat.amount), Number(totalMiles)).toLocaleString(
                  "en-US",
                  { maximumFractionDigits: 2 }
                )}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center relative">
        <div className="w-48 h-48 relative">
          <Pie data={data} options={options} />
          <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold">
            $
            {Number(total).toLocaleString("en-US", {
              maximumFractionDigits: 2,
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseAnalysisSection;
