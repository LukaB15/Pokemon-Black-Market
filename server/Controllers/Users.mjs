import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter an username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: true,
      validate: [isEmail, "Please enter a valid email"],
    },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    credits: { type: Number, default: 200 },
  },
  { timestamps: true }
);

export default mongoose.model("Users", userSchema);
