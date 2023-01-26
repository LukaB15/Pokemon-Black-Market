import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./models/user.mjs";
import productRoute from "./models/product.mjs";
import authRoute from "./models/auth.mjs";
import orderRoute from "./models/order.mjs";
import cors from "cors";
const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection Successfull"))
  .catch((err) => {
    console.log(err);
  });

//app.use(express.static("client/src/index.tsx"));
app.use(cors());
app.use(express.json());
app.use("/api/product", productRoute);
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/order", orderRoute);

app.listen(process.env.PORT || 3001, () => {
  console.log("Backend server is running!");
});
