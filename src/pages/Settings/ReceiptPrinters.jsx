import React from 'react';

const ReceiptPrinters = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Receipt Printers</h1>
        <p className="text-gray-600 mt-2">Configure receipt printers for POS system</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Add New Printer</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Printer Name *</label>
              <input type="text" placeholder="e.g., Main Counter Printer" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Printer Type</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>Thermal Printer</option>
                <option>Dot Matrix</option>
                <option>Laser Printer</option>
                <option>Inkjet Printer</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Connection Type</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>USB</option>
                <option>Network (IP Address)</option>
                <option>Bluetooth</option>
                <option>Serial Port</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">IP Address / Port</label>
              <input type="text" placeholder="192.168.1.100 or COM3" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Paper Width</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>58mm</option>
                <option>80mm</option>
                <option>110mm</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Business Location</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>Main Office</option>
                <option>Branch Store</option>
                <option>Warehouse</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">
              Add Printer
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Configured Printers</h2>
          <div className="space-y-3">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">Main Counter Printer</h3>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Online</span>
                </div>
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-900 text-sm">Test</button>
                  <button className="text-gray-600 hover:text-gray-900 text-sm">Edit</button>
                  <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
                </div>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Type: Thermal Printer</p>
                <p>Connection: Network (192.168.1.100)</p>
                <p>Paper: 80mm</p>
                <p>Location: Main Office</p>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">Branch Printer</h3>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Online</span>
                </div>
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-900 text-sm">Test</button>
                  <button className="text-gray-600 hover:text-gray-900 text-sm">Edit</button>
                  <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
                </div>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Type: Thermal Printer</p>
                <p>Connection: USB</p>
                <p>Paper: 80mm</p>
                <p>Location: Branch Store</p>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">Kitchen Printer</h3>
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Offline</span>
                </div>
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-900 text-sm">Test</button>
                  <button className="text-gray-600 hover:text-gray-900 text-sm">Edit</button>
                  <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
                </div>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Type: Dot Matrix</p>
                <p>Connection: Serial Port (COM3)</p>
                <p>Paper: 110mm</p>
                <p>Location: Main Office</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPrinters;
