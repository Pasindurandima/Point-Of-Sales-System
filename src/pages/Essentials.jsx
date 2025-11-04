import React from 'react';
import { FaBox, FaShoppingCart, FaMoneyBillWave, FaUsers, FaChartLine, FaWarehouse } from 'react-icons/fa';

const Essentials = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Business Essentials</h1>
        <p className="text-gray-600 mt-2">Quick access to essential business tools and shortcuts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg shadow-lg p-6 text-white cursor-pointer hover:shadow-xl transition-shadow">
          <FaShoppingCart className="text-4xl mb-3 opacity-80" />
          <h3 className="text-xl font-bold">Quick Sale</h3>
          <p className="text-sm opacity-90 mt-2">Process a new sale transaction quickly</p>
          <button className="mt-4 bg-white text-teal-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Start Selling
          </button>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white cursor-pointer hover:shadow-xl transition-shadow">
          <FaBox className="text-4xl mb-3 opacity-80" />
          <h3 className="text-xl font-bold">Add Product</h3>
          <p className="text-sm opacity-90 mt-2">Add new product to inventory</p>
          <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Add Now
          </button>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg p-6 text-white cursor-pointer hover:shadow-xl transition-shadow">
          <FaUsers className="text-4xl mb-3 opacity-80" />
          <h3 className="text-xl font-bold">Add Customer</h3>
          <p className="text-sm opacity-90 mt-2">Register a new customer</p>
          <button className="mt-4 bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Add Customer
          </button>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-lg p-6 text-white cursor-pointer hover:shadow-xl transition-shadow">
          <FaMoneyBillWave className="text-4xl mb-3 opacity-80" />
          <h3 className="text-xl font-bold">Record Expense</h3>
          <p className="text-sm opacity-90 mt-2">Add a new expense entry</p>
          <button className="mt-4 bg-white text-orange-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Record
          </button>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg p-6 text-white cursor-pointer hover:shadow-xl transition-shadow">
          <FaWarehouse className="text-4xl mb-3 opacity-80" />
          <h3 className="text-xl font-bold">Stock Adjustment</h3>
          <p className="text-sm opacity-90 mt-2">Adjust inventory levels</p>
          <button className="mt-4 bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Adjust Stock
          </button>
        </div>

        <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg shadow-lg p-6 text-white cursor-pointer hover:shadow-xl transition-shadow">
          <FaChartLine className="text-4xl mb-3 opacity-80" />
          <h3 className="text-xl font-bold">View Reports</h3>
          <p className="text-sm opacity-90 mt-2">Access business reports</p>
          <button className="mt-4 bg-white text-pink-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            View Reports
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Stats</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-600">Total Products</p>
                <p className="text-2xl font-bold text-blue-600">1,234</p>
              </div>
              <FaBox className="text-3xl text-blue-400" />
            </div>
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-600">Today's Sales</p>
                <p className="text-2xl font-bold text-green-600">$5,670</p>
              </div>
              <FaShoppingCart className="text-3xl text-green-400" />
            </div>
            <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-600">Active Customers</p>
                <p className="text-2xl font-bold text-purple-600">892</p>
              </div>
              <FaUsers className="text-3xl text-purple-400" />
            </div>
            <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-600">Low Stock Items</p>
                <p className="text-2xl font-bold text-orange-600">15</p>
              </div>
              <FaWarehouse className="text-3xl text-orange-400" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 border-l-4 border-green-500 bg-green-50 rounded">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">New sale completed</p>
                <p className="text-xs text-gray-600">Invoice #INV-1234 - $125.00</p>
                <p className="text-xs text-gray-500 mt-1">2 minutes ago</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 border-l-4 border-blue-500 bg-blue-50 rounded">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">Product added</p>
                <p className="text-xs text-gray-600">Wireless Mouse - SKU: PRD-789</p>
                <p className="text-xs text-gray-500 mt-1">15 minutes ago</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 border-l-4 border-purple-500 bg-purple-50 rounded">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">New customer registered</p>
                <p className="text-xs text-gray-600">John Smith - john@email.com</p>
                <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 border-l-4 border-orange-500 bg-orange-50 rounded">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">Stock adjusted</p>
                <p className="text-xs text-gray-600">10 items updated in inventory</p>
                <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 border-l-4 border-red-500 bg-red-50 rounded">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">Low stock alert</p>
                <p className="text-xs text-gray-600">5 products need restocking</p>
                <p className="text-xs text-gray-500 mt-1">3 hours ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h2>
          <div className="grid grid-cols-2 gap-3">
            <button className="p-3 border border-gray-300 rounded-lg hover:bg-teal-50 hover:border-teal-500 transition-colors text-left">
              <p className="font-semibold text-gray-900 text-sm">POS System</p>
              <p className="text-xs text-gray-500 mt-1">Point of Sale</p>
            </button>
            <button className="p-3 border border-gray-300 rounded-lg hover:bg-teal-50 hover:border-teal-500 transition-colors text-left">
              <p className="font-semibold text-gray-900 text-sm">Inventory</p>
              <p className="text-xs text-gray-500 mt-1">Stock Management</p>
            </button>
            <button className="p-3 border border-gray-300 rounded-lg hover:bg-teal-50 hover:border-teal-500 transition-colors text-left">
              <p className="font-semibold text-gray-900 text-sm">Invoices</p>
              <p className="text-xs text-gray-500 mt-1">Generate Invoice</p>
            </button>
            <button className="p-3 border border-gray-300 rounded-lg hover:bg-teal-50 hover:border-teal-500 transition-colors text-left">
              <p className="font-semibold text-gray-900 text-sm">Analytics</p>
              <p className="text-xs text-gray-500 mt-1">Business Insights</p>
            </button>
            <button className="p-3 border border-gray-300 rounded-lg hover:bg-teal-50 hover:border-teal-500 transition-colors text-left">
              <p className="font-semibold text-gray-900 text-sm">Suppliers</p>
              <p className="text-xs text-gray-500 mt-1">Manage Vendors</p>
            </button>
            <button className="p-3 border border-gray-300 rounded-lg hover:bg-teal-50 hover:border-teal-500 transition-colors text-left">
              <p className="font-semibold text-gray-900 text-sm">Payments</p>
              <p className="text-xs text-gray-500 mt-1">Payment Accounts</p>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Notifications</h2>
          <div className="space-y-3">
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm font-semibold text-yellow-900">⚠️ Low Stock Alert</p>
              <p className="text-xs text-yellow-700 mt-1">15 products are running low on stock</p>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm font-semibold text-blue-900">📊 Monthly Report Ready</p>
              <p className="text-xs text-blue-700 mt-1">October sales report is available</p>
            </div>
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm font-semibold text-green-900">✅ Backup Completed</p>
              <p className="text-xs text-green-700 mt-1">Daily backup completed successfully</p>
            </div>
            <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-sm font-semibold text-purple-900">🎉 New Customer Milestone</p>
              <p className="text-xs text-purple-700 mt-1">You've reached 1000 customers!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Essentials;
