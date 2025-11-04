import React from 'react';

const InvoiceSettings = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Invoice Settings</h1>
        <p className="text-gray-600 mt-2">Configure invoice templates and preferences</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <form className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Invoice Configuration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Invoice Prefix</label>
                <input type="text" defaultValue="INV-" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Starting Number</label>
                <input type="number" defaultValue="1001" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Invoice Template</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <option>Default Template</option>
                  <option>Modern Template</option>
                  <option>Classic Template</option>
                  <option>Minimal Template</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Default Payment Terms</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <option>Due on Receipt</option>
                  <option>Net 15 Days</option>
                  <option>Net 30 Days</option>
                  <option>Net 60 Days</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Invoice Content</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Invoice Header Text</label>
                <input type="text" placeholder="Thank you for your business!" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Invoice Footer Text</label>
                <textarea rows="3" placeholder="Payment terms and conditions..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Terms & Conditions</label>
                <textarea rows="4" placeholder="Enter terms and conditions..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"></textarea>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Display Options</h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-teal-600 rounded" defaultChecked />
                <span className="text-sm text-gray-700">Show company logo on invoice</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-teal-600 rounded" defaultChecked />
                <span className="text-sm text-gray-700">Show tax breakdown</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-teal-600 rounded" />
                <span className="text-sm text-gray-700">Show payment instructions</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-teal-600 rounded" defaultChecked />
                <span className="text-sm text-gray-700">Show QR code for online payment</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-teal-600 rounded" />
                <span className="text-sm text-gray-700">Auto-send invoice to customer email</span>
              </label>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-colors">
              Save Settings
            </button>
            <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg transition-colors">
              Preview Invoice
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvoiceSettings;
