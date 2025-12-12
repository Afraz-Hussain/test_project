import time from "../model/time.js"
import { createObjectCsvWriter } from "csv-writer";
import path from "path";
export const makeform=async(req,res)=>{
   const {date,customer_id,waiting_time}=req.body
    try{
     
      const newTime=new time({
          date,
          customer_id,
          waiting_time
      })
      await newTime.save()
      res.status(201).json({message:"time saved successfully",newTime})
    }
    catch(err){
      return res.status(500).json({message:err.message})
    }

}
export const getDetails=async(req,res)=>{
   try {
      const entries = await time.find().sort({ date: 1 });
      res.json(entries);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }

}
// step 2 to download file as csv


export const generateCsv=async(req,res)=>{
   try {
      const data = await time.find();
  
      const filePath = path.join(process.cwd(), "waiting_data.csv");
  
      const csvWriter = createObjectCsvWriter({
        path: filePath,
        header: [
          { id: "date", title: "date" },
          { id: "customer_id", title: "customer_id" },
          { id: "waiting_time_minutes", title: "waiting_time_minutes" }
        ]
      });
  
      await csvWriter.writeRecords(data);
  
      res.download(filePath);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}
// task 3. endpoint that shows a monthly average waiting-time bar
export const getAverage=async(req,res)=>{
   try {
      const result = await time.aggregate([
         {
            $group: {
              _id: {
                year: { $year: "$date" },
                month: { $month: "$date" }
              },
              average: { $avg: "$waiting_time" }
            }
          },
          
        {
          $sort: { "_id.year": 1, "_id.month": 1 }
        }
      ]);
  
      const formatted = result.map(item => ({
        month: `${item._id.year}-${String(item._id.month).padStart(2, "0")}`,
        average: item.average
      }));
  
      res.json(formatted);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}