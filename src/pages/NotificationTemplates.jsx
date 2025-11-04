import React from 'react';

const NotificationTemplates = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Notification Templates</h1>
        <p className="text-gray-600 mt-2">Create and manage email/SMS notification templates</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Template Categories</h2>
          <div className="space-y-2">
            <button className="w-full text-left px-4 py-3 bg-teal-50 text-teal-700 rounded-lg font-medium border-l-4 border-teal-600">
              Order Notifications
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg">
              Payment Confirmations
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg">
              Shipment Updates
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg">
              Customer Reminders
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg">
              Low Stock Alerts
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg">
              Welcome Messages
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg">
              Password Reset
            </button>
          </div>
          <button className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">
            + New Template
          </button>
        </div>

        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Order Notifications Templates</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                Email
              </button>
              <button className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm">
                SMS
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">Order Confirmation</h3>
                  <p className="text-xs text-gray-500 mt-1">Sent when order is placed</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Active</span>
                  <button className="text-blue-600 hover:text-blue-900 text-sm">Edit</button>
                  <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded text-sm text-gray-700 mt-3">
                <strong>Subject:</strong> Your order #{'{order_number}'} has been confirmed<br/>
                <strong>Message:</strong> Dear {'{customer_name}'}, Thank you for your order. Your order #{'{order_number}'} totaling ${'{order_total}'} has been confirmed and will be processed shortly.
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">Order Shipped</h3>
                  <p className="text-xs text-gray-500 mt-1">Sent when order is shipped</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Active</span>
                  <button className="text-blue-600 hover:text-blue-900 text-sm">Edit</button>
                  <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded text-sm text-gray-700 mt-3">
                <strong>Subject:</strong> Your order #{'{order_number}'} has been shipped<br/>
                <strong>Message:</strong> Good news! Your order #{'{order_number}'} has been shipped. Tracking number: {'{tracking_number}'}. Expected delivery: {'{delivery_date}'}.
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">Order Delivered</h3>
                  <p className="text-xs text-gray-500 mt-1">Sent when order is delivered</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">Inactive</span>
                  <button className="text-blue-600 hover:text-blue-900 text-sm">Edit</button>
                  <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded text-sm text-gray-700 mt-3">
                <strong>Subject:</strong> Your order #{'{order_number}'} has been delivered<br/>
                <strong>Message:</strong> Your order #{'{order_number}'} has been delivered successfully. Thank you for shopping with us!
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">Order Cancelled</h3>
                  <p className="text-xs text-gray-500 mt-1">Sent when order is cancelled</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Active</span>
                  <button className="text-blue-600 hover:text-blue-900 text-sm">Edit</button>
                  <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded text-sm text-gray-700 mt-3">
                <strong>Subject:</strong> Order #{'{order_number}'} has been cancelled<br/>
                <strong>Message:</strong> Your order #{'{order_number}'} has been cancelled as requested. Refund will be processed within 5-7 business days.
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Available Variables:</h4>
            <div className="text-xs text-blue-700 grid grid-cols-2 gap-2">
              <span>{'{customer_name}'} - Customer name</span>
              <span>{'{order_number}'} - Order number</span>
              <span>{'{order_total}'} - Order total amount</span>
              <span>{'{tracking_number}'} - Shipment tracking</span>
              <span>{'{delivery_date}'} - Expected delivery</span>
              <span>{'{business_name}'} - Your business name</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationTemplates;
