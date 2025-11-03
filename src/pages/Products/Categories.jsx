import React from 'react';

const Categories = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Categories</h1>
        <p className="text-gray-600 mt-2">Manage product categories</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Category List</h2>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">
            Add Category
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Electronics</h3>
            <p className="text-sm text-gray-600 mb-3">Electronic devices and accessories</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">15 products</span>
              <div>
                <button className="text-blue-600 hover:text-blue-900 text-sm mr-2">Edit</button>
                <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Hardware</h3>
            <p className="text-sm text-gray-600 mb-3">Hardware tools and equipment</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">22 products</span>
              <div>
                <button className="text-blue-600 hover:text-blue-900 text-sm mr-2">Edit</button>
                <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Office Supplies</h3>
            <p className="text-sm text-gray-600 mb-3">Office stationery and supplies</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">30 products</span>
              <div>
                <button className="text-blue-600 hover:text-blue-900 text-sm mr-2">Edit</button>
                <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Furniture</h3>
            <p className="text-sm text-gray-600 mb-3">Office and home furniture</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">12 products</span>
              <div>
                <button className="text-blue-600 hover:text-blue-900 text-sm mr-2">Edit</button>
                <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Safety Equipment</h3>
            <p className="text-sm text-gray-600 mb-3">Safety gear and protective equipment</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">18 products</span>
              <div>
                <button className="text-blue-600 hover:text-blue-900 text-sm mr-2">Edit</button>
                <button className="text-red-600 hover:text-red-900 text-sm">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
