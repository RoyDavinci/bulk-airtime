import express from "express";
import serializeJson from "../controllers/airtime.js";
const router = express.Router();

router.post("/", serializeJson);
export default router;
