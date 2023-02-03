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
      let oldestPokemon = await Product.find([
        {
          $match: {
            $and: [
              { namePokemon: element.namePokemon },
              { level: element.level },
              { price: element.price },
            ],
          },
        },
        { $sort: { createdAt: -1 } },
        { $limit: 1 },
      ]);

      ArrayPokemonWithId.push(oldestPokemon);
    });
    ArrayPokemonWithId.forEach(async (element) => {
      await Product.updateOne(
        { _id: element._id },
        {
          $set: {
            idOrder: idOrder,
          },
        }
      );
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

export default router;
