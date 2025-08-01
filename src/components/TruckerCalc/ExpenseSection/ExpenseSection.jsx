import React from "react";

const sections = [
  {
    title: "Services",
    items: [
      {
        label: "Dispatch",
        value: "4%",
        type: "Gross %",
        amount: "$1086.36",
        perMile: "$0.10",
      },
      {
        label: "Safety",
        value: "$0",
        type: "Fixed $",
        amount: "0",
        perMile: "0",
      },
      {
        label: "Factoring",
        value: "0",
        type: "Gross %",
        amount: "0",
        perMile: "0",
      },
    ],
  },
  {
    title: "Wages and bonuses",
    items: [
      {
        label: "Driver salary",
        value: "0",
        type: "Miles $/mi",
        amount: "0",
        perMile: "0",
      },
      {
        label: "Bonuses",
        value: "$0",
        type: "Fixed $",
        amount: "0",
        perMile: "0",
      },
    ],
  },
  {
    title: "Deductions",
    items: [
      {
        label: "Other deductions",
        value: "0",
        type: "Fixed $",
        amount: "0",
        perMile: "0",
      },
    ],
  },
  {
    title: "Expenses",
    items: [
      {
        label: "Gallons",
        value: "0",
        type: "0 mpg",
        amount: "0",
        perMile: "0",
      },
      {
        label: "Fuel",
        value: "$0.7",
        type: "Miles $/mi",
        amount: "$7342.30",
        perMile: "$0.70",
      },
      {
        label: "Tolls",
        value: "$1000",
        type: "Fixed $",
        amount: "3.68%",
        perMile: "$0.10",
      },
      {
        label: "Maintenance",
        value: "$500",
        type: "Fixed $",
        amount: "1.84%",
        perMile: "$0.05",
      },
      {
        label: "ELD",
        value: "$40",
        type: "Fixed $",
        amount: "0.15%",
        perMile: "$0.01",
      },
      {
        label: "IFTA",
        value: "$200",
        type: "Fixed $",
        amount: "0.74%",
        perMile: "$0.02",
      },
      {
        label: "Other",
        value: "$0",
        type: "Fixed $",
        amount: "0",
        perMile: "0",
      },
    ],
  },
];

const ExpenseSection = () => {
  return (
    <div className="space-y-8">
      {sections.map((section, idx) => (
        <div key={idx} className="bg-base-100 rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-2">{section.title}</h2>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-base-200">
                <tr>
                  <th className="text-left">Type</th>
                  <th className="text-left">Value</th>
                  <th className="text-left">Method</th>
                  <th className="text-left">Amount</th>
                  <th className="text-left">$/mi</th>
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
                        <option>Fixed $</option>
                        <option>Gross %</option>
                        <option>Miles $/mi</option>
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