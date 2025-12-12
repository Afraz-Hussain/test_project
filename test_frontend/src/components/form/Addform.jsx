import React, { useState } from "react";
import { API } from "../../api/api";
import { Link } from "react-router";


const Addform = () => {
  const [form, setForm] = useState({
    date: "",
    customer_id: "",
    waiting_time: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/create", form);
    alert("Data added!");
    setForm({ date: "", customer_id: "", waiting_time: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Waiting Time Entry</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />

          <input
            type="text"
            name="customer_id"
            placeholder="Customer ID"
            value={form.customer_id}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />

          <input
            type="number"
            name="waiting_time"
            placeholder="Waiting Time (minutes)"
            value={form.waiting_time}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
      
        </form>
        <button className=" mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          <Link to="/viewtable">View table</Link>
        </button>
      </div>
    </div>
  );
};

export default Addform;
