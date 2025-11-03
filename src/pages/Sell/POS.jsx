import React from 'react';

const POS = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Point of Sale (POS)</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Selection - Left Side */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search products by name, SKU, or barcode..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="text-center">
                <div className="w-full h-32 bg-gray-200 rounded mb-2 flex items-center justify-center">
                  <span className="text-gray-400">Image</span>
                </div>
                <h3 className="font-semibold text-sm mb-1">Sample Product</h3>
                <p className="text-teal-600 font-bold">Rs 5,000.00</p>
                <p className="text-xs text-gray-500">Stock: 50</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cart - Right Side */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Current Sale</h2>
          
          <div className="mb-4">
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>Walk-in Customer</option>
            </select>
          </div>

          <div className="border-t border-b py-4 mb-4 max-h-64 overflow-y-auto">
            <p className="text-center text-gray-500 py-8">Cart is empty</p>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span className="font-semibold">Rs 0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Discount:</span>
              <span className="font-semibold">Rs 0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Tax:</span>
              <span className="font-semibold">Rs 0.00</span>
            </div>
            <div className="flex justify-between text-xl pt-2 border-t">
              <span className="font-bold">Total:</span>
              <span className="font-bold text-teal-600">Rs 0.00</span>
            </div>
          </div>

          <div className="space-y-2">
            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 rounded-lg transition-colors font-semibold">
              Complete Sale
            </button>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              Save as Draft
            </button>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POS;
