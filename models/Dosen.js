const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

const DosenSchema = new mongoose.Schema({
  id: {
    type: Number,
    require: true
  },
  nama: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const dosen = mongoose.model("Dosen", DosenSchema, "dosen");

module.exports = dosen;
