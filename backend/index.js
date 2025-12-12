import express from "express";
import cors from "cors";
import mongoose from "mongoose"
const app = express();

app.use(cors());
app.use(express.json());
import timeRoute from "./router/time_route.js"


mongoose.connect("mongodb://127.0.0.1:27017/testproject")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/backend/time",timeRoute)
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
