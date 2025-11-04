import React, { useState, useRef, useEffect } from 'react';
import { Monitor, Bell, Download, User, Settings, LogOut, ChevronDown, FileText, ShoppingCart, Package, DollarSign, TrendingUp, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'order',
      title: 'New Order Received',
      message: 'Order #12345 from John Doe',
      time: '5 min ago',
      read: false,
      icon: ShoppingCart
    },
    {
      id: 2,
      type: 'stock',
      title: 'Low Stock Alert',
      message: 'Product "Laptop HP" is running low',
      time: '1 hour ago',
      read: false,
      icon: Package
    },
    {
      id: 3,
      type: 'payment',
      title: 'Payment Received',
      message: '$2,500 payment confirmed',
      time: '2 hours ago',
      read: true,
      icon: DollarSign
    },
    {
      id: 4,
      type: 'report',
      title: 'Daily Report Ready',
      message: 'Sales report for today is available',
      time: '3 hours ago',
      read: true,
      icon: TrendingUp
    }
  ]);

  const notificationRef = useRef(null);
  const profileRef = useRef(null);
  const downloadRef = useRef(null);

  const unreadCount = notifications.filter(n => !n.read).length;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
      if (downloadRef.current && !downloadRef.current.contains(event.target)) {
        setShowDownloadMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOpenPOS = () => {
    navigate('/sell/pos');
  };

  const handleMarkAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const handleDeleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const handleDownload = (type) => {
    console.log(`Downloading ${type} report...`);
    // Simulate download
    const filename = `${type}_report_${new Date().toISOString().split('T')[0]}.pdf`;
    alert(`Downloading: ${filename}`);
    setShowDownloadMenu(false);
  };

  const handleProfileAction = (action) => {
    console.log(`Profile action: ${action}`);
    if (action === 'profile') {
      navigate('/profile');
    } else if (action === 'settings') {
      navigate('/settings');
    } else if (action === 'logout') {
      navigate('/sign-out');
    }
    setShowProfileMenu(false);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gradient-to-r from-teal-700 to-teal-500 text-white shadow-lg">
      <div className="flex items-center gap-3">
        <div>
          <div className="text-lg font-semibold">Welcome Nadeesha,</div>
          <div className="text-xs text-teal-100">Point of Sale System</div>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        {/* Open POS Button */}
        <button 
          onClick={handleOpenPOS}
          className="flex items-center gap-2 px-4 py-2 bg-white text-teal-700 hover:bg-teal-50 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <Monitor className="w-5 h-5" />
          Open POS
        </button>

        {/* Download Menu */}
        <div ref={downloadRef} className="relative">
          <button 
            onClick={() => setShowDownloadMenu(!showDownloadMenu)}
            className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors relative"
            aria-label="download"
          >
            <Download className="w-5 h-5" />
          </button>

          {showDownloadMenu && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50 overflow-hidden">
              <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-4 py-3">
                <h3 className="font-semibold">Download Reports</h3>
              </div>
              <div className="py-2">
                <button
                  onClick={() => handleDownload('sales')}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700"
                >
                  <FileText className="w-4 h-4 text-teal-600" />
                  <div>
                    <div className="font-medium text-sm">Sales Report</div>
                    <div className="text-xs text-gray-500">Download today's sales</div>
                  </div>
                </button>
                <button
                  onClick={() => handleDownload('inventory')}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700"
                >
                  <Package className="w-4 h-4 text-teal-600" />
                  <div>
                    <div className="font-medium text-sm">Inventory Report</div>
                    <div className="text-xs text-gray-500">Current stock levels</div>
                  </div>
                </button>
                <button
                  onClick={() => handleDownload('financial')}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700"
                >
                  <DollarSign className="w-4 h-4 text-teal-600" />
                  <div>
                    <div className="font-medium text-sm">Financial Report</div>
                    <div className="text-xs text-gray-500">Profit & loss summary</div>
                  </div>
                </button>
                <button
                  onClick={() => handleDownload('customer')}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700"
                >
                  <User className="w-4 h-4 text-teal-600" />
                  <div>
                    <div className="font-medium text-sm">Customer Report</div>
                    <div className="text-xs text-gray-500">Customer database export</div>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Notifications */}
        <div ref={notificationRef} className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors relative"
            aria-label="notifications"
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {unreadCount}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50 overflow-hidden">
              <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-4 py-3 flex items-center justify-between">
                <h3 className="font-semibold">Notifications</h3>
                {unreadCount > 0 && (
                  <button
                    onClick={handleMarkAllAsRead}
                    className="text-xs bg-white/20 hover:bg-white/30 px-2 py-1 rounded transition-colors"
                  >
                    Mark all as read
                  </button>
                )}
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    <Bell className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                    <p>No notifications</p>
                  </div>
                ) : (
                  notifications.map((notification) => {
                    const Icon = notification.icon;
                    return (
                      <div
                        key={notification.id}
                        className={`px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                          !notification.read ? 'bg-teal-50/50' : ''
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-lg ${
                            notification.type === 'order' ? 'bg-blue-100' :
                            notification.type === 'stock' ? 'bg-orange-100' :
                            notification.type === 'payment' ? 'bg-green-100' :
                            'bg-purple-100'
                          }`}>
                            <Icon className={`w-4 h-4 ${
                              notification.type === 'order' ? 'text-blue-600' :
                              notification.type === 'stock' ? 'text-orange-600' :
                              notification.type === 'payment' ? 'text-green-600' :
                              'text-purple-600'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-semibold text-sm text-gray-900">
                                  {notification.title}
                                </h4>
                                <p className="text-xs text-gray-600 mt-1">
                                  {notification.message}
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                  {notification.time}
                                </p>
                              </div>
                              <div className="flex gap-1">
                                {!notification.read && (
                                  <button
                                    onClick={() => handleMarkAsRead(notification.id)}
                                    className="text-teal-600 hover:text-teal-700 text-xs p-1"
                                    title="Mark as read"
                                  >
                                    ✓
                                  </button>
                                )}
                                <button
                                  onClick={() => handleDeleteNotification(notification.id)}
                                  className="text-red-500 hover:text-red-700 p-1"
                                  title="Delete"
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
              {notifications.length > 0 && (
                <div className="bg-gray-50 px-4 py-2 text-center">
                  <button className="text-sm text-teal-600 hover:text-teal-700 font-medium">
                    View All Notifications
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Profile Menu */}
        <div ref={profileRef} className="relative">
          <button 
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 rounded-lg px-3 py-2 transition-colors"
          >
            <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center font-semibold">
              N
            </div>
            <ChevronDown className="w-4 h-4" />
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-50 overflow-hidden">
              <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-4 py-3">
                <div className="font-semibold">Nadeesha</div>
                <div className="text-xs text-teal-100">admin@pos.com</div>
              </div>
              <div className="py-2">
                <button
                  onClick={() => handleProfileAction('profile')}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700"
                >
                  <User className="w-4 h-4 text-teal-600" />
                  <span className="text-sm">My Profile</span>
                </button>
                <button
                  onClick={() => handleProfileAction('settings')}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700"
                >
                  <Settings className="w-4 h-4 text-teal-600" />
                  <span className="text-sm">Settings</span>
                </button>
                <div className="border-t border-gray-200 my-2"></div>
                <button
                  onClick={() => handleProfileAction('logout')}
                  className="w-full px-4 py-2 text-left hover:bg-red-50 flex items-center gap-3 text-red-600"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm">Sign Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
