import React from 'react';

const BalanceSheet = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Balance Sheet</h1>
        <p className="text-gray-600 mt-2">Financial position statement showing assets, liabilities, and equity</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <input
              type="date"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>All Locations</option>
              <option>Main Office</option>
              <option>Branch Store</option>
            </select>
          </div>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">
            Export PDF
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Assets */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">ASSETS</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Current Assets</h3>
              <div className="ml-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Cash and Cash Equivalents</span>
                  <span className="font-medium">$45,850.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Accounts Receivable</span>
                  <span className="font-medium">$28,500.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Inventory</span>
                  <span className="font-medium">$156,200.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Prepaid Expenses</span>
                  <span className="font-medium">$3,450.00</span>
                </div>
                <div className="flex justify-between text-sm font-semibold border-t pt-2">
                  <span>Total Current Assets</span>
                  <span className="text-teal-600">$234,000.00</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Fixed Assets</h3>
              <div className="ml-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Property & Equipment</span>
                  <span className="font-medium">$85,000.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Less: Accumulated Depreciation</span>
                  <span className="font-medium text-red-600">($12,500.00)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Vehicles</span>
                  <span className="font-medium">$45,000.00</span>
                </div>
                <div className="flex justify-between text-sm font-semibold border-t pt-2">
                  <span>Total Fixed Assets</span>
                  <span className="text-teal-600">$117,500.00</span>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 p-3 rounded-lg">
              <div className="flex justify-between text-lg font-bold">
                <span>TOTAL ASSETS</span>
                <span className="text-teal-600">$351,500.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Liabilities & Equity */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">LIABILITIES & EQUITY</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Current Liabilities</h3>
              <div className="ml-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Accounts Payable</span>
                  <span className="font-medium">$18,750.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Short-term Loans</span>
                  <span className="font-medium">$15,000.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Accrued Expenses</span>
                  <span className="font-medium">$5,250.00</span>
                </div>
                <div className="flex justify-between text-sm font-semibold border-t pt-2">
                  <span>Total Current Liabilities</span>
                  <span className="text-red-600">$39,000.00</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Long-term Liabilities</h3>
              <div className="ml-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Long-term Loans</span>
                  <span className="font-medium">$50,000.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Mortgage Payable</span>
                  <span className="font-medium">$75,000.00</span>
                </div>
                <div className="flex justify-between text-sm font-semibold border-t pt-2">
                  <span>Total Long-term Liabilities</span>
                  <span className="text-red-600">$125,000.00</span>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-3 rounded-lg">
              <div className="flex justify-between font-semibold">
                <span>TOTAL LIABILITIES</span>
                <span className="text-red-600">$164,000.00</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Owner's Equity</h3>
              <div className="ml-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Capital</span>
                  <span className="font-medium">$150,000.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Retained Earnings</span>
                  <span className="font-medium">$37,500.00</span>
                </div>
                <div className="flex justify-between text-sm font-semibold border-t pt-2">
                  <span>Total Equity</span>
                  <span className="text-green-600">$187,500.00</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="flex justify-between text-lg font-bold">
                <span>TOTAL LIABILITIES & EQUITY</span>
                <span className="text-blue-600">$351,500.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceSheet;
