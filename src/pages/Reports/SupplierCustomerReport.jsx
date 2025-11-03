import React from 'react';

const SupplierCustomerReport = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Supplier & Customer Report</h1>
        <p className="text-gray-600 mt-2">Analysis of supplier and customer transactions</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>View Both</option>
              <option>Suppliers Only</option>
              <option>Customers Only</option>
            </select>
            <input type="date" className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <input type="date" className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">Export Report</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Top Suppliers</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Supplier Name</th>
                <th className="px-4 py-2 text-right text-xs font-medium text-gray-500">Purchases</th>
                <th className="px-4 py-2 text-right text-xs font-medium text-gray-500">Due Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm">ABC Suppliers</td>
                <td className="px-4 py-3 text-sm text-right font-medium">$85,000</td>
                <td className="px-4 py-3 text-sm text-right text-red-600">$12,500</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm">XYZ Wholesale</td>
                <td className="px-4 py-3 text-sm text-right font-medium">$72,000</td>
                <td className="px-4 py-3 text-sm text-right text-red-600">$8,200</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm">Global Trade</td>
                <td className="px-4 py-3 text-sm text-right font-medium">$65,000</td>
                <td className="px-4 py-3 text-sm text-right text-green-600">$0</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm">Prime Distributors</td>
                <td className="px-4 py-3 text-sm text-right font-medium">$48,000</td>
                <td className="px-4 py-3 text-sm text-right text-red-600">$5,800</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm">Import Co</td>
                <td className="px-4 py-3 text-sm text-right font-medium">$35,000</td>
                <td className="px-4 py-3 text-sm text-right text-green-600">$0</td>
              </tr>
            </tbody>
            <tfoot className="bg-gray-50">
              <tr>
                <td className="px-4 py-3 text-sm font-bold">Total</td>
                <td className="px-4 py-3 text-sm text-right font-bold text-teal-600">$305,000</td>
                <td className="px-4 py-3 text-sm text-right font-bold text-red-600">$26,500</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Top Customers</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Customer Name</th>
                <th className="px-4 py-2 text-right text-xs font-medium text-gray-500">Sales</th>
                <th className="px-4 py-2 text-right text-xs font-medium text-gray-500">Due Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm">Retail Chain A</td>
                <td className="px-4 py-3 text-sm text-right font-medium">$125,000</td>
                <td className="px-4 py-3 text-sm text-right text-red-600">$18,500</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm">Corporate Client B</td>
                <td className="px-4 py-3 text-sm text-right font-medium">$98,000</td>
                <td className="px-4 py-3 text-sm text-right text-red-600">$15,000</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm">Walk-in Customers</td>
                <td className="px-4 py-3 text-sm text-right font-medium">$85,000</td>
                <td className="px-4 py-3 text-sm text-right text-green-600">$0</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm">Premium Customer C</td>
                <td className="px-4 py-3 text-sm text-right font-medium">$67,000</td>
                <td className="px-4 py-3 text-sm text-right text-red-600">$8,200</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm">Distributor D</td>
                <td className="px-4 py-3 text-sm text-right font-medium">$54,000</td>
                <td className="px-4 py-3 text-sm text-right text-green-600">$0</td>
              </tr>
            </tbody>
            <tfoot className="bg-gray-50">
              <tr>
                <td className="px-4 py-3 text-sm font-bold">Total</td>
                <td className="px-4 py-3 text-sm text-right font-bold text-teal-600">$429,000</td>
                <td className="px-4 py-3 text-sm text-right font-bold text-red-600">$41,700</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SupplierCustomerReport;
