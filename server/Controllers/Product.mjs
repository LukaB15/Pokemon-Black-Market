import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    idApi: {
      type: Number,
    },
    namePokemon: { type: String, required: true },
    level: { type: Number, required: true },
    price: { type: Number, required: true },
    idSeller: { type: String },
    idOrder: { type: String },
  },
  { timestamps: true }
);

//module.exports = mongoose.model("Product", productSchema);
export default mongoose.model("Product", productSchema);
