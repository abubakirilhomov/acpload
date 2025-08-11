import React from "react";
import { useTranslation } from "react-i18next";

const fixedExpenses = [
  {
    titleKey: "truckPayment",
    weekly: 875,
    monthly: 3500,
    percent: "12.89%",
    perMile: "$0.33",
  },
  {
    titleKey: "trailerPayment",
    weekly: 300,
    monthly: 1200,
    percent: "4.42%",
    perMile: "$0.11",
  },
  {
    titleKey: "truckInsurance",
    weekly: 363,
    monthly: 1452,
    percent: "5.35%",
    perMile: "$0.14",
  },
  {
    titleKey: "trailerInsurance",
    weekly: 88,
    monthly: 352,
    percent: "1.30%",
    perMile: "$0.03",
  },
];

const FixedExpensesTable = () => {
  const { t } = useTranslation();

  return (
    <div className="overflow-x-auto">
      <table className="table w-full bg-base-100 shadow-md rounded-xl">
        <thead className="bg-base-200 text-base-content">
          <tr>
            <th className="text-left">{t("trucker-calculator.expenses.fixed")}</th>
            <th className="text-left">{t("trucker-calculator.expenses.weekly")}</th>
            <th className="text-left">{t("trucker-calculator.expenses.monthly")}</th>
            <th className="text-left">{t("trucker-calculator.expenses.type")}</th>
            <th className="text-left">%</th>
            <th className="text-left">$/mi</th>
          </tr>
        </thead>
        <tbody>
          {fixedExpenses.map((item, index) => (
            <tr key={index} className="hover:bg-base-200">
              <td>{t(`trucker-calculator.expenses.items.${item.titleKey}`)}</td>
              <td>${item.weekly.toLocaleString()}</td>
              <td>${item.monthly.toLocaleString()}</td>
              <td>
                <select className="select select-bordered select-sm w-24">
                  <option>{t("trucker-calculator.expenses.typeFixed")}</option>
                  <option>{t("trucker-calculator.expenses.typePerMile")}</option>
                  <option>{t("trucker-calculator.expenses.typeOther")}</option>
                </select>
              </td>
              <td>{item.percent}</td>
              <td>{item.perMile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FixedExpensesTable;
