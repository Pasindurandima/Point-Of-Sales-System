import React, { useState } from 'react';
import { X, Shield, FileText, CheckSquare } from 'lucide-react';

const Roles = () => {
  const [showAddRoleModal, setShowAddRoleModal] = useState(false);
  const [formData, setFormData] = useState({
    roleName: '',
    description: '',
    permissions: {
      dashboard: false,
      products: false,
      categories: false,
      brands: false,
      units: false,
      customers: false,
      suppliers: false,
      sales: false,
      purchases: false,
      expenses: false,
      reports: false,
      users: false,
      roles: false,
      settings: false
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePermissionChange = (permission) => {
    setFormData(prev => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [permission]: !prev.permissions[permission]
      }
    }));
  };

  const handleSelectAll = () => {
    const allSelected = Object.values(formData.permissions).every(val => val);
    const newPermissions = {};
    Object.keys(formData.permissions).forEach(key => {
      newPermissions[key] = !allSelected;
    });
    setFormData(prev => ({
      ...prev,
      permissions: newPermissions
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add API call to create role
    console.log('Role data:', formData);
    // Reset form and close modal
    setFormData({
      roleName: '',
      description: '',
      permissions: {
        dashboard: false,
        products: false,
        categories: false,
        brands: false,
        units: false,
        customers: false,
        suppliers: false,
        sales: false,
        purchases: false,
        expenses: false,
        reports: false,
        users: false,
        roles: false,
        settings: false
      }
    });
    setShowAddRoleModal(false);
  };

  const permissionsList = [
    { key: 'dashboard', label: 'Dashboard' },
    { key: 'products', label: 'Products' },
    { key: 'categories', label: 'Categories' },
    { key: 'brands', label: 'Brands' },
    { key: 'units', label: 'Units' },
    { key: 'customers', label: 'Customers' },
    { key: 'suppliers', label: 'Suppliers' },
    { key: 'sales', label: 'Sales' },
    { key: 'purchases', label: 'Purchases' },
    { key: 'expenses', label: 'Expenses' },
    { key: 'reports', label: 'Reports' },
    { key: 'users', label: 'Users' },
    { key: 'roles', label: 'Roles' },
    { key: 'settings', label: 'Settings' }
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Roles</h1>
        <p className="text-gray-600 mt-2">Manage user roles and permissions</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Role List</h2>
          <button 
            onClick={() => setShowAddRoleModal(true)}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
          >
            <Shield className="w-4 h-4" />
            <span>Add New Role</span>
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

      {/* Add Role Modal */}
      {showAddRoleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-teal-600 to-teal-700">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-white" />
                <h3 className="text-xl font-semibold text-white">Add New Role</h3>
              </div>
              <button
                onClick={() => setShowAddRoleModal(false)}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6">
              <form onSubmit={handleSubmit}>
                {/* Role Name */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Role Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Shield className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="roleName"
                      value={formData.roleName}
                      onChange={handleInputChange}
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Enter role name (e.g., Manager, Cashier)"
                      required
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Describe the role and its responsibilities"
                      rows="3"
                      required
                    />
                  </div>
                </div>

                {/* Permissions */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <label className="block text-sm font-semibold text-gray-700">
                      Permissions <span className="text-red-500">*</span>
                    </label>
                    <button
                      type="button"
                      onClick={handleSelectAll}
                      className="text-sm text-teal-600 hover:text-teal-700 font-semibold flex items-center space-x-1"
                    >
                      <CheckSquare className="w-4 h-4" />
                      <span>{Object.values(formData.permissions).every(val => val) ? 'Deselect All' : 'Select All'}</span>
                    </button>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {permissionsList.map((permission) => (
                        <div key={permission.key} className="flex items-center">
                          <input
                            type="checkbox"
                            id={permission.key}
                            checked={formData.permissions[permission.key]}
                            onChange={() => handlePermissionChange(permission.key)}
                            className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 cursor-pointer"
                          />
                          <label
                            htmlFor={permission.key}
                            className="ml-2 text-sm text-gray-700 cursor-pointer"
                          >
                            {permission.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Select the permissions that users with this role will have access to
                  </p>
                </div>
              </form>
            </div>

            {/* Modal Footer */}
            <div className="flex-shrink-0 border-t bg-gray-50 px-6 py-4">
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowAddRoleModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors font-semibold flex items-center space-x-2"
                >
                  <Shield className="w-4 h-4" />
                  <span>Create Role</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Roles;
