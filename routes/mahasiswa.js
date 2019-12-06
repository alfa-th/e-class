const express = require("express");
const router = express.Router();
const Mahasiswa = require("../models/Mahasiswa");
// const bcrypt = require("bcryptjs");

router.get("/", (req, res) => {
  if (req.session.namaUser != "mahasiswa") {
    res.redirect("/login");
  } else {
    res.render("mahaiswa");
  }
});

module.exports = router;