const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Sema = mongoose.Schema;

const userSema = new Sema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

//kayıt fonksiyonu
userSema.statics.signup = async function (name, email, password, image) {
  const checkEmail = await this.findOne({ email }); // db de aynı email den var mı diye arıyoruz
  if (checkEmail) {
    throw Error("Email zaten kayıtlı");
  }

  const salt = await bcrypt.genSalt(10); // 10 basamaklı bir şifre oluşturuyoruz
  const hashPassword = await bcrypt.hash(password, salt); // random şifre ile parolamızı eşleştiriyoruz

  const newUser = await this.create({
    name,
    email,
    password: hashPassword,
    image,
  });

  return newUser;
};

module.exports = mongoose.model("User", userSema);
