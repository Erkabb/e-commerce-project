import express, { Request, Response } from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth-routes";
dotenv.config();
const PORT = process.env.PORT;
const app = express();

//middleware
app.use("/api/v1/auth", authRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("E-commerce api server");
});
app.listen(PORT, () => {
  console.log(`Server ${PORT}`);
});
