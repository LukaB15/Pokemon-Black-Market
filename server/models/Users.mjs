import mongoose from "mongoose";

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
