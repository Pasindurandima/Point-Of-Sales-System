import React from 'react';

const BarcodeSettings = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Barcode Settings</h1>
        <p className="text-gray-600 mt-2">Configure barcode generation and printing preferences</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <form className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Barcode Configuration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Barcode Type</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <option>Code 128</option>
                  <option>Code 39</option>
                  <option>EAN-13</option>
                  <option>UPC-A</option>
                  <option>QR Code</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Barcode Prefix</label>
                <input type="text" placeholder="e.g., PRD-" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Paper Size</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <option>A4 (210mm × 297mm)</option>
                  <option>Letter (8.5" × 11")</option>
                  <option>Label 40mm × 30mm</option>
                  <option>Label 50mm × 25mm</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Labels Per Sheet</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <option>12 Labels</option>
                  <option>24 Labels</option>
                  <option>40 Labels</option>
                  <option>65 Labels</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Barcode Display</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Barcode Height (mm)</label>
                <input type="number" defaultValue="30" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Barcode Width (mm)</label>
                <input type="number" defaultValue="50" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Label Content</h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-teal-600 rounded" defaultChecked />
                <span className="text-sm text-gray-700">Show product name on label</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-teal-600 rounded" defaultChecked />
                <span className="text-sm text-gray-700">Show product code/SKU</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-teal-600 rounded" defaultChecked />
                <span className="text-sm text-gray-700">Show price on label</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-teal-600 rounded" />
                <span className="text-sm text-gray-700">Show business name</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 text-teal-600 rounded" />
                <span className="text-sm text-gray-700">Show business logo</span>
              </label>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Preview</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <div className="inline-block bg-white p-4 border border-gray-300 rounded">
                <div className="text-xs font-bold mb-2">PRODUCT NAME</div>
                <div className="bg-gray-200 h-16 w-40 flex items-center justify-center mb-2">
                  <span className="text-xs">Barcode Preview</span>
                </div>
                <div className="text-xs">SKU: PRD-001</div>
                <div className="text-sm font-bold mt-1">$99.99</div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-colors">
              Save Settings
            </button>
            <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg transition-colors">
              Test Print
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BarcodeSettings;
