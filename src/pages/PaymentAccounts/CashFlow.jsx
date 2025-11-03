import React from 'react';

const CashFlow = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Cash Flow Statement</h1>
        <p className="text-gray-600 mt-2">Track cash inflows and outflows across all business activities</p>
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
              <option>Monthly</option>
              <option>Quarterly</option>
              <option>Yearly</option>
            </select>
          </div>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">
            Export Report
          </button>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Cash Flow Statement</h2>
          <p className="text-sm text-gray-600">For the period ending November 4, 2025</p>
        </div>

        <div className="space-y-6">
          {/* Operating Activities */}
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-4 bg-teal-50 p-2 rounded">Cash Flow from Operating Activities</h3>
            <div className="ml-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Cash received from customers</span>
                <span className="font-medium text-green-600">$245,300.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Cash paid to suppliers</span>
                <span className="font-medium text-red-600">($125,000.00)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Cash paid for operating expenses</span>
                <span className="font-medium text-red-600">($34,200.00)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Cash paid for salaries</span>
                <span className="font-medium text-red-600">($28,500.00)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Cash paid for taxes</span>
                <span className="font-medium text-red-600">($12,300.00)</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2 mt-2">
                <span>Net Cash from Operating Activities</span>
                <span className="text-teal-600">$45,300.00</span>
              </div>
            </div>
          </div>

          {/* Investing Activities */}
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-4 bg-blue-50 p-2 rounded">Cash Flow from Investing Activities</h3>
            <div className="ml-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Purchase of equipment</span>
                <span className="font-medium text-red-600">($25,000.00)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Purchase of vehicles</span>
                <span className="font-medium text-red-600">($45,000.00)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Sale of old equipment</span>
                <span className="font-medium text-green-600">$5,000.00</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2 mt-2">
                <span>Net Cash from Investing Activities</span>
                <span className="text-red-600">($65,000.00)</span>
              </div>
            </div>
          </div>

          {/* Financing Activities */}
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-4 bg-purple-50 p-2 rounded">Cash Flow from Financing Activities</h3>
            <div className="ml-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Proceeds from bank loan</span>
                <span className="font-medium text-green-600">$50,000.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Owner's capital injection</span>
                <span className="font-medium text-green-600">$25,000.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Loan repayment</span>
                <span className="font-medium text-red-600">($8,500.00)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Dividend payment</span>
                <span className="font-medium text-red-600">($5,000.00)</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2 mt-2">
                <span>Net Cash from Financing Activities</span>
                <span className="text-green-600">$61,500.00</span>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="border-2 border-teal-500 rounded-lg p-4 bg-teal-50">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Net Cash from Operating Activities</span>
                <span className="font-medium">$45,300.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Net Cash from Investing Activities</span>
                <span className="font-medium">($65,000.00)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Net Cash from Financing Activities</span>
                <span className="font-medium">$61,500.00</span>
              </div>
              <div className="border-t-2 border-teal-500 pt-2 flex justify-between text-lg font-bold">
                <span>Net Increase in Cash</span>
                <span className="text-teal-600">$41,800.00</span>
              </div>
              <div className="flex justify-between text-sm mt-3">
                <span className="text-gray-700">Cash at Beginning of Period</span>
                <span className="font-medium">$4,050.00</span>
              </div>
              <div className="border-t pt-2 flex justify-between text-lg font-bold">
                <span>Cash at End of Period</span>
                <span className="text-teal-600">$45,850.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashFlow;
