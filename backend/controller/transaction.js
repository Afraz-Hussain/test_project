import { transactions } from "../Data/data.js";
export const getTransactions = (req, res) => {
  res.json(transactions);
};
export const addTransaction = (req, res) => {
  const { title, amount, category, type } = req.body;

  if (!title || !amount ||!category|| !type) {
    return res.status(400).json({ error: "fiels are missing!" });
  }

  const newTransaction = {
    id: Date.now(),
    title,
    amount: Number(amount),
    category: category,
    type,
    date: new Date(),
  };

  transactions.push(newTransaction);
  res.status(201).json(newTransaction);
};
export const deleteTransaction = (req, res) => {
  const { id } = req.params;
  const finddata = transactions.findIndex((t) => t.id === Number(id));

  if (finddata === -1) {
    return res.status(404).json({ error: "Transaction not found" });
  }

  transactions.splice(finddata, 1);
  res.json({ message: "Transaction deleted successfully" });
};
