import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema(
  {
    idBuyers: { type: String, required: true },
    ordersItems: { type: Array, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);
