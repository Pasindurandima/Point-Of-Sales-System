import React, { useState } from 'react';
import { X, Ruler, FileText } from 'lucide-react';

const Units = () => {
  const [showAddUnitModal, setShowAddUnitModal] = useState(false);
  const [formData, setFormData] = useState({
    unitName: '',
    shortName: '',
    allowDecimal: false,
    description: ''
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
    console.log('Unit Data:', formData);
    setShowAddUnitModal(false);
    // API integration here
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Units</h1>
        <p className="text-gray-600 mt-2">Manage product measurement units</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Unit List</h2>
          <button 
            onClick={() => setShowAddUnitModal(true)}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
          >
            <Ruler className="w-4 h-4" />
            <span>Add Unit</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Short Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Allow Decimal</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pieces</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Pcs</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    No
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Kilograms</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Kg</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Yes
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Liters</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">L</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Yes
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Meters</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">M</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Yes
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Unit Modal */}
      {showAddUnitModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-teal-600 to-teal-700">
              <div className="flex items-center space-x-2">
                <Ruler className="w-5 h-5 text-white" />
                <h3 className="text-xl font-semibold text-white">Add New Unit</h3>
              </div>
              <button
                onClick={() => setShowAddUnitModal(false)}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  {/* Unit Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Unit Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Ruler className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="unitName"
                        value={formData.unitName}
                        onChange={handleInputChange}
                        className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="e.g., Pieces, Kilograms, Liters"
                        required
                      />
                    </div>
                  </div>

                  {/* Short Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Short Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="shortName"
                      value={formData.shortName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="e.g., Pcs, Kg, L"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">Abbreviated form of the unit</p>
                  </div>

                  {/* Allow Decimal */}
                  <div>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="allowDecimal"
                        checked={formData.allowDecimal}
                        onChange={handleInputChange}
                        className="rounded"
                      />
                      <span className="text-sm font-semibold text-gray-700">Allow Decimal Values</span>
                    </label>
                    <p className="text-xs text-gray-500 mt-1 ml-6">Enable this for units that can have decimal quantities (e.g., 1.5 Kg)</p>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Description
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Optional description"
                        rows="3"
                      />
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
                  onClick={() => setShowAddUnitModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors font-semibold flex items-center space-x-2"
                >
                  <Ruler className="w-4 h-4" />
                  <span>Create Unit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Units;
