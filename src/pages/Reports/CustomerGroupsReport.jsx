import React from 'react';

const CustomerGroupsReport = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Customer Groups Report</h1>
        <p className="text-gray-600 mt-2">Sales analysis by customer groups</p>
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
      <div className="bg-white rounded-lg shadow-md p-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Group Name</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Customers</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Total Sales</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Avg. Sale</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr><td className="px-6 py-4 text-sm">VIP Customers</td><td className="px-6 py-4 text-sm text-right">45</td><td className="px-6 py-4 text-sm text-right font-semibold">$185,000</td><td className="px-6 py-4 text-sm text-right">$4,111</td></tr>
            <tr><td className="px-6 py-4 text-sm">Regular Customers</td><td className="px-6 py-4 text-sm text-right">128</td><td className="px-6 py-4 text-sm text-right font-semibold">$156,000</td><td className="px-6 py-4 text-sm text-right">$1,219</td></tr>
            <tr><td className="px-6 py-4 text-sm">Wholesale</td><td className="px-6 py-4 text-sm text-right">23</td><td className="px-6 py-4 text-sm text-right font-semibold">$95,000</td><td className="px-6 py-4 text-sm text-right">$4,130</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerGroupsReport;
