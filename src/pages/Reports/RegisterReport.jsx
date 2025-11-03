import React from 'react';

const RegisterReport = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Register Report</h1>
        <p className="text-gray-600 mt-2">Cash register transactions and closing summary</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>All Registers</option>
              <option>Register 1</option>
              <option>Register 2</option>
            </select>
            <input type="date" className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">Export</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg"><div className="text-sm text-gray-600">Opening Balance</div><div className="text-2xl font-bold text-blue-600">$5,000</div></div>
        <div className="bg-green-50 p-4 rounded-lg"><div className="text-sm text-gray-600">Cash Sales</div><div className="text-2xl font-bold text-green-600">$12,850</div></div>
        <div className="bg-red-50 p-4 rounded-lg"><div className="text-sm text-gray-600">Cash Out</div><div className="text-2xl font-bold text-red-600">$3,200</div></div>
        <div className="bg-teal-50 p-4 rounded-lg"><div className="text-sm text-gray-600">Closing Balance</div><div className="text-2xl font-bold text-teal-600">$14,650</div></div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Transaction Summary</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment Method</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Transactions</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr><td className="px-6 py-4 text-sm">Cash</td><td className="px-6 py-4 text-sm text-right">45</td><td className="px-6 py-4 text-sm text-right font-semibold">$8,500</td></tr>
            <tr><td className="px-6 py-4 text-sm">Credit Card</td><td className="px-6 py-4 text-sm text-right">28</td><td className="px-6 py-4 text-sm text-right font-semibold">$3,150</td></tr>
            <tr><td className="px-6 py-4 text-sm">Debit Card</td><td className="px-6 py-4 text-sm text-right">18</td><td className="px-6 py-4 text-sm text-right font-semibold">$1,200</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisterReport;
