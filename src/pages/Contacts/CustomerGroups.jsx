import React from 'react';

const CustomerGroups = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Customer Groups</h1>
        <p className="text-gray-600 mt-2">Organize customers into groups</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Customer Group List</h2>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">
            Add New Group
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Retail Customers</h3>
            <p className="text-sm text-gray-600 mb-3">Regular retail buyers</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">25 customers</span>
              <div>
                <button className="text-blue-600 hover:text-blue-900 text-sm mr-2">Edit</button>
                <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Wholesale Customers</h3>
            <p className="text-sm text-gray-600 mb-3">Bulk buyers with special pricing</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">8 customers</span>
              <div>
                <button className="text-blue-600 hover:text-blue-900 text-sm mr-2">Edit</button>
                <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">VIP Customers</h3>
            <p className="text-sm text-gray-600 mb-3">Premium customers with special benefits</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">5 customers</span>
              <div>
                <button className="text-blue-600 hover:text-blue-900 text-sm mr-2">Edit</button>
                <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerGroups;
