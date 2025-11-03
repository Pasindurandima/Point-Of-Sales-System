import React from 'react';

const ExpenseReport = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Expense Report</h1>
        <p className="text-gray-600 mt-2">Comprehensive expense analysis and breakdown</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <input type="date" className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <input type="date" className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>All Categories</option>
              <option>Office Supplies</option>
              <option>Utilities</option>
              <option>Salaries</option>
            </select>
          </div>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">Export</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Transactions</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Total Amount</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">% of Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr><td className="px-6 py-4 text-sm">Salaries & Wages</td><td className="px-6 py-4 text-sm text-right">12</td><td className="px-6 py-4 text-sm text-right font-semibold">$35,000</td><td className="px-6 py-4 text-sm text-right">43.2%</td></tr>
            <tr><td className="px-6 py-4 text-sm">Rent</td><td className="px-6 py-4 text-sm text-right">3</td><td className="px-6 py-4 text-sm text-right font-semibold">$12,000</td><td className="px-6 py-4 text-sm text-right">14.8%</td></tr>
            <tr><td className="px-6 py-4 text-sm">Utilities</td><td className="px-6 py-4 text-sm text-right">8</td><td className="px-6 py-4 text-sm text-right font-semibold">$4,500</td><td className="px-6 py-4 text-sm text-right">5.6%</td></tr>
            <tr><td className="px-6 py-4 text-sm">Marketing</td><td className="px-6 py-4 text-sm text-right">15</td><td className="px-6 py-4 text-sm text-right font-semibold">$3,500</td><td className="px-6 py-4 text-sm text-right">4.3%</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseReport;
