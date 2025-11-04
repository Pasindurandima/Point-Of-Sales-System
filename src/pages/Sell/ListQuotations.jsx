import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Edit, Trash2, Send, Printer, Eye, Clock } from 'lucide-react';

const ListQuotations = () => {
  const navigate = useNavigate();
  const [quotations] = useState([
    {
      id: 1,
      quotationNo: 'QUO-001',
      customer: 'Acme Corporation',
      date: '2025-11-04',
      expiryDate: '2025-11-14',
      items: 8,
      total: 35000.00,
      status: 'PENDING'
    },
    {
      id: 2,
      quotationNo: 'QUO-002',
      customer: 'John Doe',
      date: '2025-11-03',
      expiryDate: '2025-11-13',
      items: 4,
      total: 12500.00,
      status: 'SENT'
    },
    {
      id: 3,
      quotationNo: 'QUO-003',
      customer: 'Jane Smith',
      date: '2025-11-01',
      expiryDate: '2025-11-11',
      items: 6,
      total: 18750.00,
      status: 'ACCEPTED'
    },
    {
      id: 4,
      quotationNo: 'QUO-004',
      customer: 'Tech Solutions Ltd',
      date: '2025-10-28',
      expiryDate: '2025-11-07',
      items: 10,
      total: 45000.00,
      status: 'EXPIRED'
    }
  ]);

  const handleAddQuotation = () => {
    navigate('/sell/add-quotation');
  };

  const getStatusColor = (status) => {
    const colors = {
      'PENDING': 'bg-yellow-100 text-yellow-800',
      'SENT': 'bg-blue-100 text-blue-800',
      'ACCEPTED': 'bg-green-100 text-green-800',
      'REJECTED': 'bg-red-100 text-red-800',
      'EXPIRED': 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const handleEditQuotation = (id) => {
    console.log('Edit quotation:', id);
  };

  const handleSendQuotation = (id) => {
    console.log('Send quotation:', id);
  };

  const handlePrintQuotation = (id) => {
    console.log('Print quotation:', id);
  };

  const handleDeleteQuotation = (id) => {
    console.log('Delete quotation:', id);
  };

  const handleViewQuotation = (id) => {
    console.log('View quotation:', id);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Quotations</h1>
        <p className="text-gray-600 mt-2">Manage your sales quotations</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search quotations..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="date"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option value="">All Status</option>
              <option value="PENDING">Pending</option>
              <option value="SENT">Sent</option>
              <option value="ACCEPTED">Accepted</option>
              <option value="REJECTED">Rejected</option>
              <option value="EXPIRED">Expired</option>
            </select>
          </div>
          <button
            onClick={handleAddQuotation}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
          >
            <FileText className="w-4 h-4" />
            <span>Add Quotation</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quotation No</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {quotations.map((quotation) => (
                <tr key={quotation.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-teal-600">
                    {quotation.quotationNo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {quotation.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {quotation.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {quotation.expiryDate}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {quotation.items} items
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    Rs {quotation.total.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(quotation.status)}`}>
                      {quotation.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleViewQuotation(quotation.id)}
                        className="text-blue-600 hover:text-blue-800"
                        title="View"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEditQuotation(quotation.id)}
                        className="text-teal-600 hover:text-teal-800"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleSendQuotation(quotation.id)}
                        className="text-green-600 hover:text-green-800"
                        title="Send"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handlePrintQuotation(quotation.id)}
                        className="text-purple-600 hover:text-purple-800"
                        title="Print"
                      >
                        <Printer className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteQuotation(quotation.id)}
                        className="text-red-600 hover:text-red-800"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
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
              {quotations.filter(q => q.status === 'PENDING').length}
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-sm text-blue-600 font-medium">Sent</div>
            <div className="text-2xl font-bold text-blue-900">
              {quotations.filter(q => q.status === 'SENT').length}
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-sm text-green-600 font-medium">Accepted</div>
            <div className="text-2xl font-bold text-green-900">
              {quotations.filter(q => q.status === 'ACCEPTED').length}
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600 font-medium">Expired</div>
            <div className="text-2xl font-bold text-gray-900">
              {quotations.filter(q => q.status === 'EXPIRED').length}
            </div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-sm text-purple-600 font-medium">Total Value</div>
            <div className="text-2xl font-bold text-purple-900">
              Rs {quotations.reduce((sum, q) => sum + q.total, 0).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListQuotations;
