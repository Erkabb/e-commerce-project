import express, { Request, Response } from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth-routes";
import cors from "cors";
import connectDB from "./config/db";
import product from "./routes/product-routes";
import cartRoute from "./routes/cart-routes";
import userRouter from "./routes/user.router";
import catRouter from "./routes/category-routes";

dotenv.config();
const PORT = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.use("/users", userRouter);
app.use("/products", product);
app.use("/carts", cartRoute);
app.use("/category", catRouter);

app.get("/", async (req: Request, res: Response) => {
  res.send("E-commerce api server");
});
connectDB(MONGO_URI);
app.listen(PORT, () => {
  console.log(`Server ${PORT}`);
});
