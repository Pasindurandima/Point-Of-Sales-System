import React from 'react';

const TrendingProductsReport = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Trending Products</h1>
        <p className="text-gray-600 mt-2">Most popular and best-selling products</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <input type="date" className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <input type="date" className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>Top 10</option>
              <option>Top 25</option>
              <option>Top 50</option>
            </select>
          </div>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">Export Report</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rank</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Units Sold</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Revenue</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Trend</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr><td className="px-6 py-4 text-sm font-bold">1</td><td className="px-6 py-4 text-sm font-medium">Laptop HP ProBook</td><td className="px-6 py-4 text-sm">Electronics</td><td className="px-6 py-4 text-sm text-right">125</td><td className="px-6 py-4 text-sm text-right font-semibold text-green-600">$106,250</td><td className="px-6 py-4"><span className="text-green-600">↑ 25%</span></td></tr>
            <tr><td className="px-6 py-4 text-sm font-bold">2</td><td className="px-6 py-4 text-sm font-medium">Wireless Mouse</td><td className="px-6 py-4 text-sm">Accessories</td><td className="px-6 py-4 text-sm text-right">342</td><td className="px-6 py-4 text-sm text-right font-semibold text-green-600">$8,550</td><td className="px-6 py-4"><span className="text-green-600">↑ 18%</span></td></tr>
            <tr><td className="px-6 py-4 text-sm font-bold">3</td><td className="px-6 py-4 text-sm font-medium">Office Chair</td><td className="px-6 py-4 text-sm">Furniture</td><td className="px-6 py-4 text-sm text-right">89</td><td className="px-6 py-4 text-sm text-right font-semibold text-green-600">$26,700</td><td className="px-6 py-4"><span className="text-green-600">↑ 12%</span></td></tr>
            <tr><td className="px-6 py-4 text-sm font-bold">4</td><td className="px-6 py-4 text-sm font-medium">Monitor 27"</td><td className="px-6 py-4 text-sm">Electronics</td><td className="px-6 py-4 text-sm text-right">67</td><td className="px-6 py-4 text-sm text-right font-semibold text-green-600">$20,100</td><td className="px-6 py-4"><span className="text-red-600">↓ 5%</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrendingProductsReport;
