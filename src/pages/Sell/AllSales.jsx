import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Eye, Printer, Trash2, Search, ChevronDown, Edit, Truck, FileText, Package, DollarSign, RotateCcw, Link, Bell } from 'lucide-react';
import { saleService } from '../../services/apiService';

const AllSales = () => {
  const navigate = useNavigate();
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    fetchSales();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (openDropdown !== null) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [openDropdown]);

  const fetchSales = async () => {
    try {
      setLoading(true);
      const result = await saleService.getAll();
      setSales(result || []);
    } catch (error) {
      console.error('Error fetching sales:', error);
      setSales([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAddSale = () => {
    navigate('/sell/pos');
  };

  const handleDelete = async (saleId) => {
    if (window.confirm('Are you sure you want to delete this sale?')) {
      try {
        await saleService.delete(saleId);
        fetchSales(); // Refresh the list
      } catch (error) {
        console.error('Error deleting sale:', error);
        alert('Failed to delete sale');
      }
    }
  };

  // Filter sales based on search and date
  const filteredSales = sales.filter(sale => {
    const matchesSearch = 
      sale.invoiceNumber?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sale.customerName?.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDate = !dateFilter || 
      (sale.saleDate && new Date(sale.saleDate).toISOString().split('T')[0] === dateFilter);
    
    return matchesSearch && matchesDate;
  });

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">All Sales</h1>
        <p className="text-gray-600 mt-2">View all sales transactions - Total: {sales.length}</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by invoice or customer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            {(searchQuery || dateFilter) && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setDateFilter('');
                }}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
              >
                Clear Filters
              </button>
            )}
          </div>
          <button 
            onClick={handleAddSale}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>New Sale (POS)</span>
          </button>
        </div>
        
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-teal-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading sales...</p>
          </div>
        ) : filteredSales.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <p className="text-lg font-semibold">No sales found</p>
            <p className="text-sm mt-2">
              {searchQuery || dateFilter ? 'Try adjusting your filters' : 'Start by creating a new sale'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-24">Actions</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice No.</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Number</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Status</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Method</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Total Paid</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Sell Due</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Sell Return Due</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Shipping Status</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Total Items</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Added By</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSales
                  .sort((a, b) => new Date(b.saleDate) - new Date(a.saleDate))
                  .map((sale) => {
                    const dueAmount = (sale.totalAmount || 0) - (sale.paidAmount || 0);
                    return (
                      <tr key={sale.id} className="hover:bg-gray-50 transition-colors">
                        {/* Actions Dropdown */}
                        <td className="px-2 py-4 whitespace-nowrap text-center relative">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setOpenDropdown(openDropdown === sale.id ? null : sale.id);
                            }}
                            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg transition-colors flex items-center space-x-1 mx-auto text-xs"
                          >
                            <span className="font-medium">Actions</span>
                            <ChevronDown className="w-3 h-3" />
                          </button>
                          
                          {openDropdown === sale.id && (
                            <div 
                              onClick={(e) => e.stopPropagation()}
                              className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-50 border border-gray-200"
                            >
                              <div className="py-1">
                                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                                  <Eye className="w-4 h-4 mr-2" />
                                  View
                                </button>
                                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                                  <Edit className="w-4 h-4 mr-2" />
                                  Edit
                                </button>
                                <button 
                                  onClick={() => {
                                    setOpenDropdown(null);
                                    handleDelete(sale.id);
                                  }}
                                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center"
                                >
                                  <Trash2 className="w-4 h-4 mr-2" />
                                  Delete
                                </button>
                                <hr className="my-1" />
                                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                                  <Truck className="w-4 h-4 mr-2" />
                                  Edit Shipping
                                </button>
                                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                                  <Printer className="w-4 h-4 mr-2" />
                                  Print Invoice
                                </button>
                                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                                  <Package className="w-4 h-4 mr-2" />
                                  Packing Slip
                                </button>
                                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                                  <FileText className="w-4 h-4 mr-2" />
                                  Delivery Note
                                </button>
                                <hr className="my-1" />
                                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                                  <DollarSign className="w-4 h-4 mr-2" />
                                  View Payments
                                </button>
                                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                                  <RotateCcw className="w-4 h-4 mr-2" />
                                  Sell Return
                                </button>
                                <hr className="my-1" />
                                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                                  <Link className="w-4 h-4 mr-2" />
                                  Invoice URL
                                </button>
                                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                                  <Bell className="w-4 h-4 mr-2" />
                                  New Sale Notification
                                </button>
                              </div>
                            </div>
                          )}
                        </td>

                        {/* Date */}
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                          {sale.saleDate ? new Date(sale.saleDate).toLocaleDateString() : 'N/A'}
                          <br />
                          <span className="text-xs text-gray-400">
                            {sale.saleDate ? new Date(sale.saleDate).toLocaleTimeString() : ''}
                          </span>
                        </td>

                        {/* Invoice No. */}
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-teal-600">
                          {sale.invoiceNumber || `INV-${sale.id}`}
                        </td>

                        {/* Customer Name */}
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                          {sale.customerName || 'Walk-in Customer'}
                        </td>

                        {/* Contact Number */}
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">
                          {sale.customerPhone || sale.contactNumber || '-'}
                        </td>

                        {/* Location */}
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">
                          {sale.customerAddress || sale.location || '-'}
                        </td>

                        {/* Payment Status */}
                        <td className="px-4 py-4 whitespace-nowrap text-center">
                          <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            sale.paymentStatus === 'PAID' 
                              ? 'bg-green-100 text-green-800'
                              : sale.paymentStatus === 'PARTIAL'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {sale.paymentStatus || 'PENDING'}
                          </span>
                        </td>

                        {/* Payment Method */}
                        <td className="px-4 py-4 whitespace-nowrap text-center">
                          <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            sale.paymentMethod === 'CASH'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-purple-100 text-purple-800'
                          }`}>
                            {sale.paymentMethod || 'CASH'}
                          </span>
                        </td>

                        {/* Total Amount */}
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-right font-semibold text-gray-900">
                          Rs {(sale.totalAmount || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>

                        {/* Total Paid */}
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-right text-gray-600">
                          Rs {(sale.paidAmount || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>

                        {/* Sell Due */}
                        <td className={`px-4 py-4 whitespace-nowrap text-sm text-right font-semibold ${dueAmount > 0 ? 'text-red-600' : 'text-green-600'}`}>
                          Rs {dueAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>

                        {/* Sell Return Due */}
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-right text-gray-600">
                          Rs {(sale.returnDue || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>

                        {/* Shipping Status */}
                        <td className="px-4 py-4 whitespace-nowrap text-center">
                          <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            sale.shippingStatus === 'DELIVERED'
                              ? 'bg-green-100 text-green-800'
                              : sale.shippingStatus === 'SHIPPED'
                              ? 'bg-blue-100 text-blue-800'
                              : sale.shippingStatus === 'PROCESSING'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {sale.shippingStatus || 'N/A'}
                          </span>
                        </td>

                        {/* Total Items */}
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                          {sale.totalItems || sale.itemCount || 0}
                        </td>

                        {/* Added By */}
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">
                          {sale.addedBy || sale.createdBy || 'Admin'}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllSales;
