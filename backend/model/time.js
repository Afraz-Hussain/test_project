import mongoose from "mongoose";

const timeSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  customer_id: {
    type: String,
    required: true
  },
  waiting_time: {
    type: Number,
    required: true
  }
});

export default mongoose.model("Time", timeSchema);
