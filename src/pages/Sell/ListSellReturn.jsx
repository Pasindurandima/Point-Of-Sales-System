import React, { useState } from 'react';
import { RotateCcw, Plus, Trash2, Package, ShoppingBag, AlertCircle, Calendar, FileText } from 'lucide-react';

const ListSellReturn = () => {
  const [showModal, setShowModal] = useState(false);
  const [returnData, setReturnData] = useState({
    saleInvoice: '',
    returnDate: new Date().toISOString().split('T')[0],
    returnReason: '',
    refundType: 'CASH',
    notes: ''
  });

  const [returnItems, setReturnItems] = useState([]);

  const [returns] = useState([
    {
      id: 1,
      returnNo: 'RET-001',
      invoiceNo: 'INV-1001',
      customer: 'John Doe',
      date: '2025-11-04',
      items: 2,
      total: 5000.00,
      reason: 'DAMAGED',
      refundType: 'CASH',
      status: 'COMPLETED'
    },
    {
      id: 2,
      returnNo: 'RET-002',
      invoiceNo: 'INV-1005',
      customer: 'Jane Smith',
      date: '2025-11-03',
      items: 1,
      total: 2500.00,
      reason: 'DEFECTIVE',
      refundType: 'CREDIT',
      status: 'PENDING'
    },
    {
      id: 3,
      returnNo: 'RET-003',
      invoiceNo: 'INV-1012',
      customer: 'Walk-in Customer',
      date: '2025-11-02',
      items: 3,
      total: 7500.00,
      reason: 'CUSTOMER_REQUEST',
      refundType: 'EXCHANGE',
      status: 'COMPLETED'
    }
  ]);

  const addReturnItem = () => {
    setReturnItems([...returnItems, {
      id: Date.now(),
      product: '',
      soldQty: 0,
      returnQty: 1,
      unitPrice: 0
    }]);
  };

  const removeReturnItem = (id) => {
    setReturnItems(returnItems.filter(item => item.id !== id));
  };

  const updateReturnItem = (id, field, value) => {
    setReturnItems(returnItems.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const calculateTotal = () => {
    return returnItems.reduce((sum, item) => {
      return sum + (item.returnQty * item.unitPrice);
    }, 0);
  };

  const handleAddReturn = () => {
    setShowModal(true);
    setReturnData({
      saleInvoice: '',
      returnDate: new Date().toISOString().split('T')[0],
      returnReason: '',
      refundType: 'CASH',
      notes: ''
    });
    setReturnItems([]);
  };

  const handleSaveReturn = () => {
    const returnRecord = {
      ...returnData,
      items: returnItems,
      total: calculateTotal()
    };
    console.log('Saving return:', returnRecord);
    setShowModal(false);
  };

  const getStatusColor = (status) => {
    return status === 'COMPLETED' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-yellow-100 text-yellow-800';
  };

  const getReasonLabel = (reason) => {
    const labels = {
      'DAMAGED': 'Damaged',
      'DEFECTIVE': 'Defective',
      'WRONG_ITEM': 'Wrong Item',
      'CUSTOMER_REQUEST': 'Customer Request',
      'QUALITY_ISSUE': 'Quality Issue',
      'OTHER': 'Other'
    };
    return labels[reason] || reason;
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Sales Returns</h1>
        <p className="text-gray-600 mt-2">Manage product returns and refunds</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search returns..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="date"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
              <option value="">All Status</option>
              <option value="PENDING">Pending</option>
              <option value="COMPLETED">Completed</option>
              <option value="CANCELLED">Cancelled</option>
            </select>
          </div>
          <button
            onClick={handleAddReturn}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Add Return</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Return No</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice No</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Refund Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {returns.map((returnItem) => (
                <tr key={returnItem.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-600">
                    {returnItem.returnNo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-teal-600 font-medium">
                    {returnItem.invoiceNo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {returnItem.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {returnItem.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {returnItem.items} items
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    Rs {returnItem.total.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {getReasonLabel(returnItem.reason)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {returnItem.refundType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(returnItem.status)}`}>
                      {returnItem.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-800 mr-3">View</button>
                    <button className="text-red-600 hover:text-red-800">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Statistics */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="text-sm text-red-600 font-medium">Total Returns</div>
            <div className="text-2xl font-bold text-red-900">{returns.length}</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="text-sm text-yellow-600 font-medium">Pending</div>
            <div className="text-2xl font-bold text-yellow-900">
              {returns.filter(r => r.status === 'PENDING').length}
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-sm text-green-600 font-medium">Completed</div>
            <div className="text-2xl font-bold text-green-900">
              {returns.filter(r => r.status === 'COMPLETED').length}
            </div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-sm text-purple-600 font-medium">Total Value</div>
            <div className="text-2xl font-bold text-purple-900">
              Rs {returns.reduce((sum, r) => sum + r.total, 0).toFixed(2)}
            </div>
          </div>
        </div>
      </div>

      {/* Add Return Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-t-lg flex-shrink-0">
              <h2 className="text-xl font-bold flex items-center">
                <RotateCcw className="w-5 h-5 mr-2" />
                Add Sales Return
              </h2>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* Return Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <ShoppingBag className="w-4 h-4 inline mr-1" />
                    Sale Invoice <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={returnData.saleInvoice}
                    onChange={(e) => setReturnData({...returnData, saleInvoice: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  >
                    <option value="">Select Invoice</option>
                    <option value="INV-1001">INV-1001 - John Doe</option>
                    <option value="INV-1005">INV-1005 - Jane Smith</option>
                    <option value="INV-1012">INV-1012 - Walk-in Customer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Return Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={returnData.returnDate}
                    onChange={(e) => setReturnData({...returnData, returnDate: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <AlertCircle className="w-4 h-4 inline mr-1" />
                    Return Reason <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={returnData.returnReason}
                    onChange={(e) => setReturnData({...returnData, returnReason: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  >
                    <option value="">Select Reason</option>
                    <option value="DAMAGED">Damaged Product</option>
                    <option value="DEFECTIVE">Defective Product</option>
                    <option value="WRONG_ITEM">Wrong Item</option>
                    <option value="CUSTOMER_REQUEST">Customer Request</option>
                    <option value="QUALITY_ISSUE">Quality Issue</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Refund Type</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="CASH"
                      checked={returnData.refundType === 'CASH'}
                      onChange={(e) => setReturnData({...returnData, refundType: e.target.value})}
                      className="mr-2"
                    />
                    Cash Refund
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="CREDIT"
                      checked={returnData.refundType === 'CREDIT'}
                      onChange={(e) => setReturnData({...returnData, refundType: e.target.value})}
                      className="mr-2"
                    />
                    Store Credit
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="EXCHANGE"
                      checked={returnData.refundType === 'EXCHANGE'}
                      onChange={(e) => setReturnData({...returnData, refundType: e.target.value})}
                      className="mr-2"
                    />
                    Exchange
                  </label>
                </div>
              </div>

              {/* Return Items */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Return Items</h3>
                  <button
                    onClick={addReturnItem}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Item</span>
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sold Qty</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Return Qty</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Unit Price</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {returnItems.length === 0 ? (
                        <tr>
                          <td colSpan="6" className="px-4 py-8 text-center text-gray-500">
                            <Package className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                            <p>No items added yet</p>
                          </td>
                        </tr>
                      ) : (
                        returnItems.map((item) => (
                          <tr key={item.id}>
                            <td className="px-4 py-3">
                              <select
                                value={item.product}
                                onChange={(e) => updateReturnItem(item.id, 'product', e.target.value)}
                                className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                              >
                                <option value="">Select Product</option>
                                <option value="product1">Product 1</option>
                                <option value="product2">Product 2</option>
                              </select>
                            </td>
                            <td className="px-4 py-3">
                              <input
                                type="number"
                                value={item.soldQty}
                                disabled
                                className="w-20 px-2 py-1 border border-gray-300 rounded bg-gray-100"
                              />
                            </td>
                            <td className="px-4 py-3">
                              <input
                                type="number"
                                value={item.returnQty}
                                onChange={(e) => updateReturnItem(item.id, 'returnQty', parseFloat(e.target.value) || 0)}
                                className="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                                min="1"
                              />
                            </td>
                            <td className="px-4 py-3">
                              <input
                                type="number"
                                value={item.unitPrice}
                                onChange={(e) => updateReturnItem(item.id, 'unitPrice', parseFloat(e.target.value) || 0)}
                                className="w-24 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                                step="0.01"
                              />
                            </td>
                            <td className="px-4 py-3 text-gray-900 font-medium">
                              Rs {(item.returnQty * item.unitPrice).toFixed(2)}
                            </td>
                            <td className="px-4 py-3">
                              <button
                                onClick={() => removeReturnItem(item.id)}
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

              {/* Notes and Total */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FileText className="w-4 h-4 inline mr-1" />
                    Notes
                  </label>
                  <textarea
                    value={returnData.notes}
                    onChange={(e) => setReturnData({...returnData, notes: e.target.value})}
                    rows="4"
                    placeholder="Add any additional notes..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Refund:</span>
                      <span className="text-red-600">Rs {calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t p-6 flex justify-end space-x-4 flex-shrink-0">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveReturn}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center space-x-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Process Return</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListSellReturn;
