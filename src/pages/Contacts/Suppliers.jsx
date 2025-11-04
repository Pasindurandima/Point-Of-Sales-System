import React, { useState } from 'react';
import { X, Truck, User, Mail, Phone, MapPin, Building2, CreditCard, FileText, Globe } from 'lucide-react';

const Suppliers = () => {
  const [showAddSupplierModal, setShowAddSupplierModal] = useState(false);
  const [formData, setFormData] = useState({
    supplierName: '',
    contactPerson: '',
    email: '',
    phone: '',
    alternatePhone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    taxNumber: '',
    bankName: '',
    accountNumber: '',
    accountHolderName: '',
    paymentTerms: '30',
    creditLimit: '',
    website: '',
    notes: ''
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
    // TODO: Add API call to create supplier
    console.log('Supplier data:', formData);
    // Reset form and close modal
    setFormData({
      supplierName: '',
      contactPerson: '',
      email: '',
      phone: '',
      alternatePhone: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      taxNumber: '',
      bankName: '',
      accountNumber: '',
      accountHolderName: '',
      paymentTerms: '30',
      creditLimit: '',
      website: '',
      notes: ''
    });
    setShowAddSupplierModal(false);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Suppliers</h1>
        <p className="text-gray-600 mt-2">Manage supplier contacts and information</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Supplier List</h2>
          <button 
            onClick={() => setShowAddSupplierModal(true)}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
          >
            <Truck className="w-4 h-4" />
            <span>Add New Supplier</span>
          </button>
        </div>
        
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search suppliers..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Person</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Due</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sample Supplier</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">John Doe</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">supplier@example.com</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">+94 77 987 6543</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Rs 0.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-teal-600 hover:text-teal-900 mr-3">View</button>
                  <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Supplier Modal */}
      {showAddSupplierModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-teal-600 to-teal-700">
              <div className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-white" />
                <h3 className="text-xl font-semibold text-white">Add New Supplier</h3>
              </div>
              <button
                onClick={() => setShowAddSupplierModal(false)}
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
                    {/* Supplier Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Supplier Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="supplierName"
                          value={formData.supplierName}
                          onChange={handleInputChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="Enter supplier/company name"
                          required
                        />
                      </div>
                    </div>

                    {/* Contact Person */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Contact Person <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="contactPerson"
                          value={formData.contactPerson}
                          onChange={handleInputChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="Enter contact person name"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="Enter email address"
                          required
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="Enter phone number"
                          required
                        />
                      </div>
                    </div>

                    {/* Alternate Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Alternate Phone
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <input
                          type="tel"
                          name="alternatePhone"
                          value={formData.alternatePhone}
                          onChange={handleInputChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="Enter alternate phone"
                        />
                      </div>
                    </div>

                    {/* Website */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Website
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="https://example.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Address Information */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-700 mb-3 uppercase">Address Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Address */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Street Address
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="Enter street address"
                          rows="2"
                        />
                      </div>
                    </div>

                    {/* City */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Enter city"
                      />
                    </div>

                    {/* State */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        State/Province
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Enter state"
                      />
                    </div>

                    {/* Zip Code */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Zip/Postal Code
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Enter zip code"
                      />
                    </div>

                    {/* Country */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Enter country"
                      />
                    </div>
                  </div>
                </div>

                {/* Financial Information */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-700 mb-3 uppercase">Financial Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Tax Number */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Tax Number / VAT ID
                      </label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="taxNumber"
                          value={formData.taxNumber}
                          onChange={handleInputChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="Enter tax number"
                        />
                      </div>
                    </div>

                    {/* Payment Terms */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Payment Terms (Days)
                      </label>
                      <select
                        name="paymentTerms"
                        value={formData.paymentTerms}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="0">Due on Receipt</option>
                        <option value="7">Net 7 Days</option>
                        <option value="15">Net 15 Days</option>
                        <option value="30">Net 30 Days</option>
                        <option value="45">Net 45 Days</option>
                        <option value="60">Net 60 Days</option>
                        <option value="90">Net 90 Days</option>
                      </select>
                    </div>

                    {/* Credit Limit */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Credit Limit
                      </label>
                      <input
                        type="number"
                        name="creditLimit"
                        value={formData.creditLimit}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="0.00"
                        step="0.01"
                      />
                    </div>
                  </div>
                </div>

                {/* Bank Details */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-700 mb-3 uppercase">Bank Details (Optional)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Bank Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Bank Name
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="bankName"
                          value={formData.bankName}
                          onChange={handleInputChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="Enter bank name"
                        />
                      </div>
                    </div>

                    {/* Account Number */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Account Number
                      </label>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="accountNumber"
                          value={formData.accountNumber}
                          onChange={handleInputChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="Enter account number"
                        />
                      </div>
                    </div>

                    {/* Account Holder Name */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Account Holder Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="accountHolderName"
                          value={formData.accountHolderName}
                          onChange={handleInputChange}
                          className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="Enter account holder name"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Notes
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Add any additional notes about this supplier"
                    rows="3"
                  />
                </div>
              </form>
            </div>

            {/* Modal Footer */}
            <div className="flex-shrink-0 border-t bg-gray-50 px-6 py-4">
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowAddSupplierModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors font-semibold flex items-center space-x-2"
                >
                  <Truck className="w-4 h-4" />
                  <span>Create Supplier</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Suppliers;
