import express from "express";
const router = express.Router();
import Users from "../models/Users.mjs";

import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "./verifyToken.mjs";

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, 10);
  }
  try {
    let passwFormat = /^[A-Za-z0-9_]\w{7,30}$/;
    if (!password.match(passwFormat)) return "Invalid password";
    const newPassword = await bcrypt.hash(req.body.password, 10);
    const updateUser = await Users.finByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: newPassword,
        },
      },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //DELETE

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Users.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json({ others });
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL USER
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const Alluser = await Users.find().sort({ createdAt: -1 });

    res.status(200).json(Alluser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE CREDITS

router.put("/credits/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const addCredits = await Users.findByIdAndUpdate(req.params.id, {
      $inc: { credits: +req.body.credits },
    });

    res.status(200).json(addCredits);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
