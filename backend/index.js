import express from "express";
import cors from "cors";
import transactionRouter from "./router/transaction_route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/transaction", transactionRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
