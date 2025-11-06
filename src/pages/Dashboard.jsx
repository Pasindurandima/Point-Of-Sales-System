import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  Users, TrendingUp, Grid, Bell, LogOut, Calendar, Database, 
  FileText, Wallet, RotateCcw, DollarSign, Package
} from 'lucide-react';
import { dashboardService, saleService, productService, purchaseService, expenseService } from '../services/apiService';

const Dashboard = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [statistics, setStatistics] = useState({
    totalSales: 0,
    netProfit: 0,
    invoiceDue: 0,
    totalPurchase: 0,
    totalExpense: 0,
    productCount: 0,
    customerCount: 0,
    supplierCount: 0
  });
  const [salesData, setSalesData] = useState([
    { month: 'Jan-2025', sales: 0 },
    { month: 'Feb-2025', sales: 0 },
    { month: 'Mar-2025', sales: 0 },
    { month: 'Apr-2025', sales: 0 },
    { month: 'May-2025', sales: 0 },
    { month: 'Jun-2025', sales: 0 },
    { month: 'Jul-2025', sales: 0 },
    { month: 'Aug-2025', sales: 0 },
    { month: 'Sep-2025', sales: 0 },
    { month: 'Oct-2025', sales: 0 },
    { month: 'Nov-2025', sales: 0 },
    { month: 'Dec-2025', sales: 0 },
  ]);
  const [recentSales, setRecentSales] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      console.log('Fetching dashboard data from backend...');
      
      // Fetch all data in parallel with better error handling
      const [sales, products, purchases, expenses] = await Promise.all([
        saleService.getAll().catch((err) => {
          console.error('Error fetching sales:', err.message);
          return [];
        }),
        productService.getAll().catch((err) => {
          console.error('Error fetching products:', err.message);
          return [];
        }),
        purchaseService.getAll().catch((err) => {
          console.error('Error fetching purchases:', err.message);
          return [];
        }),
        expenseService.getAll().catch((err) => {
          console.error('Error fetching expenses:', err.message);
          return [];
        })
      ]);

      console.log('Data received:', { 
        sales: sales.length, 
        products: products.length, 
        purchases: purchases.length, 
        expenses: expenses.length 
      });

      // Calculate statistics
      const totalSales = sales.reduce((sum, sale) => sum + (sale.totalAmount || 0), 0);
      const totalPurchase = purchases.reduce((sum, purchase) => sum + (purchase.totalAmount || 0), 0);
      const totalExpense = expenses.reduce((sum, expense) => sum + (expense.amount || 0), 0);
      const netProfit = totalSales - totalPurchase - totalExpense;
      const invoiceDue = sales
        .filter(sale => sale.paymentStatus === 'PENDING' || sale.paymentStatus === 'PARTIAL')
        .reduce((sum, sale) => sum + ((sale.totalAmount || 0) - (sale.paidAmount || 0)), 0);

      const newStatistics = {
        totalSales,
        netProfit,
        invoiceDue,
        totalPurchase,
        totalExpense,
        productCount: products.length,
        customerCount: 0,
        supplierCount: 0
      };

      console.log('Calculated statistics:', newStatistics);
      setStatistics(newStatistics);

      // Process sales data for chart (group by month)
      const monthlySales = {};
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      
      sales.forEach(sale => {
        if (sale.saleDate) {
          const date = new Date(sale.saleDate);
          const monthKey = `${months[date.getMonth()]}-${date.getFullYear()}`;
          monthlySales[monthKey] = (monthlySales[monthKey] || 0) + (sale.totalAmount || 0);
        }
      });

      // Update sales data for current year
      const currentYear = new Date().getFullYear();
      const updatedSalesData = months.map(month => ({
        month: `${month}-${currentYear}`,
        sales: monthlySales[`${month}-${currentYear}`] || 0
      }));

      setSalesData(updatedSalesData);

      // Get recent sales (last 10)
      const sortedSales = [...sales]
        .sort((a, b) => new Date(b.saleDate) - new Date(a.saleDate))
        .slice(0, 10);
      setRecentSales(sortedSales);

      console.log('Dashboard data updated successfully');

    } catch (error) {
      console.error('Critical error fetching dashboard data:', error);
      // Keep loading as false to show the dashboard even with errors
    } finally {
      setLoading(false);
    }
  };

  const dashboardCards = [
    { 
      title: 'TOTAL SALES', 
      value: `Rs ${statistics.totalSales.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, 
      icon: FileText, 
      color: 'bg-green-600',
      iconBg: 'bg-green-100'
    },
    { 
      title: 'NET PROFIT', 
      value: `Rs ${statistics.netProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, 
      icon: Database, 
      color: statistics.netProfit >= 0 ? 'bg-purple-600' : 'bg-red-600',
      iconBg: statistics.netProfit >= 0 ? 'bg-purple-100' : 'bg-red-100',
      badge: true
    },
    { 
      title: 'INVOICE DUE', 
      value: `Rs ${statistics.invoiceDue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, 
      icon: FileText, 
      color: 'bg-orange-600',
      iconBg: 'bg-orange-100'
    },
    { 
      title: 'TOTAL PURCHASE', 
      value: `Rs ${statistics.totalPurchase.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, 
      icon: Package, 
      color: 'bg-blue-600',
      iconBg: 'bg-blue-100'
    },
    { 
      title: 'PRODUCT COUNT', 
      value: statistics.productCount, 
      icon: Package, 
      color: 'bg-teal-600',
      iconBg: 'bg-teal-100'
    },
    { 
      title: 'EXPENSE', 
      value: `Rs ${statistics.totalExpense.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, 
      icon: DollarSign, 
      color: 'bg-red-600',
      iconBg: 'bg-red-100'
    },
  ];

  const returnCards = [
    {
      title: 'TOTAL PURCHASE RETURN',
      value: 'Rs 0.00',
      icon: RotateCcw,
      color: 'bg-red-600',
      iconBg: 'bg-red-100',
      details: [
        'Total Purchase Return: Rs 0.00',
        'Total Purchase Return Paid: Rs 0.00'
      ]
    },
    {
      title: 'TOTAL SELL RETURN',
      value: 'Rs 0.00',
      icon: RotateCcw,
      color: 'bg-red-600',
      iconBg: 'bg-red-100',
      details: [
        'Total Sell Return: Rs 0.00',
        'Total Sell Return Paid: Rs 0.00'
      ]
    },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-300 rounded shadow-lg">
          <p className="text-sm font-semibold">{payload[0].payload.month}</p>
          <p className="text-sm text-blue-600">
            SecU Engineering (BL0001): <span className="font-bold">Rs {payload[0].value.toLocaleString()}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-teal-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-semibold">Loading Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto bg-gray-100">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 shadow-md">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h2 className="text-white text-2xl font-semibold">Welcome Nadeesha,</h2>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              <Users className="w-5 h-5 text-white" />
            </button>
            <button className="p-2 bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors">
              <TrendingUp className="w-5 h-5 text-white" />
            </button>
            <button className="p-2 bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors">
              <Grid className="w-5 h-5 text-white" />
            </button>
            <button 
              onClick={() => navigate('/sell/pos')}
              className="p-2 bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors"
            >
              <span className="text-white font-semibold px-1">POS</span>
            </button>
            <button className="p-2 bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors">
              <FileText className="w-5 h-5 text-white" />
            </button>
            <button className="p-2 bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors">
              <Bell className="w-5 h-5 text-white" />
            </button>
            <button className="p-2 bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors">
              <LogOut className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-6">
        {/* Filter Section */}
        <div className="mb-6">
          <div className="max-w-sm ml-auto">
            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Filter by date</span>
            </button>
          </div>
        </div>

        {/* Dashboard Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {dashboardCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center justify-between">
                <div className={`${card.iconBg} p-3 rounded-lg`}>
                  <card.icon className={`w-8 h-8 ${card.color.replace('bg-', 'text-')}`} />
                </div>
                {card.badge && (
                  <span className="bg-teal-600 text-white text-xs px-2 py-1 rounded-full">i</span>
                )}
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm font-semibold uppercase">{card.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{card.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Return Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {returnCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${card.iconBg} p-3 rounded-lg`}>
                  <card.icon className={`w-8 h-8 ${card.color.replace('bg-', 'text-')}`} />
                </div>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-semibold uppercase">{card.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{card.value}</p>
                <div className="mt-4 space-y-1">
                  {card.details.map((detail, i) => (
                    <p key={i} className="text-sm text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sales Chart */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white bg-green-600 px-4 py-2 rounded-lg">
              Sales Current Financial Year
            </h3>
          </div>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  label={{ value: 'Total Sales (LKR)', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line 
                  type="monotone" 
                  dataKey="sales" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;