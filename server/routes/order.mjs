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

// //UPDATE
// router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
//   try {
//     const updateOrder = await Order.finByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     res.status(200).json(updateOrder);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//DELETE

// router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
//   try {
//     await Order.findByIdAndDelete(req.params.id);
//     res.status(200).json("Order has been deleted...");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//GET user Order
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //GET MONTHLY INCOME

// router.get("/income", verifyTokenAndAdmin, async (req, res) => {
//   const date = new Date();
//   const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
//   const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

//   try {
//     const income = await Order.aggregate([
//       { $match: { createdAt: { $gte: previousMonth } } },

//       {
//         $project: {
//           month: { $month: "$createdAt" },
//           sales: "$amount",
//         },
//       },
//       {
//         $group: {
//           _id: "$month",
//           total: { $sum: "$sales" },
//         },
//       },
//     ]);
//     res.status(200).json(income);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

export default router;
