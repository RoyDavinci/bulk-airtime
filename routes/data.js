import express from "express";
import { getDataPlans, buyData } from "../controllers/data.js";

const router = express.Router();
router.post("/data", getDataPlans);
router.post("/buy-data", buyData);

export default router;
