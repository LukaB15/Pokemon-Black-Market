import express from "express";
const router = express.Router();
import Product from "../Controllers/Product.mjs";
import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "./verifyToken.mjs";

//CREATE

router.post(
  "/",
  /*verifyToken,*/ async (req, res) => {
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
        idSeller: "Seller",
        idOrder: "",
      });

      try {
        savedProduct = await newProduct.save();
      } catch (err) {
        res.status(500).json(err);
      }
    }
    res.status(200).json(savedProduct);
  }
);

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updateProduct = await Product.finByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Users.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Product
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.body;

  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.aggregate(
        [
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
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
