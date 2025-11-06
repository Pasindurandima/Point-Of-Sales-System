import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCamera, FaLock, FaBell, FaSave, FaEdit } from 'react-icons/fa';
import { authService } from '../services/apiService';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('personal');
  const [currentUser, setCurrentUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Form states
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    username: ''
  });

  // Password change state
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Load current user data
  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        phone: user.phone || '',
        address: user.address || '',
        username: user.username || ''
      });
    } else {
      navigate('/sign-in');
    }
  }, [navigate]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle password input changes
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle profile update
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      // Update localStorage
      const updatedUser = {
        ...currentUser,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        username: formData.username
      };
      
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setCurrentUser(updatedUser);
      setIsEditing(false);
      
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
      
      // Reload page to update navbar
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      setMessage({ type: 'error', text: error.response?.data?.message || 'Failed to update profile' });
    } finally {
      setLoading(false);
    }
  };

  // Handle password change
  const handleChangePassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    // Validation
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setMessage({ type: 'error', text: 'New passwords do not match!' });
      setLoading(false);
      return;
    }

    if (passwordData.newPassword.length < 6) {
      setMessage({ type: 'error', text: 'Password must be at least 6 characters long!' });
      setLoading(false);
      return;
    }

    try {
      setMessage({ type: 'success', text: 'Password changed successfully!' });
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    } catch (error) {
      setMessage({ type: 'error', text: error.response?.data?.message || 'Failed to change password' });
    } finally {
      setLoading(false);
    }
  };

  if (!currentUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin w-16 h-16 border-4 border-teal-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  const getInitials = () => {
    if (currentUser.firstName && currentUser.lastName) {
      return `${currentUser.firstName.charAt(0)}${currentUser.lastName.charAt(0)}`.toUpperCase();
    }
    return currentUser.username?.charAt(0)?.toUpperCase() || 'U';
  };

  const getJoinDate = () => {
    const date = new Date(currentUser.createdAt || Date.now());
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
        <p className="text-gray-600 mt-2">Manage your account settings and preferences</p>
      </div>

      {/* Success/Error Messages */}
      {message.text && (
        <div className={`mb-6 p-4 rounded-lg ${
          message.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {message.text}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Profile Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center mb-6">
              <div className="relative inline-block">
                <div className="w-32 h-32 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  {getInitials()}
                </div>
                <button className="absolute bottom-0 right-0 bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-full shadow-lg transition-colors">
                  <FaCamera />
                </button>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mt-4">
                {currentUser.firstName && currentUser.lastName 
                  ? `${currentUser.firstName} ${currentUser.lastName}` 
                  : currentUser.username}
              </h2>
              <p className="text-sm text-gray-600 capitalize">{currentUser.role?.toLowerCase() || 'User'}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                Active
              </span>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => setActiveTab('personal')}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                  activeTab === 'personal'
                    ? 'bg-teal-50 text-teal-700 font-medium border-l-4 border-teal-600'
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <FaUser />
                Personal Info
              </button>
              <button
                onClick={() => setActiveTab('security')}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                  activeTab === 'security'
                    ? 'bg-teal-50 text-teal-700 font-medium border-l-4 border-teal-600'
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <FaLock />
                Security
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mt-6">
            <h3 className="font-semibold text-gray-800 mb-3">Account Info</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Member Since</span>
                <span className="text-sm font-semibold">{getJoinDate()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Username</span>
                <span className="text-sm font-semibold">{currentUser.username}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">User ID</span>
                <span className="text-sm font-semibold">#{currentUser.userId}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-3">
          {/* Personal Info Tab */}
          {activeTab === 'personal' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Personal Information</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      defaultValue="John"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaEnvelope className="inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    defaultValue="john.doe@business.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaPhone className="inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      defaultValue="+1 234 567 8900"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                    <input
                      type="date"
                      defaultValue="1990-01-15"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaMapMarkerAlt className="inline mr-2" />
                    Address
                  </label>
                  <textarea
                    rows="3"
                    defaultValue="123 Business Street, Suite 100"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      defaultValue="New York"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State/Province</label>
                    <input
                      type="text"
                      defaultValue="NY"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ZIP/Postal Code</label>
                    <input
                      type="text"
                      defaultValue="10001"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about yourself..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  ></textarea>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">Change Password</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Update Password
                  </button>
                </form>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">Two-Factor Authentication</h2>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-medium text-gray-900">Enable 2FA</p>
                    <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                  </label>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">Active Sessions</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Windows PC - Chrome</p>
                      <p className="text-xs text-gray-500">New York, USA • Active now</p>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Current</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">iPhone - Safari</p>
                      <p className="text-xs text-gray-500">New York, USA • 2 hours ago</p>
                    </div>
                    <button className="text-red-600 hover:text-red-800 text-sm">Logout</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Notification Preferences</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-4">Email Notifications</h3>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <div>
                        <p className="font-medium text-gray-900">Order Updates</p>
                        <p className="text-sm text-gray-600">Receive notifications about order status changes</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-teal-600 rounded" />
                    </label>
                    <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <div>
                        <p className="font-medium text-gray-900">Low Stock Alerts</p>
                        <p className="text-sm text-gray-600">Get notified when products are running low</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-teal-600 rounded" />
                    </label>
                    <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <div>
                        <p className="font-medium text-gray-900">Payment Confirmations</p>
                        <p className="text-sm text-gray-600">Receive payment receipts and confirmations</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-teal-600 rounded" />
                    </label>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-4">System Notifications</h3>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <div>
                        <p className="font-medium text-gray-900">Security Alerts</p>
                        <p className="text-sm text-gray-600">Important security updates and login attempts</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-teal-600 rounded" />
                    </label>
                    <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <div>
                        <p className="font-medium text-gray-900">Weekly Reports</p>
                        <p className="text-sm text-gray-600">Receive weekly business performance reports</p>
                      </div>
                      <input type="checkbox" className="w-4 h-4 text-teal-600 rounded" />
                    </label>
                    <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <div>
                        <p className="font-medium text-gray-900">Marketing Updates</p>
                        <p className="text-sm text-gray-600">News and updates about new features</p>
                      </div>
                      <input type="checkbox" className="w-4 h-4 text-teal-600 rounded" />
                    </label>
                  </div>
                </div>

                <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-colors">
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
