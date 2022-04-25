import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import airtimeRouter from "./routes/airtime.js";
import dataRouter from "./routes/data.js";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "client", "build")));

// ...

app.use(express.json());
app.use(cors());
app.use("/airtime", airtimeRouter);
app.use("/get-data", dataRouter);

app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;

// Right before your app.listen(), add this:
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
	console.log(`Server is running on  http://localhost:${PORT}`);
});
