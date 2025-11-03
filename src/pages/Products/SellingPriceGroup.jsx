import React from 'react';

const SellingPriceGroup = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Selling Price Group</h1>
        <p className="text-gray-600 mt-2">Manage different pricing groups for customer segments</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Price Groups</h2>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">
            Add Price Group
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Group Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Products</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Wholesale</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Special pricing for bulk buyers</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">25 products</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-teal-600 hover:text-teal-900 mr-3">Edit</button>
                  <button className="text-blue-600 hover:text-blue-900 mr-3">Manage Prices</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Retail</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Standard retail pricing</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">50 products</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-teal-600 hover:text-teal-900 mr-3">Edit</button>
                  <button className="text-blue-600 hover:text-blue-900 mr-3">Manage Prices</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">VIP</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Premium customer pricing</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">30 products</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-teal-600 hover:text-teal-900 mr-3">Edit</button>
                  <button className="text-blue-600 hover:text-blue-900 mr-3">Manage Prices</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SellingPriceGroup;
