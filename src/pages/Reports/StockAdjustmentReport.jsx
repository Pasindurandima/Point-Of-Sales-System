import React from 'react';

const StockAdjustmentReport = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Stock Adjustment Report</h1>
        <p className="text-gray-600 mt-2">History of stock adjustments and modifications</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <input type="date" className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <input type="date" className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>All Types</option>
              <option>Increase</option>
              <option>Decrease</option>
            </select>
          </div>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">Export Report</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reference</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Items</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reason</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr><td className="px-6 py-4 text-sm">2025-11-04</td><td className="px-6 py-4 text-sm">SA-001</td><td className="px-6 py-4 text-sm">Main Warehouse</td><td className="px-6 py-4"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Decrease</span></td><td className="px-6 py-4 text-sm text-right">5</td><td className="px-6 py-4 text-sm text-right font-semibold">$1,250</td><td className="px-6 py-4 text-sm">Damaged goods</td></tr>
            <tr><td className="px-6 py-4 text-sm">2025-11-03</td><td className="px-6 py-4 text-sm">SA-002</td><td className="px-6 py-4 text-sm">Branch Store</td><td className="px-6 py-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Increase</span></td><td className="px-6 py-4 text-sm text-right">3</td><td className="px-6 py-4 text-sm text-right font-semibold">$850</td><td className="px-6 py-4 text-sm">Stock found</td></tr>
            <tr><td className="px-6 py-4 text-sm">2025-11-02</td><td className="px-6 py-4 text-sm">SA-003</td><td className="px-6 py-4 text-sm">Main Warehouse</td><td className="px-6 py-4"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Decrease</span></td><td className="px-6 py-4 text-sm text-right">8</td><td className="px-6 py-4 text-sm text-right font-semibold">$2,400</td><td className="px-6 py-4 text-sm">Expired products</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockAdjustmentReport;
