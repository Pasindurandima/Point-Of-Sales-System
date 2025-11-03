import React from 'react';

const ListAccounts = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Payment Accounts</h1>
        <p className="text-gray-600 mt-2">Manage all payment accounts and balances</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search accounts..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>All Types</option>
              <option>Bank Account</option>
              <option>Cash</option>
              <option>Credit Card</option>
              <option>Mobile Wallet</option>
            </select>
          </div>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">
            Add Account
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-6 rounded-lg shadow-md">
            <div className="text-sm opacity-90 mb-2">Total Balance</div>
            <div className="text-3xl font-bold">$45,850.00</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-md">
            <div className="text-sm opacity-90 mb-2">Bank Accounts</div>
            <div className="text-3xl font-bold">$38,500.00</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-md">
            <div className="text-sm opacity-90 mb-2">Cash on Hand</div>
            <div className="text-3xl font-bold">$7,350.00</div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bank/Provider</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Business Account</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">****5678</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Bank Account</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">ABC Bank</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">$25,500.00</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-teal-600 hover:text-teal-900 mr-2">View</button>
                  <button className="text-blue-600 hover:text-blue-900 mr-2">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Savings Account</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">****1234</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Bank Account</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">XYZ Bank</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">$13,000.00</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-teal-600 hover:text-teal-900 mr-2">View</button>
                  <button className="text-blue-600 hover:text-blue-900 mr-2">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Cash Register</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">-</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Cash</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Main Store</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">$5,850.00</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-teal-600 hover:text-teal-900 mr-2">View</button>
                  <button className="text-blue-600 hover:text-blue-900 mr-2">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Petty Cash</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">-</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Cash</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Office</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">$1,500.00</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-teal-600 hover:text-teal-900 mr-2">View</button>
                  <button className="text-blue-600 hover:text-blue-900 mr-2">Edit</button>
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

export default ListAccounts;
