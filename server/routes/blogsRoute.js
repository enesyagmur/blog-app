//routing : belli url adreslerine kullanıcıdan gelen istekleri ilgili fonksiyonlara yönlendirmeye yarar
const express = require("express");

const router = express.Router();

router.get("/");

router.get("/:id");

router.post("/");

router.delete("/:id");

router.patch("/:id");

module.exports = router;
