import React, { useState } from 'react';
import { X, User, Mail, Phone, MapPin, Lock, UserCircle, Eye, Edit, Trash2 } from 'lucide-react';

const Users = () => {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [formData, setFormData] = useState({
    // Basic Information
    prefix: '',
    firstName: '',
    lastName: '',
    email: '',
    isActive: true,
    
    // Service Staff Pin
    enableServiceStaffPin: false,
    
    // Roles and Permissions
    allowLogin: true,
    username: '',
    password: '',
    confirmPassword: '',
    role: 'CASHIER',
    
    // Access Locations
    accessAllLocations: true,
    selectedLocations: [],
    
    // Sales
    salesCommissionPercentage: '',
    maxSalesDiscountPercent: '',
    allowSelectedContacts: false,
    
    // More Information
    dateOfBirth: '',
    gender: '',
    maritalStatus: '',
    bloodGroup: '',
    contactNumber: '',
    alternateContactNumber: '',
    familyContactNumber: '',
    facebookLink: '',
    twitterLink: '',
    socialMedia1: '',
    socialMedia2: '',
    customField1: '',
    customField2: '',
    customField3: '',
    customField4: '',
    guardianName: '',
    idProofName: '',
    idProofNumber: '',
    permanentAddress: '',
    currentAddress: '',
    
    // Bank Details
    accountHolderName: '',
    accountNumber: '',
    bankName: '',
    bankIdentifierCode: '',
    branch: '',
    taxPayerId: '',
    
    // HRM Details
    department: '',
    designation: '',
    
    // Payroll
    primaryWorkLocation: '',
    basicSalary: '',
    payComponents: ''
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
    // TODO: Add API call to create user
    console.log('User data:', formData);
    // Reset form and close modal
    setFormData({
      prefix: '',
      firstName: '',
      lastName: '',
      email: '',
      isActive: true,
      enableServiceStaffPin: false,
      allowLogin: true,
      username: '',
      password: '',
      confirmPassword: '',
      role: 'CASHIER',
      accessAllLocations: true,
      selectedLocations: [],
      salesCommissionPercentage: '',
      maxSalesDiscountPercent: '',
      allowSelectedContacts: false,
      dateOfBirth: '',
      gender: '',
      maritalStatus: '',
      bloodGroup: '',
      contactNumber: '',
      alternateContactNumber: '',
      familyContactNumber: '',
      facebookLink: '',
      twitterLink: '',
      socialMedia1: '',
      socialMedia2: '',
      customField1: '',
      customField2: '',
      customField3: '',
      customField4: '',
      guardianName: '',
      idProofName: '',
      idProofNumber: '',
      permanentAddress: '',
      currentAddress: '',
      accountHolderName: '',
      accountNumber: '',
      bankName: '',
      bankIdentifierCode: '',
      branch: '',
      taxPayerId: '',
      department: '',
      designation: '',
      primaryWorkLocation: '',
      basicSalary: '',
      payComponents: ''
    });
    setShowAddUserModal(false);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Users</h1>
        <p className="text-gray-600 mt-2">Manage system users</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">User List</h2>
          <button 
            onClick={() => setShowAddUserModal(true)}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
          >
            <User className="w-4 h-4" />
            <span>Add New User</span>
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Nadeesha</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">nadeesha@secu.com</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Admin</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center space-x-2">
                    <button 
                      className="text-teal-600 hover:text-teal-900 px-2 py-1 hover:bg-teal-50 rounded transition-colors flex items-center space-x-1"
                      title="View"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View</span>
                    </button>
                    <button 
                      className="text-blue-600 hover:text-blue-900 px-2 py-1 hover:bg-blue-50 rounded transition-colors flex items-center space-x-1"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                      <span>Edit</span>
                    </button>
                    <button 
                      className="text-red-600 hover:text-red-900 px-2 py-1 hover:bg-red-50 rounded transition-colors flex items-center space-x-1"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Add User Modal */}
      {showAddUserModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[95vh] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-teal-600 to-teal-700">
              <h3 className="text-xl font-semibold text-white">Add New User</h3>
              <button
                onClick={() => setShowAddUserModal(false)}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6">
              <form onSubmit={handleSubmit}>
                {/* Basic Information Section */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Basic Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Prefix */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Prefix</label>
                      <select
                        name="prefix"
                        value={formData.prefix}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="">Select</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                        <option value="Ms">Ms</option>
                        <option value="Dr">Dr</option>
                      </select>
                    </div>

                    {/* First Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Enter first name"
                        required
                      />
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Enter last name"
                      />
                    </div>

                    {/* Email */}
                    <div className="md:col-span-3">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Enter email"
                        required
                      />
                    </div>

                    {/* Is Active */}
                    <div className="md:col-span-3">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="isActive"
                          checked={formData.isActive}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-teal-600 rounded focus:ring-2 focus:ring-teal-500"
                        />
                        <span className="text-sm font-semibold text-gray-700">Is Active?</span>
                      </label>
                    </div>

                    {/* Enable Service Staff Pin */}
                    <div className="md:col-span-3">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="enableServiceStaffPin"
                          checked={formData.enableServiceStaffPin}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-teal-600 rounded focus:ring-2 focus:ring-teal-500"
                        />
                        <span className="text-sm font-semibold text-gray-700">Enable service staff pin</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Roles and Permissions Section */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Roles and Permissions</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Allow Login */}
                    <div className="md:col-span-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="allowLogin"
                          checked={formData.allowLogin}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-teal-600 rounded focus:ring-2 focus:ring-teal-500"
                        />
                        <span className="text-sm font-semibold text-gray-700">Allow login</span>
                      </label>
                    </div>

                    {/* Username */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Username</label>
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Leave blank to auto generate username"
                      />
                      <p className="text-xs text-gray-500 mt-1">Leave blank to auto generate username</p>
                    </div>

                    {/* Password */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Password <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Enter password"
                        required
                      />
                    </div>

                    {/* Confirm Password */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Confirm Password <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Confirm password"
                        required
                      />
                    </div>

                    {/* Role */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Role <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required
                      >
                        <option value="ADMIN">Admin</option>
                        <option value="CASHIER">Cashier</option>
                        <option value="MANAGER">Manager</option>
                        <option value="INVENTORY_MANAGER">Inventory Manager</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Access Locations Section */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Access locations</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="accessAllLocations"
                        checked={formData.accessAllLocations}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-teal-600 rounded focus:ring-2 focus:ring-teal-500"
                      />
                      <span className="text-sm font-semibold text-gray-700">All Locations</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-teal-600 rounded focus:ring-2 focus:ring-teal-500"
                      />
                      <span className="text-sm text-gray-700">SecU Engineering (BL0001)</span>
                    </label>
                  </div>
                </div>

                {/* Sales Section */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Sales</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Sales Commission Percentage (%):
                      </label>
                      <input
                        type="number"
                        name="salesCommissionPercentage"
                        value={formData.salesCommissionPercentage}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="0.00"
                        step="0.01"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Max sales discount percent:
                      </label>
                      <input
                        type="number"
                        name="maxSalesDiscountPercent"
                        value={formData.maxSalesDiscountPercent}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="0.00"
                        step="0.01"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="allowSelectedContacts"
                          checked={formData.allowSelectedContacts}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-teal-600 rounded focus:ring-2 focus:ring-teal-500"
                        />
                        <span className="text-sm font-semibold text-gray-700">Allow Selected Contacts</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* More Information Section */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">More Informations</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Date of birth:</label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Gender:</label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Marital Status:</label>
                      <select
                        name="maritalStatus"
                        value={formData.maritalStatus}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="">Select</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Widowed">Widowed</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Blood Group:</label>
                      <select
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="">Select</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Number:</label>
                      <input
                        type="tel"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Enter contact number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Alternate contact number:</label>
                      <input
                        type="tel"
                        name="alternateContactNumber"
                        value={formData.alternateContactNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Enter alternate number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Family contact number:</label>
                      <input
                        type="tel"
                        name="familyContactNumber"
                        value={formData.familyContactNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Enter family contact number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Facebook Link:</label>
                      <input
                        type="url"
                        name="facebookLink"
                        value={formData.facebookLink}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Facebook profile URL"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Twitter Link:</label>
                      <input
                        type="url"
                        name="twitterLink"
                        value={formData.twitterLink}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Twitter profile URL"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Social Media 1:</label>
                      <input
                        type="url"
                        name="socialMedia1"
                        value={formData.socialMedia1}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Social media link"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Social Media 2:</label>
                      <input
                        type="url"
                        name="socialMedia2"
                        value={formData.socialMedia2}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Social media link"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Custom field 1:</label>
                      <input
                        type="text"
                        name="customField1"
                        value={formData.customField1}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Custom field 2:</label>
                      <input
                        type="text"
                        name="customField2"
                        value={formData.customField2}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Custom field 3:</label>
                      <input
                        type="text"
                        name="customField3"
                        value={formData.customField3}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Custom field 4:</label>
                      <input
                        type="text"
                        name="customField4"
                        value={formData.customField4}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Guardian Name:</label>
                      <input
                        type="text"
                        name="guardianName"
                        value={formData.guardianName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Enter guardian name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">ID proof name:</label>
                      <input
                        type="text"
                        name="idProofName"
                        value={formData.idProofName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="e.g., Passport, Driver's License"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">ID proof number:</label>
                      <input
                        type="text"
                        name="idProofNumber"
                        value={formData.idProofNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Enter ID number"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Permanent Address:</label>
                      <textarea
                        name="permanentAddress"
                        value={formData.permanentAddress}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        rows="2"
                        placeholder="Enter permanent address"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Current Address:</label>
                      <textarea
                        name="currentAddress"
                        value={formData.currentAddress}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        rows="2"
                        placeholder="Enter current address"
                      />
                    </div>
                  </div>
                </div>

                {/* Bank Details Section */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Bank Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Account Holder's Name:</label>
                      <input
                        type="text"
                        name="accountHolderName"
                        value={formData.accountHolderName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Enter account holder name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Account Number:</label>
                      <input
                        type="text"
                        name="accountNumber"
                        value={formData.accountNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Enter account number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Bank Name:</label>
                      <input
                        type="text"
                        name="bankName"
                        value={formData.bankName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Enter bank name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Bank Identifier Code:</label>
                      <input
                        type="text"
                        name="bankIdentifierCode"
                        value={formData.bankIdentifierCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Enter BIC/SWIFT code"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Branch:</label>
                      <input
                        type="text"
                        name="branch"
                        value={formData.branch}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Enter branch name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Tax Payer ID:</label>
                      <input
                        type="text"
                        name="taxPayerId"
                        value={formData.taxPayerId}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Enter tax payer ID"
                      />
                    </div>
                  </div>
                </div>

                {/* HRM Details Section */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">HRM Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Department:</label>
                      <input
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Enter department"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Designation:</label>
                      <input
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Enter designation"
                      />
                    </div>
                  </div>
                </div>

                {/* Payroll Section */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Payroll</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Primary work location:</label>
                      <input
                        type="text"
                        name="primaryWorkLocation"
                        value={formData.primaryWorkLocation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Enter primary work location"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Basic salary:</label>
                      <input
                        type="number"
                        name="basicSalary"
                        value={formData.basicSalary}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Enter basic salary"
                        step="0.01"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Pay Components:</label>
                      <textarea
                        name="payComponents"
                        value={formData.payComponents}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        rows="2"
                        placeholder="Enter pay components"
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
                  onClick={() => setShowAddUserModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors font-semibold"
                >
                  Create User
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
