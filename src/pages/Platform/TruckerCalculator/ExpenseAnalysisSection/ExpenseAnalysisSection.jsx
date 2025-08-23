import React from "react";
import { useTranslation } from "react-i18next";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const categories = (t) => [
  {
    name: t("trucker-calculator.expenseAnalysis.categories.fixed"),
    amount: 6504,
    perMile: 0.61,
    color: "#ef4444",
  },
  {
    name: t("trucker-calculator.expenseAnalysis.categories.fuel"),
    amount: 7342,
    perMile: 0.7,
    color: "#a855f7",
  },
  {
    name: t("trucker-calculator.expenseAnalysis.categories.services"),
    amount: 1086,
    perMile: 0.1,
    color: "#3b82f6",
  },
  {
    name: t("trucker-calculator.expenseAnalysis.categories.expenses"),
    amount: 1740,
    perMile: 0.18,
    color: "#22c55e",
  },
];

const total = 16672.66;

const ExpenseAnalysisSection = () => {
  const { t } = useTranslation();
  const cats = categories(t);

  const data = {
    labels: cats.map((cat) => cat.name),
    datasets: [
      {
        data: cats.map((cat) => cat.amount),
        backgroundColor: cats.map((cat) => cat.color),
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.raw.toLocaleString();
            return `$${value}`;
          },
        },
      },
    },
    cutout: "60%",
  };

  return (
    <div className="shadow rounded-xl p-6 mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Expense Table */}
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
                  className={`w-3 h-3 rounded-full`}
                  style={{ backgroundColor: cat.color }}
                />
                {cat.name}
              </span>
              <span>${cat.amount.toLocaleString()}</span>
              <span className="text-sm text-gray-500">
                ${cat.perMile.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Pie Chart */}
      <div className="flex items-center justify-center relative">
        <div className="w-48 h-48 relative">
          <Pie data={data} options={options} />
          <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold">
            ${total.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseAnalysisSection;
