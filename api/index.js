import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { connectDB } from "../lib/db.js";
config();
const app = express();

app.use(express.json());
app.use(cors());

connectDB();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("App is working");
});

app.listen(port, () => {
  console.log(`App is listening on port http://localhost:${port}`);
});
