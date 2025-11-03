import React from 'react';

const Roles = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Roles</h1>
        <p className="text-gray-600 mt-2">Manage user roles and permissions</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Role List</h2>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">
            Add New Role
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Admin</h3>
            <p className="text-sm text-gray-600 mb-3">Full system access</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">5 users</span>
              <button className="text-teal-600 hover:text-teal-900 text-sm">Edit</button>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Manager</h3>
            <p className="text-sm text-gray-600 mb-3">Limited management access</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">3 users</span>
              <button className="text-teal-600 hover:text-teal-900 text-sm">Edit</button>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Staff</h3>
            <p className="text-sm text-gray-600 mb-3">Basic user access</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">12 users</span>
              <button className="text-teal-600 hover:text-teal-900 text-sm">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roles;
