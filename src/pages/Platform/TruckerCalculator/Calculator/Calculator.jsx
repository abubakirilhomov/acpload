import React from "react";
import { useTranslation } from "react-i18next";

const Calculator = () => {
  const { t } = useTranslation();

  const data = {
    totalGross: 27159,
    workingDays: 30,
    totalMiles: 10489,
    netProfit: 10486,
    profitPerDay: 349.53,
    mileProfit: 1.0,
    costPerMile: 1.59,
    totalExpenses: 16672.66,
    grossPerMile: 2.59,
    netProfitPercent: 38.61,
    costPercent: 61.39,
    profitPerDayPercent: 3.33,
  };

  const StatBox = ({ title, value, subtext, highlight = false }) => (
    <div className="bg-base-100 shadow-md rounded-xl p-4 flex flex-col gap-2 w-full">
      <span className="text-gray-500 text-sm">{title}</span>
      <div className="text-2xl font-bold">{value}</div>
      {subtext && (
        <div
          className={`text-sm font-semibold ${
            highlight ? "text-green-500" : "text-gray-400"
          }`}
        >
          {subtext}
        </div>
      )}
    </div>
  );

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <StatBox
        title={t("trucker-calculator.stats.totalGross")}
        value={`$${data.totalGross.toLocaleString()}`}
      />
      <StatBox
        title={t("trucker-calculator.stats.workingDays")}
        value={data.workingDays}
      />
      <StatBox
        title={t("trucker-calculator.stats.totalMiles")}
        value={`${data.totalMiles.toLocaleString()}mi`}
      />
      <StatBox
        title={t("trucker-calculator.stats.grossPerMile")}
        value={`$${data.grossPerMile}`}
      />

      <StatBox
        title={t("trucker-calculator.stats.netProfit")}
        value={`$${data.netProfit.toLocaleString()}`}
        subtext={`${data.netProfitPercent}%`}
        highlight
      />
      <StatBox
        title={t("trucker-calculator.stats.profitPerDay")}
        value={`$${data.profitPerDay}`}
        subtext={`${data.profitPerDayPercent}%`}
        highlight
      />
      <StatBox
        title={t("trucker-calculator.stats.mileProfit")}
        value={`$${data.mileProfit}`}
        subtext={`${data.netProfitPercent}%`}
        highlight
      />
      <StatBox
        title={t("trucker-calculator.stats.costPerMile")}
        value={`$${data.costPerMile}`}
        subtext={`${data.costPercent}%`}
        highlight
      />

      <div className="col-span-full">
        <div className="bg-base-200 rounded-xl p-4 text-center">
          <span className="font-semibold">
            {t("trucker-calculator.stats.totalExpenses")}:{" "}
          </span>
          <span className="text-error font-bold">
            ${data.totalExpenses.toLocaleString()}{" "}
          </span>
          <span className="text-gray-500">({data.costPercent}%)</span>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
