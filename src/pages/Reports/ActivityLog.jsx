import React from 'react';

const ActivityLog = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Activity Log</h1>
        <p className="text-gray-600 mt-2">System activity and user action history</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <input type="text" placeholder="Search activities..." className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>All Users</option>
              <option>Admin</option>
              <option>Sales Staff</option>
            </select>
            <input type="date" className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
          </div>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">Export</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-3">
          <div className="flex items-start gap-4 p-3 border-l-4 border-blue-500 bg-blue-50 rounded">
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium text-gray-900">User Login</div>
                  <div className="text-sm text-gray-600">Admin logged into the system</div>
                </div>
                <div className="text-xs text-gray-500">2025-11-04 09:15 AM</div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 p-3 border-l-4 border-green-500 bg-green-50 rounded">
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium text-gray-900">Sale Created</div>
                  <div className="text-sm text-gray-600">New sale #SALE-2025 created by John Smith - Amount: $1,250</div>
                </div>
                <div className="text-xs text-gray-500">2025-11-04 10:30 AM</div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 p-3 border-l-4 border-orange-500 bg-orange-50 rounded">
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium text-gray-900">Product Updated</div>
                  <div className="text-sm text-gray-600">Product "Laptop HP" price updated from $850 to $900</div>
                </div>
                <div className="text-xs text-gray-500">2025-11-04 11:45 AM</div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 p-3 border-l-4 border-red-500 bg-red-50 rounded">
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium text-gray-900">User Deleted</div>
                  <div className="text-sm text-gray-600">User account "temp_user" was deleted by Admin</div>
                </div>
                <div className="text-xs text-gray-500">2025-11-04 02:20 PM</div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 p-3 border-l-4 border-purple-500 bg-purple-50 rounded">
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium text-gray-900">Settings Changed</div>
                  <div className="text-sm text-gray-600">Business settings updated - Tax rate changed to 15%</div>
                </div>
                <div className="text-xs text-gray-500">2025-11-04 03:50 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
