const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
// const bcrypt = require("bcryptjs");

router.get("/", (req, res) => {
  if (req.session.namaUser != "admin") {
    res.redirect("/login");
  } else {
    res.render("admin");
  }
});

module.exports = router;