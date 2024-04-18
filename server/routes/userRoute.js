const express = require("express");

const {
  loginUser,
  signupUser,
  userUpdate,
} = require("../controllers/userControllers");

const router = express.Router();

router.post("/login", loginUser);
router.post("/signup", signupUser);
router.post("/account", userUpdate);

module.exports = router;
