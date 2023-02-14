import express from "express";
const router = express.Router();
import Product from "../models/Product.mjs";
import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "./verifyToken.mjs";

//CREATE

router.post("/", verifyToken, async (req, res) => {
  let savedProduct;
  for (let i = 0; i < req.body.qty; i++) {
    const newProduct = new Product({
      idApi: req.body.idApi,
      namePokemon: req.body.name,
      imgUrl: req.body.imgUrl,
      typeFirst: req.body.typeFirst,
      typeSecond: req.body.typeSecond,
      flavorText: req.body.flavorText,
      level: req.body.lvl,
      price: req.body.price,
      idSeller: req.user.id,
      idOrder: "",
    });

    try {
      savedProduct = await newProduct.save();
    } catch (err) {
      res.status(500).json(err);
    }
  }
  res.status(200).json(savedProduct);
});

//UPDATE
router.put("/:_id", verifyToken, async (req, res) => {
  try {
    const updateProduct = await Product.finByIdAndUpdate(
      req.params._id,
      {
        $set: {
          level: req.body.lvl,
          price: req.body.price,
        },
      },
      { new: true }
    );
    res.status(200).json(updateProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE

router.delete("/delete/:_id", verifyToken, async (req, res) => {
  try {
    await Product.deleteOne({ _id: req.params._id });
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Product
router.get("/", async (req, res) => {
  try {
    let products;

    products = await Product.aggregate(
      [
        { $match: { idOrder: "" } },
        {
          $group: {
            _id: {
              price: "$price",
              idApi: "$idApi",
              flavorText: "$flavorText",
              level: "$level",
              imgUrl: "$imgUrl",
              namePokemon: "$namePokemon",
              typeFirst: "$typeFirst",
              typeSecond: "$typeSecond",
            },
            "COUNT(*)": {
              $sum: 1,
            },
          },
        },
        {
          $project: {
            "COUNT(*)": "$COUNT(*)",
            namePokemon: "$_id.namePokemon",
            level: "$_id.level",
            price: "$_id.price",
            idApi: "$_id.idApi",
            imgUrl: "$_id.imgUrl",
            typeFirst: "$_id.typeFirst",
            typeSecond: "$_id.typeSecond",
            flavorText: "$_id.flavorText",
            _id: 0,
          },
        },
      ],
      {
        allowDiskUse: true,
      }
    );

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCT BY USER AS A SELLER
router.get(
  "/findProduct/:id",
  verifyTokenAndAuthorization,
  async (req, res) => {
    try {
      const productSellByUser = await Product.find({ idSeller: req.params.id });
      res.status(200).json(productSellByUser);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

//GET ALL PRODUCT FOR ADMIN
router.get("/admin", verifyTokenAndAdmin, async (req, res) => {
  try {
    const Allproduct = await Product.find().sort({ createdAt: -1 });

    res.status(200).json(Allproduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET SIMILAR PRODUCT

router.get("/findSimilar/:typefirst",/* verifyToken,*/ async (req, res) => {
  try {
    const similarProduct = await Product.find({
      typeFirst: req.params.typefirst,
    }).limit(3);
    res.status(200).json(similarProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
