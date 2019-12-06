const express = require("express");
const router = express.Router();
const Dosen = require("../models/Dosen");
const Mahasiswa = require("../models/Mahasiswa");
// const bcrypt = require("bcryptjs");

router.get("/", (req, res) => {
  if (req.session.authorized) {
    Mahasiswa.find({}, (err, docs) => {
      res.render("dosen", {
        title: "Dosen View",
        namaDosen: req.session.namaDosen,
        mahasiswa: docs
      });
    });
  } else {
    return res.render("login");
  }
});

router.post("/", (req, res) => {
  if (req.session.authorized) {
    Mahasiswa.countDocuments({}, (err, documentCount) => {
      new Mahasiswa({
        id: documentCount + 1,
        nama: req.body.name,
        email: req.body.email,
        password: req.body.password,
        kelas: req.body.kelas
      }).save((err, product) => {
        if (err) throw err;

        console.log(product);

        return res.redirect("/dosen");
      });
    });
  } else {
    Dosen.findOne({ email: req.body.email }, (err, docs) => {
      if (err) throw err;

      if (!docs || docs.password != req.body.password) {
        return res.render("login");
      }

      req.session.authorized = true;
      req.session.idDosen = docs.id;
      req.session.namaDosen = docs.nama;

      return res.redirect("/dosen");
    });
  }
});

module.exports = router;
