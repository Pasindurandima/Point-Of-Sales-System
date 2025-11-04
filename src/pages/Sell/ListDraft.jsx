import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Edit, Trash2, CheckCircle, Eye } from 'lucide-react';

const ListDraft = () => {
  const navigate = useNavigate();
  const [drafts] = useState([
    {
      id: 1,
      draftNo: 'DRAFT-001',
      customer: 'John Doe',
      date: '2025-11-04',
      items: 5,
      total: 15750.00,
      notes: 'Pending customer confirmation'
    },
    {
      id: 2,
      draftNo: 'DRAFT-002',
      customer: 'Jane Smith',
      date: '2025-11-03',
      items: 3,
      total: 8500.00,
      notes: 'Waiting for stock'
    },
    {
      id: 3,
      draftNo: 'DRAFT-003',
      customer: 'Walk-in Customer',
      date: '2025-11-02',
      items: 7,
      total: 22300.00,
      notes: 'Price negotiation'
    }
  ]);

  const handleAddDraft = () => {
    navigate('/sell/add-draft');
  };

  const handleEditDraft = (id) => {
    console.log('Edit draft:', id);
  };

  const handleConvertToSale = (id) => {
    console.log('Convert draft to sale:', id);
  };

  const handleDeleteDraft = (id) => {
    console.log('Delete draft:', id);
  };

  const handleViewDraft = (id) => {
    console.log('View draft:', id);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Sales Drafts</h1>
        <p className="text-gray-600 mt-2">Manage your saved sales drafts</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search drafts..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="date"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>All Customers</option>
              <option>Walk-in Customer</option>
              <option>John Doe</option>
              <option>Jane Smith</option>
            </select>
          </div>
          <button
            onClick={handleAddDraft}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
          >
            <FileText className="w-4 h-4" />
            <span>Add Draft</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Draft No</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {drafts.map((draft) => (
                <tr key={draft.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-teal-600">
                    {draft.draftNo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {draft.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {draft.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {draft.items} items
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    Rs {draft.total.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                    {draft.notes}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleViewDraft(draft.id)}
                        className="text-blue-600 hover:text-blue-800"
                        title="View"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEditDraft(draft.id)}
                        className="text-teal-600 hover:text-teal-800"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleConvertToSale(draft.id)}
                        className="text-green-600 hover:text-green-800"
                        title="Convert to Sale"
                      >
                        <CheckCircle className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteDraft(draft.id)}
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
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-sm text-blue-600 font-medium">Total Drafts</div>
            <div className="text-2xl font-bold text-blue-900">{drafts.length}</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-sm text-green-600 font-medium">Total Items</div>
            <div className="text-2xl font-bold text-green-900">
              {drafts.reduce((sum, draft) => sum + draft.items, 0)}
            </div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-sm text-purple-600 font-medium">Total Value</div>
            <div className="text-2xl font-bold text-purple-900">
              Rs {drafts.reduce((sum, draft) => sum + draft.total, 0).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListDraft;
