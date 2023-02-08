import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.mjs";
import productRoute from "./routes/product.mjs";
import authRoute from "./routes/auth.mjs";
import orderRoute from "./routes/order.mjs";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection Successfull"))
  .catch((err) => {
    console.log(err);
  });

app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "https://black-market-pokemon.onrender.com/",
  })
);
app.use(express.json());
app.use("/api/product", productRoute);
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/order", orderRoute);

app.listen(process.env.PORT || 3001, () => {
  console.log("Backend server is running!");
});
