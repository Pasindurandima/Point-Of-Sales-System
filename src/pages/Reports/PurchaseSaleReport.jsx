import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PurchaseSaleReport = () => {
  const comparisonData = [
    { month: 'Jan', purchases: 42000, sales: 65000 },
    { month: 'Feb', purchases: 48000, sales: 72000 },
    { month: 'Mar', purchases: 45000, sales: 68000 },
    { month: 'Apr', purchases: 52000, sales: 78000 },
    { month: 'May', purchases: 47000, sales: 71000 },
    { month: 'Jun', purchases: 55000, sales: 82000 },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Purchase & Sale Report</h1>
        <p className="text-gray-600 mt-2">Comparative analysis of purchases and sales</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <input type="date" className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <input type="date" className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">Export Report</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg shadow-md">
          <div className="text-sm opacity-90 mb-2">Total Purchases</div>
          <div className="text-3xl font-bold">$289,000</div>
          <div className="text-sm opacity-75 mt-2">Total Transactions: 145</div>
        </div>
        <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-6 rounded-lg shadow-md">
          <div className="text-sm opacity-90 mb-2">Total Sales</div>
          <div className="text-3xl font-bold">$436,000</div>
          <div className="text-sm opacity-75 mt-2">Total Transactions: 328</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Purchase vs Sale Comparison</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={comparisonData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="purchases" fill="#f97316" name="Purchases" />
            <Bar dataKey="sales" fill="#14b8a6" name="Sales" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Top Purchases</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Supplier</th>
                  <th className="px-4 py-2 text-right text-xs font-medium text-gray-500">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-2 text-sm">ABC Suppliers</td><td className="px-4 py-2 text-sm text-right font-medium">$85,000</td></tr>
                <tr><td className="px-4 py-2 text-sm">XYZ Wholesale</td><td className="px-4 py-2 text-sm text-right font-medium">$72,000</td></tr>
                <tr><td className="px-4 py-2 text-sm">Global Trade</td><td className="px-4 py-2 text-sm text-right font-medium">$65,000</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Top Sales</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Customer</th>
                  <th className="px-4 py-2 text-right text-xs font-medium text-gray-500">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-2 text-sm">Retail Chain A</td><td className="px-4 py-2 text-sm text-right font-medium">$125,000</td></tr>
                <tr><td className="px-4 py-2 text-sm">Corporate Client B</td><td className="px-4 py-2 text-sm text-right font-medium">$98,000</td></tr>
                <tr><td className="px-4 py-2 text-sm">Walk-in Customers</td><td className="px-4 py-2 text-sm text-right font-medium">$85,000</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSaleReport;
