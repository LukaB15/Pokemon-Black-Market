import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter an userName"],
      unique: [true, "Please enter an new userName"],
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: [true, "Please enter an new email"],
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
