import React, { useState } from 'react';
import { Save, Plus, Trash2, Package, Search, User, Calendar, FileText, DollarSign } from 'lucide-react';

const AddDraft = () => {
  const [draftData, setDraftData] = useState({
    customer: '',
    draftDate: new Date().toISOString().split('T')[0],
    referenceNo: '',
    notes: '',
    discountType: 'PERCENTAGE',
    discountValue: 0,
    shippingCharge: 0
  });

  const [draftItems, setDraftItems] = useState([]);

  const addProduct = () => {
    setDraftItems([...draftItems, {
      id: Date.now(),
      product: '',
      quantity: 1,
      unitPrice: 0,
      discount: 0,
      tax: 0
    }]);
  };

  const removeProduct = (id) => {
    setDraftItems(draftItems.filter(item => item.id !== id));
  };

  const updateProduct = (id, field, value) => {
    setDraftItems(draftItems.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const calculateSubtotal = () => {
    return draftItems.reduce((sum, item) => {
      const itemTotal = (item.quantity * item.unitPrice) - item.discount;
      return sum + itemTotal;
    }, 0);
  };

  const calculateTax = () => {
    return draftItems.reduce((sum, item) => {
      const itemTotal = (item.quantity * item.unitPrice) - item.discount;
      return sum + (itemTotal * item.tax / 100);
    }, 0);
  };

  const calculateDiscount = () => {
    const subtotal = calculateSubtotal();
    if (draftData.discountType === 'PERCENTAGE') {
      return subtotal * (draftData.discountValue / 100);
    }
    return draftData.discountValue;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax() - calculateDiscount() + parseFloat(draftData.shippingCharge || 0);
  };

  const handleSaveDraft = () => {
    const draft = {
      ...draftData,
      items: draftItems,
      subtotal: calculateSubtotal(),
      tax: calculateTax(),
      discount: calculateDiscount(),
      total: calculateTotal()
    };
    console.log('Saving draft:', draft);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Add Draft</h1>
        <p className="text-gray-600 mt-2">Create a new sales draft</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Customer & Date Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-1" />
              Customer <span className="text-red-500">*</span>
            </label>
            <select
              value={draftData.customer}
              onChange={(e) => setDraftData({...draftData, customer: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            >
              <option value="">Select Customer</option>
              <option value="walk-in">Walk-in Customer</option>
              <option value="john-doe">John Doe</option>
              <option value="jane-smith">Jane Smith</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="w-4 h-4 inline mr-1" />
              Draft Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={draftData.draftDate}
              onChange={(e) => setDraftData({...draftData, draftDate: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FileText className="w-4 h-4 inline mr-1" />
              Reference No
            </label>
            <input
              type="text"
              value={draftData.referenceNo}
              onChange={(e) => setDraftData({...draftData, referenceNo: e.target.value})}
              placeholder="Enter reference number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        {/* Products Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Products</h3>
            <button
              onClick={addProduct}
              className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add Product</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Unit Price</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Discount</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tax (%)</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subtotal</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {draftItems.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-4 py-8 text-center text-gray-500">
                      <Package className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                      <p>No products added yet</p>
                      <p className="text-sm">Click "Add Product" to start</p>
                    </td>
                  </tr>
                ) : (
                  draftItems.map((item) => (
                    <tr key={item.id}>
                      <td className="px-4 py-3">
                        <select
                          value={item.product}
                          onChange={(e) => updateProduct(item.id, 'product', e.target.value)}
                          className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                        >
                          <option value="">Select Product</option>
                          <option value="product1">Product 1</option>
                          <option value="product2">Product 2</option>
                        </select>
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateProduct(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                          className="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                          min="1"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          value={item.unitPrice}
                          onChange={(e) => updateProduct(item.id, 'unitPrice', parseFloat(e.target.value) || 0)}
                          className="w-24 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                          min="0"
                          step="0.01"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          value={item.discount}
                          onChange={(e) => updateProduct(item.id, 'discount', parseFloat(e.target.value) || 0)}
                          className="w-24 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                          min="0"
                          step="0.01"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          value={item.tax}
                          onChange={(e) => updateProduct(item.id, 'tax', parseFloat(e.target.value) || 0)}
                          className="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                          min="0"
                          step="0.01"
                        />
                      </td>
                      <td className="px-4 py-3 text-gray-900 font-medium">
                        Rs {((item.quantity * item.unitPrice) - item.discount + ((item.quantity * item.unitPrice - item.discount) * item.tax / 100)).toFixed(2)}
                      </td>
                      <td className="px-4 py-3">
                        <button
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

        {/* Additional Charges & Discount */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FileText className="w-4 h-4 inline mr-1" />
              Notes
            </label>
            <textarea
              value={draftData.notes}
              onChange={(e) => setDraftData({...draftData, notes: e.target.value})}
              rows="4"
              placeholder="Add any additional notes..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Discount Type</label>
                <select
                  value={draftData.discountType}
                  onChange={(e) => setDraftData({...draftData, discountType: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="PERCENTAGE">Percentage (%)</option>
                  <option value="FIXED">Fixed Amount</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Discount Value</label>
                <input
                  type="number"
                  value={draftData.discountValue}
                  onChange={(e) => setDraftData({...draftData, discountValue: parseFloat(e.target.value) || 0})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Shipping Charge</label>
              <input
                type="number"
                value={draftData.shippingCharge}
                onChange={(e) => setDraftData({...draftData, shippingCharge: parseFloat(e.target.value) || 0})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                min="0"
                step="0.01"
              />
            </div>

            {/* Totals */}
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium">Rs {calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax:</span>
                <span className="font-medium">Rs {calculateTax().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Discount:</span>
                <span className="font-medium text-red-600">- Rs {calculateDiscount().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-medium">Rs {parseFloat(draftData.shippingCharge || 0).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t pt-2">
                <span>Total:</span>
                <span className="text-teal-600">Rs {calculateTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors">
            Cancel
          </button>
          <button
            onClick={handleSaveDraft}
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>Save Draft</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDraft;
