import React, { useState } from 'react';
import { Printer, FileText, Barcode, Package } from 'lucide-react';

const PrintLabel = () => {
  const [labelConfig, setLabelConfig] = useState({
    searchTerm: '',
    labelType: 'BARCODE',
    numberOfLabels: 1,
    paperSize: '30_PER_SHEET',
    includeProductName: true,
    includePrice: true,
    includeBarcode: true,
    includeCompanyName: false
  });

  const handleConfigChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLabelConfig(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePrint = () => {
    console.log('Print Label Config:', labelConfig);
    // Print functionality here
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Print Label</h1>
        <p className="text-gray-600 mt-2">Generate and print product labels</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Search Product</label>
          <div className="relative">
            <Package className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="searchTerm"
              value={labelConfig.searchTerm}
              onChange={handleConfigChange}
              placeholder="Search by product name or SKU..."
              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Label Type</label>
            <select 
              name="labelType"
              value={labelConfig.labelType}
              onChange={handleConfigChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="BARCODE">Barcode Label</option>
              <option value="PRICE_TAG">Price Tag</option>
              <option value="PRODUCT_LABEL">Product Label (Full Details)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Number of Labels</label>
            <input
              type="number"
              name="numberOfLabels"
              value={labelConfig.numberOfLabels}
              onChange={handleConfigChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              min="1"
              max="1000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Paper Size</label>
            <select 
              name="paperSize"
              value={labelConfig.paperSize}
              onChange={handleConfigChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="30_PER_SHEET">30 Labels per Sheet (2.625" x 1")</option>
              <option value="20_PER_SHEET">20 Labels per Sheet (4" x 1")</option>
              <option value="12_PER_SHEET">12 Labels per Sheet (4" x 2")</option>
              <option value="ROLL_CONTINUOUS">Roll (Continuous)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Include on Label</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  name="includeProductName"
                  checked={labelConfig.includeProductName}
                  onChange={handleConfigChange}
                  className="rounded mr-2" 
                />
                <span className="text-sm">Product Name</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  name="includePrice"
                  checked={labelConfig.includePrice}
                  onChange={handleConfigChange}
                  className="rounded mr-2" 
                />
                <span className="text-sm">Price</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  name="includeBarcode"
                  checked={labelConfig.includeBarcode}
                  onChange={handleConfigChange}
                  className="rounded mr-2" 
                />
                <span className="text-sm">Barcode</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  name="includeCompanyName"
                  checked={labelConfig.includeCompanyName}
                  onChange={handleConfigChange}
                  className="rounded mr-2" 
                />
                <span className="text-sm">Company Name</span>
              </label>
            </div>
          </div>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-6 bg-gray-50">
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-700 mb-4">Label Preview</p>
            <div className="bg-white border-2 border-gray-400 inline-block p-4 rounded shadow-sm">
              {labelConfig.includeCompanyName && (
                <p className="text-xs font-bold text-gray-800 mb-1">YOUR COMPANY NAME</p>
              )}
              {labelConfig.includeProductName && (
                <p className="text-sm font-semibold text-gray-900">Sample Product</p>
              )}
              {labelConfig.includePrice && (
                <p className="text-sm font-bold text-teal-600 mt-1">Rs 5,000.00</p>
              )}
              {labelConfig.includeBarcode && (
                <div className="mt-2">
                  <div className="h-12 bg-gray-200 rounded flex items-center justify-center">
                    <Barcode className="w-16 h-8 text-gray-500" />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">PRD001</p>
                </div>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Showing {labelConfig.numberOfLabels} label{labelConfig.numberOfLabels > 1 ? 's' : ''} on {labelConfig.paperSize.replace('_', ' ').toLowerCase()}
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <button 
            onClick={handlePrint}
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2 font-semibold"
          >
            <Printer className="w-4 h-4" />
            Print Labels
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg transition-colors flex items-center gap-2 font-semibold">
            <FileText className="w-4 h-4" />
            Preview PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrintLabel;
