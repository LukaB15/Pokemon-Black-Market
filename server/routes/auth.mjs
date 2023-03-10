import Users from "../models/Users.mjs";
import express from "express";
const router = express.Router();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//register
router.post("/register", async (req, res) => {
  let passwFormat = /^[A-Za-z0-9_]\w{7,30}$/;
  const password = req.body.password;

  if (!password.match(passwFormat)) return "Invalid password";

  const hashing = await bcrypt.hash(password, 10);
  const newUser = new Users({
    username: req.body.username,
    email: req.body.email,
    password: hashing,
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//login

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await Users.findOne({ username: username });

    if (!user) {
      return res.status(401).json("Wrong credentials");
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json("Wrong credentials!");
    }
    const accesToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "1d" }
    );
    const { hidepassword, ...others } = user;

    res.cookie("PokeCookie", accesToken, {
      httpOnly: true,
      maxAge: 86400000,
      sameSite: "none",
      secure: true,
    });

    res.status(200).json({ ...others, accesToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOG OUT

router.delete("/logout", async (req, res) => {
  try {
    res.status(200).clearCookie("PokeCookie").json("Cookie is cleared");
  } catch (err) {
    response.status(500).json(err);
  }
});

export default router;
