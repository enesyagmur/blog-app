const mongoose = require("mongoose");
const Sema = mongoose.Schema;
const blogSema = Sema(
  {
    title: {
      type: String,
      required: [true, "Başlık zorunlu"],
    },
    text: {
      type: String,
      required: [true, "Metin zorunlu"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Blog", blogSema);
