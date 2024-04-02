const mongoose = require("mongoose");

const Sema = mongoose.Schema;

const userSema = Sema({
  name: {
    type: String,
    required: [true, "İsim zorunlu"],
  },
  email: {
    type: String,
    required: [true, "Mail zorunlu"],
    unique: [true, "Mail zaten kayıtlı"],
  },
  password: {
    type: String,
    required: [true, "Şifre zorunlu"],
  },
  image: {
    type: String,
    required: [true, "Resim zorunlu"],
  },
});

userSema.static.signup = async function (name, email, password, image) {
  const checkEmail = await this.findOne({ email }); // db de aynı email den var mı diye arıyoruz
  if (checkEmail) {
    throw Error("Email zaten kayıtlı");
  }
};

module.exports = mongoose.model("User", userSema);
