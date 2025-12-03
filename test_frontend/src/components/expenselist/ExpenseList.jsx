import React from "react";
import { X, Pencil } from "lucide-react";
import { useSummary } from "../../context/SummaryContext";
import ExpenseSummary from "../summary/ExpenseSummary";
import { Link } from "react-router";

const ExpenseList = () => {
  const { transactions, deleteTransaction } = useSummary();

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-800 text-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Expense List
      </h2>

      <div className="space-y-4">
        {transactions.length === 0 && (
          <p className="text-center text-gray-400">No transactions yet</p>
        )}

        {transactions.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-gray-700 p-4 rounded-lg shadow hover:bg-gray-600 transition"
          >
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-300">
                {item.category} • {item.type}
              </p>
            </div>

            <div className="flex items-center gap-5">
              <span
                className={`font-bold ${
                  item.type === "income" ? "text-green-400" : "text-red-400"
                }`}
              >
                Rs {item.amount}
              </span>

              <button
                className="text-red-500 hover:text-red-400"
                onClick={() => deleteTransaction(item.id)}
              >
                <X size={20} />
              </button>

              <button className="text-blue-400 hover:text-blue-500">
                <Pencil size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-blue-600 text-2xl border-blue-2 p-3 mt-3 rounded-md">
        <Link to={"/data"}>VIEW DETAILS</Link>
      </button>
      <button className="bg-blue-600 text-2xl border-blue-2 p-3 mt-3 rounded-md">
        <Link to={"/"}>ADD DATA</Link>
      </button>
    </div>
  );
};

export default ExpenseList;
