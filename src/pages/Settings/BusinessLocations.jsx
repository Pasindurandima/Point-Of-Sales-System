import React from 'react';

const BusinessLocations = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Business Locations</h1>
        <p className="text-gray-600 mt-2">Manage your business locations and branches</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Add New Location</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location Name *</label>
              <input type="text" placeholder="e.g., Main Office" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location Code</label>
              <input type="text" placeholder="e.g., LOC-001" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <textarea rows="3" placeholder="Enter location address" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"></textarea>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input type="tel" placeholder="Phone number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" placeholder="Email address" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
            </div>
            <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">
              Add Location
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Existing Locations</h2>
          <div className="space-y-3">
            <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">Main Office</h3>
                  <span className="text-xs text-gray-500 bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
                </div>
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-900 text-sm">Edit</button>
                  <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p>123 Business Street, New York, NY 10001</p>
                <p className="mt-1">Phone: +1 234 567 8900</p>
                <p>Email: main@business.com</p>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">Branch Store</h3>
                  <span className="text-xs text-gray-500 bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
                </div>
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-900 text-sm">Edit</button>
                  <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p>456 Commerce Ave, Brooklyn, NY 11201</p>
                <p className="mt-1">Phone: +1 234 567 8901</p>
                <p>Email: branch@business.com</p>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">Warehouse</h3>
                  <span className="text-xs text-gray-500 bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
                </div>
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-900 text-sm">Edit</button>
                  <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p>789 Industrial Blvd, Queens, NY 11101</p>
                <p className="mt-1">Phone: +1 234 567 8902</p>
                <p>Email: warehouse@business.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessLocations;
