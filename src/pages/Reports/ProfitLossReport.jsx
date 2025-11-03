import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ProfitLossReport = () => {
  const monthlyData = [
    { month: 'Jan', revenue: 45000, expenses: 28000, profit: 17000 },
    { month: 'Feb', revenue: 52000, expenses: 31000, profit: 21000 },
    { month: 'Mar', revenue: 48000, expenses: 29000, profit: 19000 },
    { month: 'Apr', revenue: 61000, expenses: 35000, profit: 26000 },
    { month: 'May', revenue: 55000, expenses: 32000, profit: 23000 },
    { month: 'Jun', revenue: 67000, expenses: 38000, profit: 29000 },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Profit & Loss Report</h1>
        <p className="text-gray-600 mt-2">Comprehensive income statement and profitability analysis</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <input type="date" className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <input type="date" className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>All Locations</option>
              <option>Main Office</option>
              <option>Branch Store</option>
            </select>
          </div>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">
            Export PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-md">
          <div className="text-sm opacity-90 mb-2">Total Revenue</div>
          <div className="text-3xl font-bold">$328,000</div>
          <div className="text-xs opacity-75 mt-2">↑ 12% from last period</div>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-lg shadow-md">
          <div className="text-sm opacity-90 mb-2">Total Expenses</div>
          <div className="text-3xl font-bold">$193,000</div>
          <div className="text-xs opacity-75 mt-2">↑ 8% from last period</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-md">
          <div className="text-sm opacity-90 mb-2">Net Profit</div>
          <div className="text-3xl font-bold">$135,000</div>
          <div className="text-xs opacity-75 mt-2">↑ 18% from last period</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Profit Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} name="Revenue" />
            <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} name="Expenses" />
            <Line type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={2} name="Profit" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Detailed Statement</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-teal-600 mb-2">REVENUE</h3>
            <div className="ml-4 space-y-1">
              <div className="flex justify-between text-sm"><span>Sales Revenue</span><span className="font-medium">$310,000</span></div>
              <div className="flex justify-between text-sm"><span>Service Revenue</span><span className="font-medium">$18,000</span></div>
              <div className="flex justify-between font-semibold border-t pt-2"><span>Total Revenue</span><span className="text-blue-600">$328,000</span></div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-teal-600 mb-2">COST OF GOODS SOLD</h3>
            <div className="ml-4 space-y-1">
              <div className="flex justify-between text-sm"><span>Opening Stock</span><span className="font-medium">$85,000</span></div>
              <div className="flex justify-between text-sm"><span>Purchases</span><span className="font-medium">$145,000</span></div>
              <div className="flex justify-between text-sm"><span>Less: Closing Stock</span><span className="font-medium text-red-600">($95,000)</span></div>
              <div className="flex justify-between font-semibold border-t pt-2"><span>Total COGS</span><span className="text-red-600">$135,000</span></div>
            </div>
          </div>
          <div className="bg-blue-50 p-3 rounded">
            <div className="flex justify-between font-bold"><span>GROSS PROFIT</span><span className="text-blue-600">$193,000</span></div>
          </div>
          <div>
            <h3 className="font-semibold text-teal-600 mb-2">OPERATING EXPENSES</h3>
            <div className="ml-4 space-y-1">
              <div className="flex justify-between text-sm"><span>Salaries & Wages</span><span className="font-medium">$35,000</span></div>
              <div className="flex justify-between text-sm"><span>Rent</span><span className="font-medium">$12,000</span></div>
              <div className="flex justify-between text-sm"><span>Utilities</span><span className="font-medium">$4,500</span></div>
              <div className="flex justify-between text-sm"><span>Marketing</span><span className="font-medium">$3,500</span></div>
              <div className="flex justify-between text-sm"><span>Other Expenses</span><span className="font-medium">$3,000</span></div>
              <div className="flex justify-between font-semibold border-t pt-2"><span>Total Operating Expenses</span><span className="text-red-600">$58,000</span></div>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <div className="flex justify-between text-lg font-bold"><span>NET PROFIT</span><span className="text-green-600">$135,000</span></div>
            <div className="text-sm text-gray-600 mt-1">Profit Margin: 41.2%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitLossReport;
