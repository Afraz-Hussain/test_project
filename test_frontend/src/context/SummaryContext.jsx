import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const SummaryContext = createContext();
export const useSummary = () => useContext(SummaryContext);

export const SummaryContextProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const BASE_URL = "http://localhost:5000/api/transaction";
  const Addurl="http://localhost:5000/api/transaction/add"
  useEffect(() => {
    axios.get(BASE_URL)
      .then((res) => setTransactions(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Add a transaction
  const addTransaction = (data) => {
    axios.post(Addurl, data)
      .then((res) => setTransactions((prev) => [...prev, res.data]))
      .catch((err) => console.error(err));
  };

  // Delete a transaction
  const deleteTransaction = (id) => {
    axios.delete(`${BASE_URL}/${id}`)
      .then(() => setTransactions((prev) => prev.filter((t) => t.id !== id)))
      .catch((err) => console.error(err));
  };

  // Summary calculations
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const balance = totalIncome - totalExpense;

  return (
    <SummaryContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction,
        totalIncome,
        totalExpense,
        balance,
      }}
    >
      {children}
    </SummaryContext.Provider>
  );
};
