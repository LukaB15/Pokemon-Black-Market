import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema(
  {
    idOrder: { type: String, required: true },
    idBuyers: { type: String, required: true },
  },
  { timestamps: true }
);

//module.exports = mongoose.model("Order", OrderSchema);
export default mongoose.model("Order", OrderSchema);
