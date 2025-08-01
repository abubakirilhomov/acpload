import React from "react";

const fixedExpenses = [
  {
    title: "Truck payment",
    weekly: 875,
    monthly: 3500,
    percent: "12.89%",
    perMile: "$0.33",
  },
  {
    title: "Trailer payment",
    weekly: 300,
    monthly: 1200,
    percent: "4.42%",
    perMile: "$0.11",
  },
  {
    title: "Truck insurance",
    weekly: 363,
    monthly: 1452,
    percent: "5.35%",
    perMile: "$0.14",
  },
  {
    title: "Trailer insurance",
    weekly: 88,
    monthly: 352,
    percent: "1.30%",
    perMile: "$0.03",
  },
];

const FixedExpensesTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full bg-base-100 shadow-md rounded-xl">
        <thead className="bg-base-200 text-base-content">
          <tr>
            <th className="text-left">Fixed</th>
            <th className="text-left">Weekly</th>
            <th className="text-left">Monthly</th>
            <th className="text-left">Type</th>
            <th className="text-left">%</th>
            <th className="text-left">$/mi</th>
          </tr>
        </thead>
        <tbody>
          {fixedExpenses.map((item, index) => (
            <tr key={index} className="hover:bg-base-200">
              <td>{item.title}</td>
              <td>${item.weekly.toLocaleString()}</td>
              <td>${item.monthly.toLocaleString()}</td>
              <td>
                <select className="select select-bordered select-sm w-24">
                  <option selected>Fixed $</option>
                  <option>Per Mile</option>
                  <option>Other</option>
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
