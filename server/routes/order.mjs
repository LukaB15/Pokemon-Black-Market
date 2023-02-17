import express from "express";
const router = express.Router();
import Order from "../models/Order.mjs";
import Product from "../models/Product.mjs";
import Users from "../models/Users.mjs";
import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "./verifyToken.mjs";

//CREATE

router.post("/", verifyToken, async (req, res) => {
  const arrayItemsOrdered = req.body.ordersItems;
  let ArrayPokemonWithId = [];
  const newOrder = new Order({
    idBuyers: req.body.idBuyers,
    ordersItems: arrayItemsOrdered,
  });

  try {
    let savedOrder = await newOrder.save();
    const idOrder = await Order.find(
      {
        idBuyers: req.body.idBuyers,
        ordersItems: arrayItemsOrdered,
      },
      {
        _id: "$_id",
      }
    );

    arrayItemsOrdered.forEach(async (element) => {
      for (let i = 0; i < element.qty; i++) {
        await Product.findOneandUpdate(
          {
            namePokemon: element.name,
            level: element.lvl,
            price: element.price,
            idOrder: "",
          },
          { $sort: { createdAt: 1 } },
          { $limit: 1 },
          { $set: { idOrder: idOrder } }
        );
      }
    });
    await Users.updateOne(
      { _id: idBuyers },
      {
        $inc: {
          credits: -req.body.total,
        },
      }
    );
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET user Order
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const orders = await Order.find({ idBuyers: req.params.userId });
    const numberOrder = await Order.aggregate(
      [
        {
          $match: {
            $expr: {
              $eq: ["$idBuyers.orders", req.params.userId],
            },
          },
        },
        {
          $group: {
            _id: {},
            "COUNT(orders)": {
              $sum: 1,
            },
          },
        },
        {
          $project: {
            "COUNT(orders)": "$COUNT(orders)",
            _id: 0,
          },
        },
      ],
      {
        allowDiskUse: true,
      }
    );

    res.status(200).json(orders, numberOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET PRODUCT BY ORDER

router.get(
  "findPokemonByOrder/:idOrder",
  verifyTokenAndAuthorization,
  async (req, res) => {
    try {
      const pokemonOrder = await Product.find({ idOrder: req.params.idOrder });
      res.status(200).json(pokemonOrder);
    } catch (error) {
      res.status(500).json(err);
    }
  }
);
export default router;
