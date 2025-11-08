import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Eye, Trash2, AlertCircle } from 'lucide-react';
import { purchaseService } from '../../services/apiService';

const ListPurchase = () => {
  const navigate = useNavigate();
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  // Fetch purchases on component mount
  useEffect(() => {
    fetchPurchases();
  }, []);

  const fetchPurchases = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await purchaseService.getAll();
      setPurchases(data);
    } catch (err) {
      console.error('Error fetching purchases:', err);
      setError('Failed to load purchases. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this purchase?')) {
      try {
        await purchaseService.delete(id);
        alert('Purchase deleted successfully');
        fetchPurchases(); // Refresh list
      } catch (err) {
        console.error('Error deleting purchase:', err);
        alert('Failed to delete purchase: ' + (err.response?.data?.message || err.message));
      }
    }
  };

  const handleView = (purchase) => {
    // TODO: Implement view modal or navigate to detail page
    console.log('View purchase:', purchase);
    alert('View functionality coming soon!');
  };

  // Filter purchases based on search and date
  const filteredPurchases = purchases.filter(purchase => {
    const matchesSearch = 
      purchase.purchaseNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      purchase.supplier?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      purchase.referenceNo?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDate = !dateFilter || 
      new Date(purchase.purchaseDate).toISOString().split('T')[0] === dateFilter;
    
    return matchesSearch && matchesDate;
  });

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const formatCurrency = (amount) => {
    if (!amount) return '₨ 0.00';
    return `₨ ${parseFloat(amount).toFixed(2)}`;
  };

  const getStatusBadge = (status) => {
    const statusColors = {
      RECEIVED: 'bg-green-100 text-green-800',
      PENDING: 'bg-yellow-100 text-yellow-800',
      ORDERED: 'bg-blue-100 text-blue-800',
      CANCELLED: 'bg-red-100 text-red-800'
    };
    
    return (
      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[status] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  const getPaymentStatus = (total, paid) => {
    const totalAmount = parseFloat(total) || 0;
    const paidAmount = parseFloat(paid) || 0;
    
    if (paidAmount === 0) return { label: 'Unpaid', color: 'bg-red-100 text-red-800' };
    if (paidAmount >= totalAmount) return { label: 'Paid', color: 'bg-green-100 text-green-800' };
    return { label: 'Partial', color: 'bg-yellow-100 text-yellow-800' };
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Purchase List</h1>
        <p className="text-gray-600 mt-2">View all purchase orders</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search purchases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <button 
            onClick={() => navigate('/purchases/add')}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add Purchase</span>
          </button>
        </div>
        
        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin w-8 h-8 border-4 border-teal-600 border-t-transparent rounded-full"></div>
            <span className="ml-3 text-gray-600">Loading purchases...</span>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
            <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
            <span className="text-red-700">{error}</span>
            <button 
              onClick={fetchPurchases}
              className="ml-auto text-red-600 hover:text-red-800 font-semibold"
            >
              Retry
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredPurchases.length === 0 && (
          <div className="text-center py-12">
            <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">No purchases found</h3>
            <p className="text-gray-500 mb-4">
              {searchTerm || dateFilter ? 'Try adjusting your filters' : 'Get started by adding your first purchase'}
            </p>
            <button
              onClick={() => navigate('/purchases/add')}
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Add First Purchase
            </button>
          </div>
        )}

        {/* Purchases Table */}
        {!loading && !error && filteredPurchases.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purchase No</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paid</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPurchases.map((purchase) => {
                  const paymentStatus = getPaymentStatus(purchase.total, purchase.paidAmount);
                  const dueAmount = parseFloat(purchase.paymentDue || 0);
                  
                  return (
                    <tr key={purchase.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {formatDate(purchase.purchaseDate)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {purchase.purchaseNumber}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {purchase.supplier?.name || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {purchase.referenceNo || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        {formatCurrency(purchase.total)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                        {formatCurrency(purchase.paidAmount)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">
                        {formatCurrency(dueAmount)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(purchase.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${paymentStatus.color}`}>
                          {paymentStatus.label}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button 
                          onClick={() => handleView(purchase)}
                          className="text-teal-600 hover:text-teal-900 mr-3"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4 inline" />
                        </button>
                        <button 
                          onClick={() => handleDelete(purchase.id)}
                          className="text-red-600 hover:text-red-900"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4 inline" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Summary Footer */}
        {!loading && !error && filteredPurchases.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">
                Showing <span className="font-semibold">{filteredPurchases.length}</span> of <span className="font-semibold">{purchases.length}</span> purchases
              </span>
              <div className="flex gap-4">
                <span className="text-gray-600">
                  Total Amount: <span className="font-semibold text-gray-900">
                    {formatCurrency(filteredPurchases.reduce((sum, p) => sum + parseFloat(p.total || 0), 0))}
                  </span>
                </span>
                <span className="text-gray-600">
                  Total Paid: <span className="font-semibold text-green-600">
                    {formatCurrency(filteredPurchases.reduce((sum, p) => sum + parseFloat(p.paidAmount || 0), 0))}
                  </span>
                </span>
                <span className="text-gray-600">
                  Total Due: <span className="font-semibold text-red-600">
                    {formatCurrency(filteredPurchases.reduce((sum, p) => sum + parseFloat(p.paymentDue || 0), 0))}
                  </span>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListPurchase;
