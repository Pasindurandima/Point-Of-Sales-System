import React, { useState } from 'react';
import { Truck, Plus, Edit, Trash2, MapPin, Package, Calendar, User, CheckCircle, Clock } from 'lucide-react';

const Shipments = () => {
  const [showModal, setShowModal] = useState(false);
  const [shipmentData, setShipmentData] = useState({
    invoiceNo: '',
    carrier: '',
    trackingNumber: '',
    shipmentDate: new Date().toISOString().split('T')[0],
    expectedDelivery: '',
    shippingAddress: '',
    shippingCost: 0,
    notes: ''
  });

  const [shipments] = useState([
    {
      id: 1,
      shipmentNo: 'SHIP-001',
      invoiceNo: 'INV-1001',
      customer: 'John Doe',
      carrier: 'DHL Express',
      trackingNumber: 'DHL123456789',
      shipmentDate: '2025-11-04',
      expectedDelivery: '2025-11-06',
      destination: 'Colombo, Sri Lanka',
      items: 5,
      shippingCost: 500.00,
      status: 'IN_TRANSIT'
    },
    {
      id: 2,
      shipmentNo: 'SHIP-002',
      invoiceNo: 'INV-1008',
      customer: 'Jane Smith',
      carrier: 'FedEx',
      trackingNumber: 'FDX987654321',
      shipmentDate: '2025-11-03',
      expectedDelivery: '2025-11-05',
      destination: 'Kandy, Sri Lanka',
      items: 3,
      shippingCost: 350.00,
      status: 'DELIVERED'
    },
    {
      id: 3,
      shipmentNo: 'SHIP-003',
      invoiceNo: 'INV-1015',
      customer: 'Acme Corporation',
      carrier: 'Aramex',
      trackingNumber: 'ARX456789123',
      shipmentDate: '2025-11-02',
      expectedDelivery: '2025-11-08',
      destination: 'Galle, Sri Lanka',
      items: 10,
      shippingCost: 800.00,
      status: 'PENDING'
    }
  ]);

  const getStatusColor = (status) => {
    const colors = {
      'PENDING': 'bg-yellow-100 text-yellow-800',
      'PROCESSING': 'bg-blue-100 text-blue-800',
      'IN_TRANSIT': 'bg-purple-100 text-purple-800',
      'DELIVERED': 'bg-green-100 text-green-800',
      'CANCELLED': 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getStatusLabel = (status) => {
    const labels = {
      'PENDING': 'Pending',
      'PROCESSING': 'Processing',
      'IN_TRANSIT': 'In Transit',
      'DELIVERED': 'Delivered',
      'CANCELLED': 'Cancelled'
    };
    return labels[status] || status;
  };

  const handleAddShipment = () => {
    setShowModal(true);
    setShipmentData({
      invoiceNo: '',
      carrier: '',
      trackingNumber: '',
      shipmentDate: new Date().toISOString().split('T')[0],
      expectedDelivery: '',
      shippingAddress: '',
      shippingCost: 0,
      notes: ''
    });
  };

  const handleSaveShipment = () => {
    console.log('Saving shipment:', shipmentData);
    setShowModal(false);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Shipments</h1>
        <p className="text-gray-600 mt-2">Track and manage shipments</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search shipments..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option value="">All Status</option>
              <option value="PENDING">Pending</option>
              <option value="PROCESSING">Processing</option>
              <option value="IN_TRANSIT">In Transit</option>
              <option value="DELIVERED">Delivered</option>
              <option value="CANCELLED">Cancelled</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option value="">All Carriers</option>
              <option value="DHL">DHL Express</option>
              <option value="FEDEX">FedEx</option>
              <option value="ARAMEX">Aramex</option>
              <option value="UPS">UPS</option>
            </select>
          </div>
          <button
            onClick={handleAddShipment}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
          >
            <Truck className="w-4 h-4" />
            <span>Add Shipment</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Shipment Info</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Carrier & Tracking</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Dates</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Destination</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Details</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {shipments.map((shipment) => (
                <tr key={shipment.id} className="hover:bg-gray-50">
                  <td className="px-3 py-3">
                    <div className="text-sm font-medium text-teal-600">{shipment.shipmentNo}</div>
                    <div className="text-xs text-blue-600">{shipment.invoiceNo}</div>
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">
                    {shipment.customer}
                  </td>
                  <td className="px-3 py-3">
                    <div className="text-sm text-gray-600">{shipment.carrier}</div>
                    <div className="text-xs text-gray-500 font-mono">{shipment.trackingNumber}</div>
                  </td>
                  <td className="px-3 py-3">
                    <div className="text-xs text-gray-600">
                      <div>Ship: {shipment.shipmentDate}</div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        ETA: {shipment.expectedDelivery}
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-3 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                      <span className="text-xs">{shipment.destination}</span>
                    </div>
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    <div className="text-xs text-gray-600">{shipment.items} items</div>
                    <div className="text-xs text-gray-900 font-medium">Rs {shipment.shippingCost.toFixed(2)}</div>
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(shipment.status)}`}>
                      {getStatusLabel(shipment.status)}
                    </span>
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap text-xs">
                    <div className="flex flex-col space-y-1">
                      <button className="text-blue-600 hover:text-blue-800">View</button>
                      <button className="text-teal-600 hover:text-teal-800">Track</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Statistics */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="text-sm text-yellow-600 font-medium">Pending</div>
            <div className="text-2xl font-bold text-yellow-900">
              {shipments.filter(s => s.status === 'PENDING').length}
            </div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-sm text-purple-600 font-medium">In Transit</div>
            <div className="text-2xl font-bold text-purple-900">
              {shipments.filter(s => s.status === 'IN_TRANSIT').length}
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-sm text-green-600 font-medium">Delivered</div>
            <div className="text-2xl font-bold text-green-900">
              {shipments.filter(s => s.status === 'DELIVERED').length}
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-sm text-blue-600 font-medium">Total Items</div>
            <div className="text-2xl font-bold text-blue-900">
              {shipments.reduce((sum, s) => sum + s.items, 0)}
            </div>
          </div>
          <div className="bg-teal-50 p-4 rounded-lg">
            <div className="text-sm text-teal-600 font-medium">Total Cost</div>
            <div className="text-2xl font-bold text-teal-900">
              Rs {shipments.reduce((sum, s) => sum + s.shippingCost, 0).toFixed(2)}
            </div>
          </div>
        </div>
      </div>

      {/* Add Shipment Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6 rounded-t-lg flex-shrink-0">
              <h2 className="text-xl font-bold flex items-center">
                <Truck className="w-5 h-5 mr-2" />
                Add Shipment
              </h2>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Package className="w-4 h-4 inline mr-1" />
                    Invoice Number <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={shipmentData.invoiceNo}
                    onChange={(e) => setShipmentData({...shipmentData, invoiceNo: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  >
                    <option value="">Select Invoice</option>
                    <option value="INV-1001">INV-1001 - John Doe</option>
                    <option value="INV-1008">INV-1008 - Jane Smith</option>
                    <option value="INV-1015">INV-1015 - Acme Corporation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Truck className="w-4 h-4 inline mr-1" />
                    Carrier <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={shipmentData.carrier}
                    onChange={(e) => setShipmentData({...shipmentData, carrier: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  >
                    <option value="">Select Carrier</option>
                    <option value="DHL">DHL Express</option>
                    <option value="FEDEX">FedEx</option>
                    <option value="ARAMEX">Aramex</option>
                    <option value="UPS">UPS</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tracking Number</label>
                  <input
                    type="text"
                    value={shipmentData.trackingNumber}
                    onChange={(e) => setShipmentData({...shipmentData, trackingNumber: e.target.value})}
                    placeholder="Enter tracking number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Shipment Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={shipmentData.shipmentDate}
                    onChange={(e) => setShipmentData({...shipmentData, shipmentDate: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Expected Delivery
                  </label>
                  <input
                    type="date"
                    value={shipmentData.expectedDelivery}
                    onChange={(e) => setShipmentData({...shipmentData, expectedDelivery: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Shipping Cost</label>
                  <input
                    type="number"
                    value={shipmentData.shippingCost}
                    onChange={(e) => setShipmentData({...shipmentData, shippingCost: parseFloat(e.target.value) || 0})}
                    placeholder="0.00"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Shipping Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={shipmentData.shippingAddress}
                  onChange={(e) => setShipmentData({...shipmentData, shippingAddress: e.target.value})}
                  rows="3"
                  placeholder="Enter complete shipping address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
                <textarea
                  value={shipmentData.notes}
                  onChange={(e) => setShipmentData({...shipmentData, notes: e.target.value})}
                  rows="3"
                  placeholder="Add any additional notes..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
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
                onClick={handleSaveShipment}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center space-x-2"
              >
                <Truck className="w-4 h-4" />
                <span>Add Shipment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shipments;
