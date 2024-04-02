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

module.exports = mongoose.model("User", userSema);
