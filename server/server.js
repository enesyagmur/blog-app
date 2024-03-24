const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(4000, () => {
      console.log("Bağlantı başarılı");
      console.log("4000. port dinleniyor");
    });
  })
  .catch((err) => {
    console.log(err + "bağlantı başarısız");
  });
