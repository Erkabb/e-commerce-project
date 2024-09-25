import express, { Request, Response } from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth-routes";
import cors from "cors";
import nodemailer from "nodemailer";
import connectDB from "./config/db";
import productandclasslistRouter from "./routes/product-routes";

const userRouter = require("./routes/user.router");

dotenv.config();
const PORT = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.use("/users", userRouter);
app.use("/", productandclasslistRouter);

app.get("/", async (req: Request, res: Response) => {
  res.send("E-commerce api server");
});
connectDB(MONGO_URI);
app.listen(PORT, () => {
  console.log(`Server ${PORT}`);
});
