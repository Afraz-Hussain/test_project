import React from 'react';
import { useSummary } from '../../context/SummaryContext';
import SummaryChart from '../expensechart/SummaryChart';

// Helper function to format numbers as currency


const ExpenseSummary = () => {
  const { totalIncome, totalExpense, balance } = useSummary();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-100">
          Financial Dashboard
        </h1>

        {/* Financial Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Income Card */}
          <div className="bg-green-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-lg font-semibold text-green-50 mb-2">Total Income</h2>
            <p className="text-3xl font-bold">RS{totalIncome}</p>
          </div>

          {/* Expense Card */}
          <div className="bg-red-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-lg font-semibold text-red-50 mb-2">Total Expense</h2>
            <p className="text-3xl font-bold">RS{totalExpense}</p>
          </div>

          {/* Balance Card */}
          <div className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ${balance >= 0 ? 'bg-blue-600' : 'bg-orange-600'}`}>
            <h2 className="text-lg font-semibold text-blue-50 mb-2">Current Balance</h2>
            <p className="text-3xl font-bold">RS{balance}</p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg">
           <SummaryChart/>
        </div>
      </div>
    </div>
  );
}

export default ExpenseSummary;
