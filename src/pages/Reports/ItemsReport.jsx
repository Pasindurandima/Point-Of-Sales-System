import React from 'react';

const ItemsReport = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Items Report</h1>
        <p className="text-gray-600 mt-2">Detailed report of all inventory items</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <input type="text" placeholder="Search items..." className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Furniture</option>
              <option>Accessories</option>
            </select>
          </div>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">Export Report</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Item Code</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Item Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Unit Price</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Stock Qty</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Total Value</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr><td className="px-6 py-4 text-sm">ITM-001</td><td className="px-6 py-4 text-sm">Laptop HP ProBook</td><td className="px-6 py-4 text-sm">Electronics</td><td className="px-6 py-4 text-sm text-right">$850</td><td className="px-6 py-4 text-sm text-right">45</td><td className="px-6 py-4 text-sm text-right font-semibold">$38,250</td></tr>
            <tr><td className="px-6 py-4 text-sm">ITM-002</td><td className="px-6 py-4 text-sm">Wireless Mouse</td><td className="px-6 py-4 text-sm">Accessories</td><td className="px-6 py-4 text-sm text-right">$25</td><td className="px-6 py-4 text-sm text-right">156</td><td className="px-6 py-4 text-sm text-right font-semibold">$3,900</td></tr>
            <tr><td className="px-6 py-4 text-sm">ITM-003</td><td className="px-6 py-4 text-sm">Office Chair</td><td className="px-6 py-4 text-sm">Furniture</td><td className="px-6 py-4 text-sm text-right">$300</td><td className="px-6 py-4 text-sm text-right">28</td><td className="px-6 py-4 text-sm text-right font-semibold">$8,400</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemsReport;
