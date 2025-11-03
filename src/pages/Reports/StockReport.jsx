import React from 'react';

const StockReport = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Stock Report</h1>
        <p className="text-gray-600 mt-2">Current inventory and stock levels</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <input type="text" placeholder="Search products..." className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Clothing</option>
            </select>
          </div>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">Export Report</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg"><div className="text-sm text-gray-600">Total Items</div><div className="text-2xl font-bold text-blue-600">2,458</div></div>
        <div className="bg-green-50 p-4 rounded-lg"><div className="text-sm text-gray-600">Stock Value</div><div className="text-2xl font-bold text-green-600">$456,000</div></div>
        <div className="bg-orange-50 p-4 rounded-lg"><div className="text-sm text-gray-600">Low Stock</div><div className="text-2xl font-bold text-orange-600">23</div></div>
        <div className="bg-red-50 p-4 rounded-lg"><div className="text-sm text-gray-600">Out of Stock</div><div className="text-2xl font-bold text-red-600">7</div></div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">SKU</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Quantity</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Unit Price</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Total Value</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr><td className="px-6 py-4 text-sm">Laptop HP</td><td className="px-6 py-4 text-sm text-right">LP-001</td><td className="px-6 py-4 text-sm text-right">45</td><td className="px-6 py-4 text-sm text-right">$850</td><td className="px-6 py-4 text-sm text-right font-semibold">$38,250</td><td className="px-6 py-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">In Stock</span></td></tr>
            <tr><td className="px-6 py-4 text-sm">Mouse Wireless</td><td className="px-6 py-4 text-sm text-right">MS-002</td><td className="px-6 py-4 text-sm text-right">8</td><td className="px-6 py-4 text-sm text-right">$25</td><td className="px-6 py-4 text-sm text-right font-semibold">$200</td><td className="px-6 py-4"><span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs">Low Stock</span></td></tr>
            <tr><td className="px-6 py-4 text-sm">Keyboard Mechanical</td><td className="px-6 py-4 text-sm text-right">KB-003</td><td className="px-6 py-4 text-sm text-right">0</td><td className="px-6 py-4 text-sm text-right">$75</td><td className="px-6 py-4 text-sm text-right font-semibold">$0</td><td className="px-6 py-4"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Out of Stock</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockReport;
