import React, { useState } from 'react';
import { X, ShoppingCart, Truck, FileText, Calendar, DollarSign, Plus, Trash2, Package, Search } from 'lucide-react';

const ListPurchase = () => {
  const [showAddPurchaseModal, setShowAddPurchaseModal] = useState(false);
  const [formData, setFormData] = useState({
    supplier: '',
    invoiceNo: '',
    purchaseDate: new Date().toISOString().split('T')[0],
    referenceNo: '',
    purchaseStatus: 'RECEIVED',
    paymentStatus: 'PENDING',
    paymentMethod: '',
    notes: ''
  });

  const [purchaseItems, setPurchaseItems] = useState([]);
  const [searchProduct, setSearchProduct] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addProduct = () => {
    const newItem = {
      id: Date.now(),
      product: '',
      quantity: 1,
      unitCost: 0,
      tax: 0,
      subtotal: 0
    };
    setPurchaseItems([...purchaseItems, newItem]);
  };

  const removeProduct = (id) => {
    setPurchaseItems(purchaseItems.filter(item => item.id !== id));
  };

  const updateProduct = (id, field, value) => {
    setPurchaseItems(purchaseItems.map(item => {
      if (item.id === id) {
        const updated = { ...item, [field]: parseFloat(value) || 0 };
        updated.subtotal = updated.quantity * updated.unitCost + (updated.quantity * updated.unitCost * updated.tax / 100);
        return updated;
      }
      return item;
    }));
  };

  const calculateTotals = () => {
    const subtotal = purchaseItems.reduce((sum, item) => sum + (item.quantity * item.unitCost), 0);
    const tax = purchaseItems.reduce((sum, item) => sum + (item.quantity * item.unitCost * item.tax / 100), 0);
    const total = subtotal + tax;
    return { subtotal, tax, total };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totals = calculateTotals();
    console.log('Purchase Data:', { ...formData, items: purchaseItems, totals });
    setShowAddPurchaseModal(false);
    // API integration here
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Purchase List</h1>
        <p className="text-gray-600 mt-2">View all purchase orders</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search purchases..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="date"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <button 
            onClick={() => setShowAddPurchaseModal(true)}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add Purchase</span>
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice No</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paid</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2025-11-04</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">PUR-001</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Sample Supplier</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Rs 50,000.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Rs 30,000.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">Rs 20,000.00</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Partial
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-teal-600 hover:text-teal-900 mr-2">View</button>
                  <button className="text-blue-600 hover:text-blue-900 mr-2">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Purchase Modal */}
      {showAddPurchaseModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-teal-600 to-teal-700">
              <div className="flex items-center space-x-2">
                <ShoppingCart className="w-5 h-5 text-white" />
                <h3 className="text-xl font-semibold text-white">Add New Purchase</h3>
              </div>
              <button
                onClick={() => setShowAddPurchaseModal(false)}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6">
              <form onSubmit={handleSubmit}>
                {/* Purchase Information */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-700 mb-3 uppercase">Purchase Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Supplier */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Supplier <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Truck className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <select
                          name="supplier"
                          value={formData.supplier}
                          onChange={handleInputChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                          required
                        >
                          <option value="">Select Supplier</option>
                          <option value="supplier1">Sample Supplier 1</option>
                          <option value="supplier2">Sample Supplier 2</option>
                          <option value="supplier3">Sample Supplier 3</option>
                        </select>
                      </div>
                    </div>

                    {/* Purchase Date */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Purchase Date <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <input
                          type="date"
                          name="purchaseDate"
                          value={formData.purchaseDate}
                          onChange={handleInputChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                          required
                        />
                      </div>
                    </div>

                    {/* Invoice No */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Invoice No
                      </label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="invoiceNo"
                          value={formData.invoiceNo}
                          onChange={handleInputChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="Auto-generated"
                        />
                      </div>
                    </div>

                    {/* Reference No */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Reference No
                      </label>
                      <input
                        type="text"
                        name="referenceNo"
                        value={formData.referenceNo}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Supplier invoice reference"
                      />
                    </div>

                    {/* Purchase Status */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Purchase Status
                      </label>
                      <select
                        name="purchaseStatus"
                        value={formData.purchaseStatus}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="ORDERED">Ordered</option>
                        <option value="RECEIVED">Received</option>
                        <option value="PENDING">Pending</option>
                      </select>
                    </div>

                    {/* Payment Status */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Payment Status
                      </label>
                      <select
                        name="paymentStatus"
                        value={formData.paymentStatus}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="PENDING">Pending</option>
                        <option value="PARTIAL">Partial</option>
                        <option value="PAID">Paid</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Products Section */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-sm font-bold text-gray-700 uppercase">Purchase Items</h4>
                    <button
                      type="button"
                      onClick={addProduct}
                      className="flex items-center space-x-2 text-sm text-teal-600 hover:text-teal-700 font-semibold"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Product</span>
                    </button>
                  </div>

                  {/* Product Search */}
                  <div className="mb-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        value={searchProduct}
                        onChange={(e) => setSearchProduct(e.target.value)}
                        className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Search products by name or SKU..."
                      />
                    </div>
                  </div>

                  {/* Products Table */}
                  <div className="border rounded-lg overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Unit Cost (Rs)</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tax (%)</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subtotal (Rs)</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {purchaseItems.length === 0 ? (
                            <tr>
                              <td colSpan="6" className="px-4 py-8 text-center text-gray-500">
                                <Package className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                                <p>No products added yet. Click "Add Product" to start.</p>
                              </td>
                            </tr>
                          ) : (
                            purchaseItems.map((item) => (
                              <tr key={item.id}>
                                <td className="px-4 py-3">
                                  <select
                                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    onChange={(e) => updateProduct(item.id, 'product', e.target.value)}
                                  >
                                    <option value="">Select Product</option>
                                    <option value="product1">Sample Product 1</option>
                                    <option value="product2">Sample Product 2</option>
                                    <option value="product3">Sample Product 3</option>
                                  </select>
                                </td>
                                <td className="px-4 py-3">
                                  <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) => updateProduct(item.id, 'quantity', e.target.value)}
                                    className="w-20 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                                  />
                                </td>
                                <td className="px-4 py-3">
                                  <input
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    value={item.unitCost}
                                    onChange={(e) => updateProduct(item.id, 'unitCost', e.target.value)}
                                    className="w-24 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                                  />
                                </td>
                                <td className="px-4 py-3">
                                  <input
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    value={item.tax}
                                    onChange={(e) => updateProduct(item.id, 'tax', e.target.value)}
                                    className="w-20 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                                  />
                                </td>
                                <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                                  {item.subtotal.toFixed(2)}
                                </td>
                                <td className="px-4 py-3">
                                  <button
                                    type="button"
                                    onClick={() => removeProduct(item.id)}
                                    className="text-red-600 hover:text-red-800"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Summary and Notes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Notes */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Add any notes about this purchase..."
                      rows="4"
                    />
                  </div>

                  {/* Total Summary */}
                  <div>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      <h4 className="text-sm font-bold text-gray-700 uppercase mb-3">Purchase Summary</h4>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-700">Subtotal:</span>
                        <span className="font-semibold">Rs {calculateTotals().subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-700">Tax:</span>
                        <span className="font-semibold">Rs {calculateTotals().tax.toFixed(2)}</span>
                      </div>
                      <div className="border-t pt-3 flex justify-between text-lg">
                        <span className="text-gray-900 font-bold">Total:</span>
                        <span className="font-bold text-teal-600">Rs {calculateTotals().total.toFixed(2)}</span>
                      </div>
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
                  onClick={() => setShowAddPurchaseModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors font-semibold flex items-center space-x-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Save Purchase</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListPurchase;
