import React from 'react';

const ProductPurchaseReport = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Product Purchase Report</h1>
        <p className="text-gray-600 mt-2">Analysis of product purchases</p>
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Total Purchased</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Purchase Value</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Avg. Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr><td className="px-6 py-4 text-sm">Laptop HP ProBook</td><td className="px-6 py-4 text-sm text-right">50</td><td className="px-6 py-4 text-sm text-right font-semibold">$42,500</td><td className="px-6 py-4 text-sm text-right">$850</td></tr>
            <tr><td className="px-6 py-4 text-sm">Office Chair</td><td className="px-6 py-4 text-sm text-right">35</td><td className="px-6 py-4 text-sm text-right font-semibold">$8,750</td><td className="px-6 py-4 text-sm text-right">$250</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductPurchaseReport;
