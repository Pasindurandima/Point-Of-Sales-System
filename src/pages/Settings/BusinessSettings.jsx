import React from 'react';

const BusinessSettings = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Business Settings</h1>
        <p className="text-gray-600 mt-2">Configure your business information and preferences</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <form className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Business Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
                <input type="text" defaultValue="SecU Dashboard" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Currency *</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <option>USD - US Dollar</option>
                  <option>EUR - Euro</option>
                  <option>GBP - British Pound</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone *</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <option>UTC-5:00 (Eastern Time)</option>
                  <option>UTC-8:00 (Pacific Time)</option>
                  <option>UTC+0:00 (GMT)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Fiscal Year Start</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <option>January</option>
                  <option>April</option>
                  <option>July</option>
                  <option>October</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" placeholder="+1 234 567 8900" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" placeholder="business@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                <input type="url" placeholder="https://www.example.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea rows="3" placeholder="Enter business address" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"></textarea>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Business Logo</h2>
            <div className="flex items-center gap-4">
              <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                <span className="text-gray-400 text-sm">No logo</span>
              </div>
              <div>
                <input type="file" className="hidden" id="logo-upload" accept="image/*" />
                <label htmlFor="logo-upload" className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg cursor-pointer inline-block transition-colors">
                  Upload Logo
                </label>
                <p className="text-xs text-gray-500 mt-2">Recommended: 200x200px, Max 2MB</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">System Preferences</h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-teal-600 rounded" />
                <span className="text-sm text-gray-700">Enable automatic inventory tracking</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-teal-600 rounded" defaultChecked />
                <span className="text-sm text-gray-700">Send low stock alerts</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-teal-600 rounded" defaultChecked />
                <span className="text-sm text-gray-700">Enable email notifications</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-teal-600 rounded" />
                <span className="text-sm text-gray-700">Enable multi-currency support</span>
              </label>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-colors">
              Save Changes
            </button>
            <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg transition-colors">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BusinessSettings;
