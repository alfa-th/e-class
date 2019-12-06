const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

const MahasiswaSchema = new mongoose.Schema({
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
  },
  kelas: {
    type: [String],
    required: true
  }
});

const Mahasiswa = mongoose.model("mahasiswa", MahasiswaSchema, "mahasiswa");

module.exports = Mahasiswa;
