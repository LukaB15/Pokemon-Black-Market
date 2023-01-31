import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    idApi: {
      type: Number,
    },
    namePokemon: { type: String, required: true },
    imgUrl: { type: String },
    typeFirst: { type: String },
    typeSecond: { type: String },
    flavorText: { type: String },
    level: { type: Number, required: true },
    price: { type: Number, required: true },
    idSeller: { type: String },
    idOrder: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
