import React from "react";
import { useTranslation } from "react-i18next";

const ExpenseSection = () => {
  const { t } = useTranslation();

  const sections = [
    {
      title: t("trucker-calculator.expenseSections.services"),
      items: [
        {
          label: t("trucker-calculator.expenseSections.labels.dispatch"),
          value: "4%",
          type: t("trucker-calculator.expenseSections.methods.gross"),
          amount: "$1086.36",
          perMile: "$0.10",
        },
        {
          label: t("trucker-calculator.expenseSections.labels.safety"),
          value: "$0",
          type: t("trucker-calculator.expenseSections.methods.fixed"),
          amount: "0",
          perMile: "0",
        },
        {
          label: t("trucker-calculator.expenseSections.labels.factoring"),
          value: "0",
          type: t("trucker-calculator.expenseSections.methods.gross"),
          amount: "0",
          perMile: "0",
        },
      ],
    },
    {
      title: t("trucker-calculator.expenseSections.wages"),
      items: [
        {
          label: t("trucker-calculator.expenseSections.labels.driverSalary"),
          value: "0",
          type: t("trucker-calculator.expenseSections.methods.miles"),
          amount: "0",
          perMile: "0",
        },
        {
          label: t("trucker-calculator.expenseSections.labels.bonuses"),
          value: "$0",
          type: t("trucker-calculator.expenseSections.methods.fixed"),
          amount: "0",
          perMile: "0",
        },
      ],
    },
    {
      title: t("trucker-calculator.expenseSections.deductions"),
      items: [
        {
          label: t("trucker-calculator.expenseSections.labels.otherDeductions"),
          value: "0",
          type: t("trucker-calculator.expenseSections.methods.fixed"),
          amount: "0",
          perMile: "0",
        },
      ],
    },
    {
      title: t("trucker-calculator.expenseSections.expenses"),
      items: [
        {
          label: t("trucker-calculator.expenseSections.labels.gallons"),
          value: "0",
          type: "0 mpg",
          amount: "0",
          perMile: "0",
        },
        {
          label: t("trucker-calculator.expenseSections.labels.fuel"),
          value: "$0.7",
          type: t("trucker-calculator.expenseSections.methods.miles"),
          amount: "$7342.30",
          perMile: "$0.70",
        },
        {
          label: t("trucker-calculator.expenseSections.labels.tolls"),
          value: "$1000",
          type: t("trucker-calculator.expenseSections.methods.fixed"),
          amount: "3.68%",
          perMile: "$0.10",
        },
        {
          label: t("trucker-calculator.expenseSections.labels.maintenance"),
          value: "$500",
          type: t("trucker-calculator.expenseSections.methods.fixed"),
          amount: "1.84%",
          perMile: "$0.05",
        },
        {
          label: t("trucker-calculator.expenseSections.labels.eld"),
          value: "$40",
          type: t("trucker-calculator.expenseSections.methods.fixed"),
          amount: "0.15%",
          perMile: "$0.01",
        },
        {
          label: t("trucker-calculator.expenseSections.labels.ifta"),
          value: "$200",
          type: t("trucker-calculator.expenseSections.methods.fixed"),
          amount: "0.74%",
          perMile: "$0.02",
        },
        {
          label: t("trucker-calculator.expenseSections.labels.other"),
          value: "$0",
          type: t("trucker-calculator.expenseSections.methods.fixed"),
          amount: "0",
          perMile: "0",
        },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {sections.map((section, idx) => (
        <div key={idx} className="bg-base-100 rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-2">{section.title}</h2>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-base-200">
                <tr>
                  <th className="text-left">
                    {t("trucker-calculator.expenseSections.table.type")}
                  </th>
                  <th className="text-left">
                    {t("trucker-calculator.expenseSections.table.value")}
                  </th>
                  <th className="text-left">
                    {t("trucker-calculator.expenseSections.table.method")}
                  </th>
                  <th className="text-left">
                    {t("trucker-calculator.expenseSections.table.amount")}
                  </th>
                  <th className="text-left">
                    {t("trucker-calculator.expenseSections.table.perMile")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {section.items.map((item, i) => (
                  <tr key={i} className="hover:bg-base-200">
                    <td>{item.label}</td>
                    <td>
                      <input
                        type="text"
                        defaultValue={item.value}
                        className="input input-bordered input-sm w-24"
                      />
                    </td>
                    <td>
                      <select className="select select-bordered select-sm w-28">
                        <option selected>{item.type}</option>
                        <option>
                          {t(
                            "trucker-calculator.expenseSections.methods.fixed"
                          )}
                        </option>
                        <option>
                          {t(
                            "trucker-calculator.expenseSections.methods.gross"
                          )}
                        </option>
                        <option>
                          {t(
                            "trucker-calculator.expenseSections.methods.miles"
                          )}
                        </option>
                      </select>
                    </td>
                    <td>{item.amount}</td>
                    <td>{item.perMile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseSection;
