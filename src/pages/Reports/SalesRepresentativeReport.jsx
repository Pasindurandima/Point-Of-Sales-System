import React from 'react';

const SalesRepresentativeReport = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Sales Representative Report</h1>
        <p className="text-gray-600 mt-2">Performance analysis of sales representatives</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <input type="date" className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <input type="date" className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">Export</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Representative</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Sales Count</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Total Revenue</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Avg. Sale</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Commission</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr><td className="px-6 py-4 text-sm font-medium">John Smith</td><td className="px-6 py-4 text-sm text-right">85</td><td className="px-6 py-4 text-sm text-right font-semibold text-green-600">$125,000</td><td className="px-6 py-4 text-sm text-right">$1,471</td><td className="px-6 py-4 text-sm text-right font-semibold">$6,250</td></tr>
            <tr><td className="px-6 py-4 text-sm font-medium">Sarah Johnson</td><td className="px-6 py-4 text-sm text-right">72</td><td className="px-6 py-4 text-sm text-right font-semibold text-green-600">$98,500</td><td className="px-6 py-4 text-sm text-right">$1,368</td><td className="px-6 py-4 text-sm text-right font-semibold">$4,925</td></tr>
            <tr><td className="px-6 py-4 text-sm font-medium">Mike Davis</td><td className="px-6 py-4 text-sm text-right">68</td><td className="px-6 py-4 text-sm text-right font-semibold text-green-600">$87,000</td><td className="px-6 py-4 text-sm text-right">$1,279</td><td className="px-6 py-4 text-sm text-right font-semibold">$4,350</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesRepresentativeReport;
