import express from "express";
import {
  getTransactions,
  addTransaction,
  deleteTransaction,
} from "../controller/transaction.js";

const router = express.Router();

router.get("/", getTransactions);
router.post("/add", addTransaction);
router.delete("/:id", deleteTransaction);

export default router;
