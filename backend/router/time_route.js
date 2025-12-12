import express from "express"
import { generateCsv, getAverage, getDetails, makeform } from "../controller/timer.js"
const router=express.Router()

router.post("/create",makeform)
router.get("/details",getDetails)
router.get("/csvfile",generateCsv)
router.get("/getavg",getAverage)
export default router
