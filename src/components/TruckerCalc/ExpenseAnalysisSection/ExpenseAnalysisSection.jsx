// components/TruckerCalc/ExpenseAnalysisSection.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const categories = [
  { name: 'Fixed', amount: 6504, perMile: 0.61, color: '#ef4444' },  // red-500
  { name: 'Fuel', amount: 7342, perMile: 0.70, color: '#a855f7' },   // purple-500
  { name: 'Services', amount: 1086, perMile: 0.10, color: '#3b82f6' }, // blue-500
  { name: 'Expenses', amount: 1740, perMile: 0.18, color: '#22c55e' }, // green-500
];

const total = 16672.66;

const ExpenseAnalysisSection = () => {
  const data = {
    labels: categories.map(cat => cat.name),
    datasets: [
      {
        data: categories.map(cat => cat.amount),
        backgroundColor: categories.map(cat => cat.color),
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const value = context.raw.toLocaleString();
            return `$${value}`;
          },
        },
      },
    },
    cutout: '60%', // donut hole
  };

  return (
    <div className="shadow rounded-xl p-6 mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Expense Table */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Analysis of your expenses</h2>
        <div className="space-y-2">
          {categories.map((cat) => (
            <div key={cat.name} className="flex justify-between items-center border-b py-2">
              <span className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full`} style={{ backgroundColor: cat.color }} />
                {cat.name}
              </span>
              <span>${cat.amount.toLocaleString()}</span>
              <span className="text-sm text-gray-500">${cat.perMile.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pie Chart with Total in Center */}
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
