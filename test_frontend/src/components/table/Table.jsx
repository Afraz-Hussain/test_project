import React, { useEffect, useState } from "react";
import { API } from "../../api/api";
import { Link } from "react-router";


const Table = () => {
  const [entries, setEntries] = useState([]);
  const fetchEntries = async () => {
    const res = await API.get("/details");
    setEntries(res.data);
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleDownload = () => {
    window.open(`${API.defaults.baseURL}csvfile`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">All Entries</h2>

       

        <table className="w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Customer ID</th>
              <th className="border px-4 py-2">Waiting Time (min)</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry._id}>
                <td className="border px-4 py-2">{new Date(entry.date).toLocaleDateString()}</td>
                <td className="border px-4 py-2">{entry.customer_id}</td>
                <td className="border px-4 py-2">{entry.waiting_time}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={handleDownload}
          className=" mt-5 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800 mb-4"
        >
          Download CSV
        </button>
        <button
         
          className="ml-4 mt-5 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
        >
        <Link to="/viewchart">View chart</Link>
        </button>
      </div>
      
    </div>
  );
};

export default Table;
