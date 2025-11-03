import React from 'react';

const PaymentAccountReport = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Payment Account Report</h1>
        <p className="text-gray-600 mt-2">Detailed analysis of payment account transactions and balances</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>All Accounts</option>
              <option>Business Account</option>
              <option>Savings Account</option>
              <option>Cash Register</option>
              <option>Petty Cash</option>
            </select>
            <input
              type="date"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="From Date"
            />
            <input
              type="date"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="To Date"
            />
          </div>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">
            Generate Report
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-6 rounded-lg shadow-md">
          <div className="text-sm opacity-90 mb-2">Opening Balance</div>
          <div className="text-2xl font-bold">$40,050.00</div>
        </div>
        
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-md">
          <div className="text-sm opacity-90 mb-2">Total Receipts</div>
          <div className="text-2xl font-bold">$125,800.00</div>
        </div>
        
        <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-lg shadow-md">
          <div className="text-sm opacity-90 mb-2">Total Payments</div>
          <div className="text-2xl font-bold">$120,000.00</div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-md">
          <div className="text-sm opacity-90 mb-2">Closing Balance</div>
          <div className="text-2xl font-bold">$45,850.00</div>
        </div>
      </div>
      
      {/* Transaction Details */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Transaction Details</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Debit</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Credit</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="bg-gray-50">
                <td colSpan="8" className="px-6 py-2 text-sm font-semibold text-gray-700">Business Account - ABC Bank</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2025-11-01</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Business Account</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Opening Balance</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">-</td>
                <td className="px-6 py-4 text-sm text-gray-600">Opening balance for period</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">-</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">-</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">$20,000.00</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2025-11-02</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Business Account</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Receipt</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">INV-1001</td>
                <td className="px-6 py-4 text-sm text-gray-600">Customer payment received</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-green-600">$15,500.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">-</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">$35,500.00</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2025-11-03</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Business Account</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Payment</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">PUR-501</td>
                <td className="px-6 py-4 text-sm text-gray-600">Supplier payment</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">-</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-red-600">$8,000.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">$27,500.00</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2025-11-04</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Business Account</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Payment</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">EXP-001</td>
                <td className="px-6 py-4 text-sm text-gray-600">Utility bill payment</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">-</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-red-600">$2,000.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">$25,500.00</td>
              </tr>

              <tr className="bg-gray-50">
                <td colSpan="8" className="px-6 py-2 text-sm font-semibold text-gray-700">Cash Register - Main Store</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2025-11-01</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Cash Register</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Opening Balance</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">-</td>
                <td className="px-6 py-4 text-sm text-gray-600">Opening balance for period</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">-</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">-</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">$5,000.00</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2025-11-04</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Cash Register</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Receipt</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">SALE-2025</td>
                <td className="px-6 py-4 text-sm text-gray-600">Cash sales</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-green-600">$850.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">-</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">$5,850.00</td>
              </tr>
            </tbody>
            <tfoot className="bg-teal-50">
              <tr>
                <td colSpan="5" className="px-6 py-4 text-right font-bold text-gray-900">TOTALS:</td>
                <td className="px-6 py-4 whitespace-nowrap text-right font-bold text-green-600">$16,350.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-right font-bold text-red-600">$10,000.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-right font-bold text-teal-600">$31,350.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentAccountReport;
