//routing : belli url adreslerine kullanıcıdan gelen istekleri ilgili fonksiyonlara yönlendirmeye yarar
const express = require("express");
const { blogCreate } = require("../controllers/blogControllers");

const router = express.Router();

// router.get("/");

// router.get("/:id");

router.post("/", blogCreate);

// router.delete("/:id");

// router.patch("/:id");

module.exports = router;
