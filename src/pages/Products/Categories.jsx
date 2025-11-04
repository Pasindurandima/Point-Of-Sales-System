import React, { useState } from 'react';
import { X, Layers, FileText, Image } from 'lucide-react';

const Categories = () => {
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [formData, setFormData] = useState({
    categoryName: '',
    categoryCode: '',
    description: '',
    parentCategory: '',
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Category Data:', formData);
    setShowAddCategoryModal(false);
    // API integration here
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Categories</h1>
        <p className="text-gray-600 mt-2">Manage product categories</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Category List</h2>
          <button 
            onClick={() => setShowAddCategoryModal(true)}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
          >
            <Layers className="w-4 h-4" />
            <span>Add Category</span>
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

      {/* Add Category Modal */}
      {showAddCategoryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-teal-600 to-teal-700">
              <div className="flex items-center space-x-2">
                <Layers className="w-5 h-5 text-white" />
                <h3 className="text-xl font-semibold text-white">Add New Category</h3>
              </div>
              <button
                onClick={() => setShowAddCategoryModal(false)}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  {/* Category Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Category Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Layers className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="categoryName"
                        value={formData.categoryName}
                        onChange={handleInputChange}
                        className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="e.g., Electronics, Hardware"
                        required
                      />
                    </div>
                  </div>

                  {/* Category Code */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Category Code
                    </label>
                    <input
                      type="text"
                      name="categoryCode"
                      value={formData.categoryCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="e.g., ELEC, HARD"
                    />
                  </div>

                  {/* Parent Category */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Parent Category
                    </label>
                    <select
                      name="parentCategory"
                      value={formData.parentCategory}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="">None (Top Level)</option>
                      <option value="electronics">Electronics</option>
                      <option value="hardware">Hardware</option>
                      <option value="office">Office Supplies</option>
                    </select>
                    <p className="text-xs text-gray-500 mt-1">Select a parent category to create a subcategory</p>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Description <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Describe this category"
                        rows="3"
                        required
                      />
                    </div>
                  </div>

                  {/* Category Image */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Category Image
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                      <Image className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <input
                        type="file"
                        name="image"
                        accept="image/*"
                        className="hidden"
                        id="categoryImage"
                      />
                      <label
                        htmlFor="categoryImage"
                        className="text-sm text-teal-600 hover:text-teal-700 cursor-pointer font-semibold"
                      >
                        Click to upload image
                      </label>
                      <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 2MB</p>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Modal Footer */}
            <div className="flex-shrink-0 border-t bg-gray-50 px-6 py-4">
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowAddCategoryModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors font-semibold flex items-center space-x-2"
                >
                  <Layers className="w-4 h-4" />
                  <span>Create Category</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
