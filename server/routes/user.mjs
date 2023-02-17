import express from "express";
const router = express.Router();
import bcrypt from "bcrypt";
import Users from "../models/Users.mjs";

import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "./verifyToken.mjs";

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  let passwFormat = /^[A-Za-z0-9_]\w{7,30}$/;
    if (!req.body.password.match(passwFormat)){
      console.log("password");
      return "Invalid password"
    };
  // if (req.body.password) {
  //   req.body.password = await bcrypt.hash(req.body.password, 10);
  // }
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    console.log("id : ",req.params.id);
    console.log("username : ", req.body.username);
    console.log("email : ", req.body.email);
    console.log("req.body.password : ", req.body.password);
    console.log("newPassword: ", newPassword);
    const updateUser = await Users.finByIdAndUpdate(
      req.params.id,
      {
        
          username: req.body.username,
          email: req.body.email,
          password: newPassword,
        
      },
      { new: true }
    );
    console.log("bonne route"); 

    res.status(200).json(updateUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //DELETE

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Users.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
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

//GET CREDITS OF USER

router.get("/credits/:id", verifyToken, async (req, res) => {
  try {
    const userCredits = await Users.find({ _id: req.params.id });
    res.status(200).json(userCredits[0]["credits"]);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
