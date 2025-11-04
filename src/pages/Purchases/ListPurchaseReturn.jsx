import React, { useState } from 'react';
import { X, RotateCcw, Truck, FileText, Calendar, AlertCircle, Plus, Trash2, Package, Search } from 'lucide-react';

const ListPurchaseReturn = () => {
  const [showAddReturnModal, setShowAddReturnModal] = useState(false);
  const [formData, setFormData] = useState({
    purchaseInvoice: '',
    supplier: '',
    returnDate: new Date().toISOString().split('T')[0],
    returnNo: '',
    returnReason: '',
    refundType: 'CASH',
    notes: ''
  });

  const [returnItems, setReturnItems] = useState([]);
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
      purchasedQty: 0,
      returnQty: 1,
      unitCost: 0,
      subtotal: 0
    };
    setReturnItems([...returnItems, newItem]);
  };

  const removeProduct = (id) => {
    setReturnItems(returnItems.filter(item => item.id !== id));
  };

  const updateProduct = (id, field, value) => {
    setReturnItems(returnItems.map(item => {
      if (item.id === id) {
        const updated = { ...item, [field]: parseFloat(value) || 0 };
        updated.subtotal = updated.returnQty * updated.unitCost;
        return updated;
      }
      return item;
    }));
  };

  const calculateTotal = () => {
    return returnItems.reduce((sum, item) => sum + item.subtotal, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = calculateTotal();
    console.log('Purchase Return Data:', { ...formData, items: returnItems, total });
    setShowAddReturnModal(false);
    // API integration here
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Purchase Return List</h1>
        <p className="text-gray-600 mt-2">View all purchase returns</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search returns..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="date"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <button 
            onClick={() => setShowAddReturnModal(true)}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Add Purchase Return</span>
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Return No</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purchase Invoice</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Return Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2025-11-04</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">PR-001</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">PUR-001</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Sample Supplier</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">Rs 5,000.00</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Completed
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

      {/* Add Purchase Return Modal */}
      {showAddReturnModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-red-600 to-red-700">
              <div className="flex items-center space-x-2">
                <RotateCcw className="w-5 h-5 text-white" />
                <h3 className="text-xl font-semibold text-white">Add Purchase Return</h3>
              </div>
              <button
                onClick={() => setShowAddReturnModal(false)}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6">
              <form onSubmit={handleSubmit}>
                {/* Return Information */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-700 mb-3 uppercase">Return Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Purchase Invoice */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Purchase Invoice <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <select
                          name="purchaseInvoice"
                          value={formData.purchaseInvoice}
                          onChange={handleInputChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                          required
                        >
                          <option value="">Select Purchase Invoice</option>
                          <option value="PUR-001">PUR-001 - Sample Supplier</option>
                          <option value="PUR-002">PUR-002 - Sample Supplier 2</option>
                          <option value="PUR-003">PUR-003 - Sample Supplier 3</option>
                        </select>
                      </div>
                    </div>

                    {/* Supplier (Auto-filled) */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Supplier
                      </label>
                      <div className="relative">
                        <Truck className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="supplier"
                          value={formData.supplier}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                          placeholder="Auto-filled from invoice"
                          disabled
                        />
                      </div>
                    </div>

                    {/* Return Date */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Return Date <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <input
                          type="date"
                          name="returnDate"
                          value={formData.returnDate}
                          onChange={handleInputChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                          required
                        />
                      </div>
                    </div>

                    {/* Return No */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Return No
                      </label>
                      <input
                        type="text"
                        name="returnNo"
                        value={formData.returnNo}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Auto-generated"
                      />
                    </div>

                    {/* Return Reason */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Return Reason <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <AlertCircle className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <select
                          name="returnReason"
                          value={formData.returnReason}
                          onChange={handleInputChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                          required
                        >
                          <option value="">Select Reason</option>
                          <option value="DAMAGED">Damaged Products</option>
                          <option value="DEFECTIVE">Defective Items</option>
                          <option value="WRONG_ITEM">Wrong Item Received</option>
                          <option value="QUALITY_ISSUE">Quality Issue</option>
                          <option value="OTHER">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Refund Type */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Refund Type
                      </label>
                      <select
                        name="refundType"
                        value={formData.refundType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        <option value="CASH">Cash Refund</option>
                        <option value="CREDIT">Credit Note</option>
                        <option value="EXCHANGE">Exchange</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Return Items Section */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-sm font-bold text-gray-700 uppercase">Return Items</h4>
                    <button
                      type="button"
                      onClick={addProduct}
                      className="flex items-center space-x-2 text-sm text-red-600 hover:text-red-700 font-semibold"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Item</span>
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
                        className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Search purchased products..."
                      />
                    </div>
                  </div>

                  {/* Return Items Table */}
                  <div className="border rounded-lg overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Purchased Qty</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Return Qty</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Unit Cost (Rs)</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subtotal (Rs)</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {returnItems.length === 0 ? (
                            <tr>
                              <td colSpan="6" className="px-4 py-8 text-center text-gray-500">
                                <Package className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                                <p>No items added yet. Click "Add Item" to start.</p>
                              </td>
                            </tr>
                          ) : (
                            returnItems.map((item) => (
                              <tr key={item.id}>
                                <td className="px-4 py-3">
                                  <select
                                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
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
                                    value={item.purchasedQty}
                                    className="w-20 px-2 py-1 border border-gray-300 rounded text-sm bg-gray-50"
                                    disabled
                                  />
                                </td>
                                <td className="px-4 py-3">
                                  <input
                                    type="number"
                                    min="1"
                                    value={item.returnQty}
                                    onChange={(e) => updateProduct(item.id, 'returnQty', e.target.value)}
                                    className="w-20 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                                  />
                                </td>
                                <td className="px-4 py-3">
                                  <input
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    value={item.unitCost}
                                    onChange={(e) => updateProduct(item.id, 'unitCost', e.target.value)}
                                    className="w-24 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                                  />
                                </td>
                                <td className="px-4 py-3 text-sm font-semibold text-red-600">
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

                {/* Notes and Total */}
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Add any notes about this return..."
                      rows="4"
                    />
                  </div>

                  {/* Total Summary */}
                  <div>
                    <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                      <h4 className="text-sm font-bold text-gray-700 uppercase mb-3">Return Summary</h4>
                      <div className="flex justify-between text-lg">
                        <span className="text-gray-900 font-bold">Total Return Amount:</span>
                        <span className="font-bold text-red-600">Rs {calculateTotal().toFixed(2)}</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        This amount will be {formData.refundType === 'CASH' ? 'refunded' : formData.refundType === 'CREDIT' ? 'credited' : 'exchanged'}
                      </p>
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
                  onClick={() => setShowAddReturnModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-semibold flex items-center space-x-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Process Return</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListPurchaseReturn;
