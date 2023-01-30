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
  console.log("avant try");
  try {
    console.log("debut try");
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
      console.log("avant query");
      // products = await Product.aggregate([
      //   // Stage 2: Group remaining documents by pizza name and calculate total quantity
      //   {
      //     $group: {
      //       _id: { name: "$namePokemon", level: "$level", price: "price" },
      //       "COUNT(*)": {
      //         $sum: 1,
      //       },
      //     },
      //   },
      // ]);
      products = await Product.aggregate(
        [
          {
            $group: {
              _id: {
                price: "$price",
                level: "$level",
                namePokemon: "$namePokemon",
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
              _id: 0,
            },
          },
        ],
        {
          allowDiskUse: true,
        }
      );
    }
    console.log("coucou avant 200");
    res.status(200).json(products);
    console.log("coucou aprés 200");
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
