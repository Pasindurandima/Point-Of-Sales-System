import React from 'react';

const TaxReport = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Tax Report</h1>
        <p className="text-gray-600 mt-2">Comprehensive tax summary and breakdown</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <input type="date" className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <input type="date" className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>All Tax Types</option>
              <option>VAT</option>
              <option>GST</option>
              <option>Sales Tax</option>
            </select>
          </div>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">Export Report</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-md">
          <div className="text-sm opacity-90 mb-2">Tax Collected</div>
          <div className="text-3xl font-bold">$45,280</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-md">
          <div className="text-sm opacity-90 mb-2">Tax Paid</div>
          <div className="text-3xl font-bold">$28,150</div>
        </div>
        <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-6 rounded-lg shadow-md">
          <div className="text-sm opacity-90 mb-2">Net Tax Payable</div>
          <div className="text-3xl font-bold">$17,130</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Tax Breakdown by Type</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tax Type</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Rate</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Taxable Amount</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Tax Collected</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Tax Paid</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Net Payable</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 text-sm font-medium">VAT 15%</td>
              <td className="px-6 py-4 text-sm text-right">15%</td>
              <td className="px-6 py-4 text-sm text-right">$245,000</td>
              <td className="px-6 py-4 text-sm text-right font-semibold text-green-600">$36,750</td>
              <td className="px-6 py-4 text-sm text-right font-semibold text-red-600">$21,300</td>
              <td className="px-6 py-4 text-sm text-right font-bold text-teal-600">$15,450</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm font-medium">VAT 5%</td>
              <td className="px-6 py-4 text-sm text-right">5%</td>
              <td className="px-6 py-4 text-sm text-right">$85,000</td>
              <td className="px-6 py-4 text-sm text-right font-semibold text-green-600">$4,250</td>
              <td className="px-6 py-4 text-sm text-right font-semibold text-red-600">$3,100</td>
              <td className="px-6 py-4 text-sm text-right font-bold text-teal-600">$1,150</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm font-medium">GST 18%</td>
              <td className="px-6 py-4 text-sm text-right">18%</td>
              <td className="px-6 py-4 text-sm text-right">$24,000</td>
              <td className="px-6 py-4 text-sm text-right font-semibold text-green-600">$4,280</td>
              <td className="px-6 py-4 text-sm text-right font-semibold text-red-600">$3,750</td>
              <td className="px-6 py-4 text-sm text-right font-bold text-teal-600">$530</td>
            </tr>
          </tbody>
          <tfoot className="bg-teal-50">
            <tr>
              <td colSpan="3" className="px-6 py-4 text-right font-bold">TOTALS:</td>
              <td className="px-6 py-4 text-right font-bold text-green-600">$45,280</td>
              <td className="px-6 py-4 text-right font-bold text-red-600">$28,150</td>
              <td className="px-6 py-4 text-right font-bold text-teal-600">$17,130</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default TaxReport;
