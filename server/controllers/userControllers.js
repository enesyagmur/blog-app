const user = require("../models/userModel");

const loginUser = async (req, res) => {
  res.json({ message: "Login işlemi başarılı" });
};

const signupUser = async (req, res) => {
  res.json({ message: "Signup işlemi başarılı" });
};

module.exports = {
  loginUser,
  signupUser,
};
