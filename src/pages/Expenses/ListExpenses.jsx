import React from 'react';

const ListExpenses = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Expenses List</h1>
        <p className="text-gray-600 mt-2">View and manage all expense records</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search expenses..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>All Categories</option>
              <option>Office Supplies</option>
              <option>Utilities</option>
              <option>Salaries</option>
              <option>Marketing</option>
              <option>Transportation</option>
            </select>
            <input
              type="date"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="From Date"
            />
            <input
              type="date"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="To Date"
            />
          </div>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">
            Add Expense
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference No</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expense For</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Method</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2025-11-04</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">EXP-001</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Office Supplies</td>
                <td className="px-6 py-4 text-sm text-gray-600">Stationery items</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Main Office</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Cash</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">$125.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-teal-600 hover:text-teal-900 mr-2">View</button>
                  <button className="text-blue-600 hover:text-blue-900 mr-2">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2025-11-03</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">EXP-002</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Utilities</td>
                <td className="px-6 py-4 text-sm text-gray-600">Electricity bill</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Main Office</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Bank Transfer</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">$450.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-teal-600 hover:text-teal-900 mr-2">View</button>
                  <button className="text-blue-600 hover:text-blue-900 mr-2">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2025-11-02</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">EXP-003</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Marketing</td>
                <td className="px-6 py-4 text-sm text-gray-600">Social media ads</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Main Office</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Credit Card</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">$300.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-teal-600 hover:text-teal-900 mr-2">View</button>
                  <button className="text-blue-600 hover:text-blue-900 mr-2">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            </tbody>
            <tfoot className="bg-gray-50">
              <tr>
                <td colSpan="6" className="px-6 py-4 text-right text-sm font-bold text-gray-900">Total:</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-teal-600">$875.00</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Showing 1 to 3 of 3 results
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50">Previous</button>
            <button className="px-3 py-1 bg-teal-600 text-white rounded-lg">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListExpenses;
