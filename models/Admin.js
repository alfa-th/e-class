const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

const AdminSchema = new mongoose.Schema({
  id: {
    type: Number,
    require: true
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

const admin = mongoose.model("Admin", AdminSchema, "admin");

module.exports = admin;
