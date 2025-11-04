import React from 'react';

const TaxRates = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Tax Rates</h1>
        <p className="text-gray-600 mt-2">Manage tax rates and tax groups</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Add New Tax Rate</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tax Name *</label>
              <input type="text" placeholder="e.g., VAT" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tax Rate (%) *</label>
              <input type="number" step="0.01" placeholder="e.g., 15.00" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tax Type</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>VAT (Value Added Tax)</option>
                <option>GST (Goods & Services Tax)</option>
                <option>Sales Tax</option>
                <option>Excise Tax</option>
                <option>Custom Tax</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tax Number</label>
              <input type="text" placeholder="Tax registration number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-teal-600 rounded" />
                <span className="text-sm text-gray-700">Set as default tax rate</span>
              </label>
            </div>
            <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">
              Add Tax Rate
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Existing Tax Rates</h2>
          <div className="space-y-3">
            <div className="p-4 border border-teal-200 bg-teal-50 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900">VAT 15%</h3>
                    <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded">Default</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Value Added Tax</p>
                </div>
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-900 text-sm">Edit</button>
                  <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p>Rate: 15.00%</p>
                <p>Tax Number: VAT-123456789</p>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">VAT 5%</h3>
                  <p className="text-xs text-gray-600 mt-1">Value Added Tax (Reduced)</p>
                </div>
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-900 text-sm">Edit</button>
                  <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p>Rate: 5.00%</p>
                <p>Tax Number: VAT-123456789</p>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">GST 18%</h3>
                  <p className="text-xs text-gray-600 mt-1">Goods & Services Tax</p>
                </div>
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-900 text-sm">Edit</button>
                  <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p>Rate: 18.00%</p>
                <p>Tax Number: GST-987654321</p>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">Sales Tax 8%</h3>
                  <p className="text-xs text-gray-600 mt-1">Local Sales Tax</p>
                </div>
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-900 text-sm">Edit</button>
                  <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p>Rate: 8.00%</p>
                <p>Tax Number: ST-456789123</p>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">Tax Exempt</h3>
                  <p className="text-xs text-gray-600 mt-1">No Tax Applied</p>
                </div>
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-900 text-sm">Edit</button>
                  <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p>Rate: 0.00%</p>
                <p>For tax-exempt items</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxRates;
