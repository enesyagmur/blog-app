const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

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
  if (!email || !password || !name || !image) {
    throw Error("Bilgiler boş bırakılamaz");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email geçersiz");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error(
      "Parola en az 8 karakter uzunluğunda olmalı, küçük, büyük harf, rakam, özel karakter içermelidir."
    );
  }

  const checkEmail = await this.findOne({ email });
  if (checkEmail) {
    throw Error("Email zaten kayıtlı");
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const newUser = await this.create({
    name,
    email,
    password: hashPassword,
    image,
  });

  return newUser;
};

module.exports = mongoose.model("User", userSema);
