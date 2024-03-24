//routing : belli url adreslerine kullanıcıdan gelen istekleri ilgili fonksiyonlara yönlendirmeye yarar
const express = require("express");
const {
  blogCreate,
  blogsGet,
  blogGet,
  blogDelete,
  blogUpdate,
} = require("../controllers/blogControllers");

const router = express.Router();

router.get("/", blogsGet);

router.get("/:id", blogGet);

router.post("/", blogCreate);

router.delete("/:id", blogDelete);

router.patch("/:id", blogUpdate);

module.exports = router;
