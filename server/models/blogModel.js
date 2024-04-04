const mongoose = require("mongoose");
const Sema = mongoose.Schema;
const blogSema = Sema(
  {
    category: {
      type: String,
      required: [true, "Kategori seçilmelidir"],
    },
    title: {
      type: String,
      required: [true, "Başlık zorunlu"],
    },
    text: {
      type: String,
      required: [true, "Metin zorunlu"],
    },
    image: {
      type: String,
      required: [true, "Resim zorunlu"],
    },
    authorName: {
      type: String,
      required: true,
    },
    authorEmail: {
      type: String,
      required: true,
    },
    authorImage: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Blog", blogSema);
