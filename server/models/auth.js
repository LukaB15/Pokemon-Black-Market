const Users = require("../Controllers/Users");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//register
router.post("/register", async (req, res) => {
  const hashing = await bcrypt.hash(req.body.password, 10);
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
    res.status(200).json({ ...others, accesToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
