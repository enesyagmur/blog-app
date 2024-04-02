const userModel = require("../models/userModel");
const user = require("../models/userModel");

const loginUser = async (req, res) => {
  res.json({ message: "Login işlemi başarılı" });
};

const signupUser = async (req, res) => {
  const { name, email, password, image } = req.body; // istek body sinden gerekli bilgileri alıyoruz

  try {
    const user = await userModel.signup(name, email, password, image);
    res.status(200).json({ name, email, image });
  } catch (error) {
    res.status(400).json({ hata: error.message });
  }
};

module.exports = {
  loginUser,
  signupUser,
};
