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
  const newOrder = new Order({
    idBuyers: req.body.idBuyers,
    ordersItems: arrayItemsOrdered,
    total:req.body.total,
  });
  try {
    let savedOrder = await newOrder.save();
    const savedId = savedOrder._id.valueOf();
    const idOrder = await Order.find(
      {
        idBuyers: req.body.idBuyers,
        ordersItems: arrayItemsOrdered,
        total:req.body.total,
      },
      {
        _id: "$_id",
      }
    );
    arrayItemsOrdered.forEach(async (element) => {
      for (let i = 0; i < element.qty; i++) {
        await Product.findOneAndUpdate(
          {
            namePokemon: element.name,
            level: element.lvl,
            price: element.price,
            idOrder: "",
          },
          { $set: { idOrder: savedId } }
        );
      }
    });
    const total = -req.body.total;
    const buyersId = req.body.idBuyers;
    await Users.findOneAndUpdate(
      { _id: buyersId },
      {
        $inc: {
          credits: total,
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
    console.log("Bonne route");
    const orders = await Order.find({ idBuyers: req.params.userId });
    //console.log("orders : ", orders);
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
    const nbAndOrders = {
      numberOrder:numberOrder,
      orders:orders
    }
    res.status(200).json(nbAndOrders);
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
