import React from 'react';
import { FaPrint } from 'react-icons/fa';

const PrintLabel = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Print Label</h1>
        <p className="text-gray-600 mt-2">Generate and print product labels</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Search Product</label>
          <input
            type="text"
            placeholder="Search by product name or SKU..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Label Type</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>Barcode Label</option>
              <option>Price Tag</option>
              <option>Product Label</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Number of Labels</label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              defaultValue="1"
              min="1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Paper Size</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>30 Labels per Sheet</option>
              <option>20 Labels per Sheet</option>
              <option>Roll (Continuous)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Include</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="rounded mr-2" defaultChecked />
                <span className="text-sm">Product Name</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded mr-2" defaultChecked />
                <span className="text-sm">Price</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded mr-2" defaultChecked />
                <span className="text-sm">Barcode</span>
              </label>
            </div>
          </div>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-6">
          <div className="text-center">
            <p className="text-gray-600 mb-2">Label Preview</p>
            <div className="bg-white border border-gray-300 inline-block p-4 rounded">
              <p className="text-sm font-semibold">Sample Product</p>
              <p className="text-xs text-gray-600">Rs 5,000.00</p>
              <div className="mt-2 h-12 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs text-gray-500">||||| |||| |||||</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2">
            <FaPrint />
            Print Labels
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg transition-colors">
            Preview PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrintLabel;
