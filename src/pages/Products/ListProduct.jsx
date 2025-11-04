import React, { useState } from 'react';
import { X, Package, Barcode, DollarSign, Layers, Tag, Ruler, FileText, Image, AlertCircle } from 'lucide-react';

const ListProduct = () => {
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [formData, setFormData] = useState({
    productName: '',
    sku: '',
    barcode: '',
    category: '',
    brand: '',
    unit: '',
    purchasePrice: '',
    sellingPrice: '',
    taxRate: '',
    alertQuantity: '',
    description: '',
    productType: 'SINGLE',
    manageStock: true,
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product Data:', formData);
    setShowAddProductModal(false);
    // API integration here
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Product List</h1>
        <p className="text-gray-600 mt-2">View and manage all products</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search products..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Hardware</option>
            </select>
          </div>
          <button 
            onClick={() => setShowAddProductModal(true)}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
          >
            <Package className="w-4 h-4" />
            <span>Add Product</span>
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SKU</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">PRD001</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sample Product</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Electronics</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Rs 5,000.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">50</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-teal-600 hover:text-teal-900 mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Product Modal */}
      {showAddProductModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-teal-600 to-teal-700">
              <div className="flex items-center space-x-2">
                <Package className="w-5 h-5 text-white" />
                <h3 className="text-xl font-semibold text-white">Add New Product</h3>
              </div>
              <button
                onClick={() => setShowAddProductModal(false)}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6">
              <form onSubmit={handleSubmit}>
                {/* Basic Information */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-700 mb-3 uppercase">Basic Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Product Name */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Product Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Package className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="productName"
                          value={formData.productName}
                          onChange={handleInputChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="Enter product name"
                          required
                        />
                      </div>
                    </div>

                    {/* Product Type */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Product Type
                      </label>
                      <select
                        name="productType"
                        value={formData.productType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="SINGLE">Single Product</option>
                        <option value="VARIABLE">Variable Product</option>
                        <option value="COMBO">Combo Product</option>
                      </select>
                    </div>

                    {/* SKU */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        SKU <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Tag className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="sku"
                          value={formData.sku}
                          onChange={handleInputChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="e.g., PRD001"
                          required
                        />
                      </div>
                    </div>

                    {/* Barcode */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Barcode
                      </label>
                      <div className="relative">
                        <Barcode className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="barcode"
                          value={formData.barcode}
                          onChange={handleInputChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="Product barcode"
                        />
                      </div>
                    </div>

                    {/* Category */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required
                      >
                        <option value="">Select Category</option>
                        <option value="electronics">Electronics</option>
                        <option value="hardware">Hardware</option>
                        <option value="office">Office Supplies</option>
                      </select>
                    </div>

                    {/* Brand */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Brand
                      </label>
                      <select
                        name="brand"
                        value={formData.brand}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="">Select Brand</option>
                        <option value="samsung">Samsung</option>
                        <option value="sony">Sony</option>
                        <option value="bosch">Bosch</option>
                      </select>
                    </div>

                    {/* Unit */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Unit <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="unit"
                        value={formData.unit}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required
                      >
                        <option value="">Select Unit</option>
                        <option value="pcs">Pieces (Pcs)</option>
                        <option value="kg">Kilograms (Kg)</option>
                        <option value="l">Liters (L)</option>
                        <option value="m">Meters (M)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Pricing Information */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-700 mb-3 uppercase">Pricing</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Purchase Price */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Purchase Price <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <input
                          type="number"
                          name="purchasePrice"
                          value={formData.purchasePrice}
                          onChange={handleInputChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="0.00"
                          step="0.01"
                          required
                        />
                      </div>
                    </div>

                    {/* Selling Price */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Selling Price <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <input
                          type="number"
                          name="sellingPrice"
                          value={formData.sellingPrice}
                          onChange={handleInputChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="0.00"
                          step="0.01"
                          required
                        />
                      </div>
                    </div>

                    {/* Tax Rate */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Tax Rate (%)
                      </label>
                      <input
                        type="number"
                        name="taxRate"
                        value={formData.taxRate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="0"
                        step="0.01"
                      />
                    </div>
                  </div>
                </div>

                {/* Stock Management */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-700 mb-3 uppercase">Stock Management</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="manageStock"
                          checked={formData.manageStock}
                          onChange={handleInputChange}
                          className="rounded"
                        />
                        <span className="text-sm font-semibold text-gray-700">Enable Stock Management</span>
                      </label>
                    </div>

                    {formData.manageStock && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Alert Quantity
                          </label>
                          <div className="relative">
                            <AlertCircle className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                            <input
                              type="number"
                              name="alertQuantity"
                              value={formData.alertQuantity}
                              onChange={handleInputChange}
                              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                              placeholder="Minimum stock alert"
                            />
                          </div>
                          <p className="text-xs text-gray-500 mt-1">Get notified when stock falls below this quantity</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Product Description
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Enter product description"
                      rows="3"
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Modal Footer */}
            <div className="flex-shrink-0 border-t bg-gray-50 px-6 py-4">
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowAddProductModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors font-semibold flex items-center space-x-2"
                >
                  <Package className="w-4 h-4" />
                  <span>Create Product</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListProduct;
