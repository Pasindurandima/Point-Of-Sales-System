import React, { useState } from 'react';
import { Plus, Edit, Trash2, Mail, MessageSquare, Bell, ShoppingBag, CreditCard, Truck, Clock, Package, UserPlus, Key } from 'lucide-react';

const NotificationTemplates = () => {
  const [activeCategory, setActiveCategory] = useState('order');
  const [activeType, setActiveType] = useState('email');
  const [showAddModal, setShowAddModal] = useState(false);

  // Template data by category
  const templateData = {
    order: {
      title: 'Order Notifications',
      icon: ShoppingBag,
      variables: [
        '{customer_name} - Customer name',
        '{order_number} - Order number',
        '{order_total} - Order total amount',
        '{order_date} - Order date',
        '{order_status} - Order status',
        '{business_name} - Your business name'
      ],
      templates: [
        {
          name: 'Order Confirmation',
          trigger: 'Sent when order is placed',
          status: 'Active',
          subject: 'Your order #{order_number} has been confirmed',
          message: 'Dear {customer_name}, Thank you for your order. Your order #{order_number} totaling ${order_total} has been confirmed and will be processed shortly.'
        },
        {
          name: 'Order Shipped',
          trigger: 'Sent when order is shipped',
          status: 'Active',
          subject: 'Your order #{order_number} has been shipped',
          message: 'Good news! Your order #{order_number} has been shipped. Expected delivery: {delivery_date}.'
        },
        {
          name: 'Order Delivered',
          trigger: 'Sent when order is delivered',
          status: 'Inactive',
          subject: 'Your order #{order_number} has been delivered',
          message: 'Your order #{order_number} has been delivered successfully. Thank you for shopping with us!'
        },
        {
          name: 'Order Cancelled',
          trigger: 'Sent when order is cancelled',
          status: 'Active',
          subject: 'Order #{order_number} has been cancelled',
          message: 'Your order #{order_number} has been cancelled as requested. Refund will be processed within 5-7 business days.'
        }
      ]
    },
    payment: {
      title: 'Payment Confirmations',
      icon: CreditCard,
      variables: [
        '{customer_name} - Customer name',
        '{payment_amount} - Payment amount',
        '{payment_method} - Payment method',
        '{transaction_id} - Transaction ID',
        '{payment_date} - Payment date',
        '{invoice_number} - Invoice number'
      ],
      templates: [
        {
          name: 'Payment Received',
          trigger: 'Sent when payment is confirmed',
          status: 'Active',
          subject: 'Payment confirmation for ${payment_amount}',
          message: 'Dear {customer_name}, We have received your payment of ${payment_amount} via {payment_method}. Transaction ID: {transaction_id}.'
        },
        {
          name: 'Payment Failed',
          trigger: 'Sent when payment fails',
          status: 'Active',
          subject: 'Payment failed for order #{order_number}',
          message: 'Your payment of ${payment_amount} could not be processed. Please try again or contact support.'
        },
        {
          name: 'Refund Processed',
          trigger: 'Sent when refund is completed',
          status: 'Active',
          subject: 'Refund processed for ${payment_amount}',
          message: 'Your refund of ${payment_amount} has been processed and will reflect in your account within 5-7 business days.'
        }
      ]
    },
    shipment: {
      title: 'Shipment Updates',
      icon: Truck,
      variables: [
        '{customer_name} - Customer name',
        '{tracking_number} - Tracking number',
        '{carrier} - Shipping carrier',
        '{shipment_date} - Shipment date',
        '{delivery_date} - Expected delivery',
        '{order_number} - Order number'
      ],
      templates: [
        {
          name: 'Shipment Created',
          trigger: 'Sent when shipment is created',
          status: 'Active',
          subject: 'Your order is being prepared for shipment',
          message: 'Dear {customer_name}, Your order #{order_number} is being prepared for shipment. You will receive tracking information soon.'
        },
        {
          name: 'In Transit',
          trigger: 'Sent when package is in transit',
          status: 'Active',
          subject: 'Your package is on the way',
          message: 'Your package is in transit. Track your shipment: {tracking_number}. Carrier: {carrier}.'
        },
        {
          name: 'Out for Delivery',
          trigger: 'Sent when out for delivery',
          status: 'Active',
          subject: 'Your package is out for delivery',
          message: 'Great news! Your package is out for delivery and will arrive today.'
        }
      ]
    },
    reminder: {
      title: 'Customer Reminders',
      icon: Clock,
      variables: [
        '{customer_name} - Customer name',
        '{cart_items} - Cart items',
        '{cart_total} - Cart total',
        '{reminder_date} - Reminder date',
        '{action_link} - Action link'
      ],
      templates: [
        {
          name: 'Abandoned Cart',
          trigger: 'Sent after 24 hours of cart abandonment',
          status: 'Active',
          subject: 'You left items in your cart',
          message: 'Hi {customer_name}, You left {cart_items} items in your cart worth ${cart_total}. Complete your purchase now!'
        },
        {
          name: 'Payment Due',
          trigger: 'Sent before payment due date',
          status: 'Active',
          subject: 'Payment reminder for invoice #{invoice_number}',
          message: 'This is a reminder that payment of ${amount} is due on {due_date}.'
        },
        {
          name: 'Subscription Renewal',
          trigger: 'Sent before subscription renewal',
          status: 'Inactive',
          subject: 'Your subscription renews soon',
          message: 'Your subscription will renew on {renewal_date} for ${amount}.'
        }
      ]
    },
    stock: {
      title: 'Low Stock Alerts',
      icon: Package,
      variables: [
        '{product_name} - Product name',
        '{current_stock} - Current stock level',
        '{min_stock} - Minimum stock level',
        '{product_code} - Product code',
        '{category} - Product category'
      ],
      templates: [
        {
          name: 'Low Stock Alert',
          trigger: 'Sent when stock falls below minimum',
          status: 'Active',
          subject: 'Low stock alert: {product_name}',
          message: 'Product {product_name} (Code: {product_code}) is running low. Current stock: {current_stock}. Minimum required: {min_stock}.'
        },
        {
          name: 'Out of Stock',
          trigger: 'Sent when product is out of stock',
          status: 'Active',
          subject: 'Out of stock: {product_name}',
          message: 'Product {product_name} is now out of stock. Please reorder immediately.'
        },
        {
          name: 'Stock Replenished',
          trigger: 'Sent when stock is replenished',
          status: 'Inactive',
          subject: 'Stock replenished: {product_name}',
          message: 'Product {product_name} has been restocked. New stock level: {current_stock}.'
        }
      ]
    },
    welcome: {
      title: 'Welcome Messages',
      icon: UserPlus,
      variables: [
        '{customer_name} - Customer name',
        '{email} - Customer email',
        '{registration_date} - Registration date',
        '{welcome_offer} - Welcome offer code',
        '{business_name} - Your business name'
      ],
      templates: [
        {
          name: 'New Customer Welcome',
          trigger: 'Sent when customer registers',
          status: 'Active',
          subject: 'Welcome to {business_name}!',
          message: 'Dear {customer_name}, Welcome to {business_name}! We\'re excited to have you. Use code {welcome_offer} for 10% off your first purchase.'
        },
        {
          name: 'Email Verification',
          trigger: 'Sent after registration',
          status: 'Active',
          subject: 'Verify your email address',
          message: 'Please verify your email address by clicking the link: {verification_link}'
        },
        {
          name: 'Account Activated',
          trigger: 'Sent when account is activated',
          status: 'Active',
          subject: 'Your account is now active',
          message: 'Congratulations {customer_name}! Your account has been activated. Start shopping now!'
        }
      ]
    },
    password: {
      title: 'Password Reset',
      icon: Key,
      variables: [
        '{customer_name} - Customer name',
        '{reset_link} - Password reset link',
        '{expiry_time} - Link expiry time',
        '{request_ip} - Request IP address',
        '{request_time} - Request time'
      ],
      templates: [
        {
          name: 'Password Reset Request',
          trigger: 'Sent when reset is requested',
          status: 'Active',
          subject: 'Password reset request',
          message: 'Hi {customer_name}, Click this link to reset your password: {reset_link}. Link expires in {expiry_time}.'
        },
        {
          name: 'Password Changed',
          trigger: 'Sent when password is changed',
          status: 'Active',
          subject: 'Your password has been changed',
          message: 'Your password was successfully changed. If you didn\'t make this change, contact us immediately.'
        },
        {
          name: 'Suspicious Login',
          trigger: 'Sent when unusual login detected',
          status: 'Inactive',
          subject: 'Unusual login activity detected',
          message: 'We detected a login from {request_ip} at {request_time}. If this wasn\'t you, change your password immediately.'
        }
      ]
    }
  };

  const categories = [
    { id: 'order', label: 'Order Notifications', icon: ShoppingBag },
    { id: 'payment', label: 'Payment Confirmations', icon: CreditCard },
    { id: 'shipment', label: 'Shipment Updates', icon: Truck },
    { id: 'reminder', label: 'Customer Reminders', icon: Clock },
    { id: 'stock', label: 'Low Stock Alerts', icon: Package },
    { id: 'welcome', label: 'Welcome Messages', icon: UserPlus },
    { id: 'password', label: 'Password Reset', icon: Key }
  ];

  const currentData = templateData[activeCategory];
  const CategoryIcon = currentData.icon;

  const handleAddTemplate = () => {
    setShowAddModal(true);
  };

  const handleEditTemplate = (template) => {
    console.log('Edit template:', template);
  };

  const handleDeleteTemplate = (template) => {
    console.log('Delete template:', template);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Notification Templates</h1>
        <p className="text-gray-600 mt-2">Create and manage email/SMS notification templates</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Template Categories</h2>
          <div className="space-y-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors flex items-center gap-3 ${
                    activeCategory === category.id
                      ? 'bg-teal-50 text-teal-700 border-l-4 border-teal-600'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {category.label}
                </button>
              );
            })}
          </div>
          <button
            onClick={handleAddTemplate}
            className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            New Template
          </button>
        </div>

        {/* Templates Content */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <CategoryIcon className="w-6 h-6 text-teal-600" />
              <h2 className="text-lg font-semibold text-gray-800">{currentData.title}</h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveType('email')}
                className={`px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${
                  activeType === 'email'
                    ? 'bg-teal-600 text-white'
                    : 'border border-gray-300 hover:bg-gray-50'
                }`}
              >
                <Mail className="w-4 h-4" />
                Email
              </button>
              <button
                onClick={() => setActiveType('sms')}
                className={`px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${
                  activeType === 'sms'
                    ? 'bg-teal-600 text-white'
                    : 'border border-gray-300 hover:bg-gray-50'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                SMS
              </button>
            </div>
          </div>

          {/* Templates List */}
          <div className="space-y-4 mb-6">
            {currentData.templates.map((template, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{template.name}</h3>
                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <Bell className="w-3 h-3" />
                      {template.trigger}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        template.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {template.status}
                    </span>
                    <button
                      onClick={() => handleEditTemplate(template)}
                      className="text-blue-600 hover:text-blue-900 p-1"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteTemplate(template)}
                      className="text-red-600 hover:text-red-900 p-1"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded text-sm text-gray-700 mt-3">
                  <div className="mb-2">
                    <strong className="text-gray-900">Subject:</strong>{' '}
                    <span className="text-gray-700">{template.subject}</span>
                  </div>
                  <div>
                    <strong className="text-gray-900">Message:</strong>{' '}
                    <span className="text-gray-700">{template.message}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Available Variables */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <Package className="w-4 h-4" />
              Available Variables:
            </h4>
            <div className="text-xs text-blue-700 grid grid-cols-1 md:grid-cols-2 gap-2">
              {currentData.variables.map((variable, index) => (
                <span key={index} className="flex items-start gap-1">
                  <span className="text-blue-500">•</span>
                  {variable}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add Template Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6 rounded-t-lg">
              <h2 className="text-xl font-bold">Add New Template</h2>
              <p className="text-teal-100 text-sm mt-1">Create a new notification template</p>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Template Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Enter template name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notification Type
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="type" value="email" defaultChecked />
                      <Mail className="w-4 h-4" />
                      Email
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="type" value="sms" />
                      <MessageSquare className="w-4 h-4" />
                      SMS
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Trigger Event
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="When should this template be sent?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Email subject or SMS title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message Content
                  </label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Enter your message here. Use variables like {customer_name}"
                  ></textarea>
                </div>

                <div>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-700">Activate template immediately</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6 pt-4 border-t">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    console.log('Save template');
                    setShowAddModal(false);
                  }}
                  className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Create Template
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationTemplates;
