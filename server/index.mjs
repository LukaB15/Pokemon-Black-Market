import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection Successfull"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.listen(process.env.PORT || 3001, () => {
  console.log("Backend server is running!");
});
