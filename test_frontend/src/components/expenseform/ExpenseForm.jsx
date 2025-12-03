import React, { useState } from "react";
import { useSummary } from "../../context/SummaryContext";
import { useNavigate } from "react-router-dom";

const ExpenseForm = () => {
  const { addTransaction } = useSummary();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("FOOD");
  const [type, setType] = useState("expense");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const transaction = {
      title,
      amount: Number(amount),
      category,
      type,
    };
    if(!title||!amount||!category||!type){
      alert("fields are missing!")
      return;
    }
    if(amount<0){
      alert('amount cannnot be less then 0')
return;
    }

    addTransaction(transaction);
    navigate("/list");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded-xl shadow-lg text-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Transaction Form</h1>

      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 rounded-lg bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 mb-4 rounded-lg bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 mb-4 rounded-lg bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
      >
              <option></option>
        <option>FOOD</option>
        <option>TV SHOW</option>
        <option>GROCERY</option>
        <option>RENT</option>
        <option>Income</option>
      </select>

      <div className="flex gap-6 mb-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            checked={type === "income"}
            onChange={() => setType("income")}
          />
          Income
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            checked={type === "expense"}
            onChange={() => setType("expense")}
          />
          Expense
        </label>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 hover:bg-blue-700 py-2 
        rounded-lg 
        font-semibold transition"
      >
        Add Transaction
      </button>
    </div>
  );
};

export default ExpenseForm;
