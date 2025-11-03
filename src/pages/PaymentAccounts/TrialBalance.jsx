import React from 'react';

const TrialBalance = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Trial Balance</h1>
        <p className="text-gray-600 mt-2">Summary of all ledger accounts with debit and credit balances</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2">
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
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>All Locations</option>
              <option>Main Office</option>
              <option>Branch Store</option>
            </select>
          </div>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">
            Export Report
          </button>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Trial Balance Report</h2>
          <p className="text-sm text-gray-600">As of November 4, 2025</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account Code</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account Name</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Debit</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Credit</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="bg-gray-50">
                <td colSpan="4" className="px-6 py-2 text-sm font-semibold text-gray-700">ASSETS</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">1001</td>
                <td className="px-6 py-4 text-sm text-gray-900">Cash and Cash Equivalents</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">$45,850.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">-</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">1002</td>
                <td className="px-6 py-4 text-sm text-gray-900">Accounts Receivable</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">$28,500.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">-</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">1003</td>
                <td className="px-6 py-4 text-sm text-gray-900">Inventory</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">$156,200.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">-</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">1004</td>
                <td className="px-6 py-4 text-sm text-gray-900">Property & Equipment</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">$85,000.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">-</td>
              </tr>
              
              <tr className="bg-gray-50">
                <td colSpan="4" className="px-6 py-2 text-sm font-semibold text-gray-700">LIABILITIES</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2001</td>
                <td className="px-6 py-4 text-sm text-gray-900">Accounts Payable</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">-</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">$18,750.00</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2002</td>
                <td className="px-6 py-4 text-sm text-gray-900">Short-term Loans</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">-</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">$15,000.00</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2003</td>
                <td className="px-6 py-4 text-sm text-gray-900">Long-term Loans</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">-</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">$125,000.00</td>
              </tr>
              
              <tr className="bg-gray-50">
                <td colSpan="4" className="px-6 py-2 text-sm font-semibold text-gray-700">EQUITY</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">3001</td>
                <td className="px-6 py-4 text-sm text-gray-900">Owner's Capital</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">-</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">$150,000.00</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">3002</td>
                <td className="px-6 py-4 text-sm text-gray-900">Retained Earnings</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">-</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">$37,500.00</td>
              </tr>
              
              <tr className="bg-gray-50">
                <td colSpan="4" className="px-6 py-2 text-sm font-semibold text-gray-700">REVENUE</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">4001</td>
                <td className="px-6 py-4 text-sm text-gray-900">Sales Revenue</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">-</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">$245,300.00</td>
              </tr>
              
              <tr className="bg-gray-50">
                <td colSpan="4" className="px-6 py-2 text-sm font-semibold text-gray-700">EXPENSES</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">5001</td>
                <td className="px-6 py-4 text-sm text-gray-900">Cost of Goods Sold</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">$125,000.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">-</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">5002</td>
                <td className="px-6 py-4 text-sm text-gray-900">Operating Expenses</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">$34,200.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">-</td>
              </tr>
            </tbody>
            <tfoot className="bg-teal-50">
              <tr>
                <td colSpan="2" className="px-6 py-4 text-right text-base font-bold text-gray-900">TOTALS:</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-right font-bold text-teal-600">$474,750.00</td>
                <td className="px-6 py-4 whitespace-nowrap text-base text-right font-bold text-teal-600">$591,550.00</td>
              </tr>
              <tr>
                <td colSpan="2" className="px-6 py-4 text-right text-sm font-medium text-gray-700">Difference:</td>
                <td colSpan="2" className="px-6 py-4 text-center text-sm font-semibold text-green-600">
                  {Math.abs(474750 - 591550) < 0.01 ? 'Balanced' : `$${Math.abs(474750 - 591550).toFixed(2)}`}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> This trial balance shows the closing balances of all accounts. Total debits should equal total credits for a balanced trial balance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrialBalance;
