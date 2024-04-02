const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: "1h" });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ hata: error.message });
  }
};

const signupUser = async (req, res) => {
  const { name, email, password, image } = req.body;

  try {
    const user = await userModel.signup(name, email, password, image);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ hata: error.message });
  }
};

module.exports = {
  loginUser,
  signupUser,
};
