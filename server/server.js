const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const blogsRoute = require("./routes/blogsRoute");
const userRoute = require("./routes/userRoute");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Bağlantı başarılı");
      console.log(`${process.env.PORT}.port dinleniyor`);
    });
  })
  .catch((err) => {
    console.log(err + "bağlantı başarısız");
  });

app.use("/api/notes", blogsRoute);
app.use("/api/user", userRoute);
