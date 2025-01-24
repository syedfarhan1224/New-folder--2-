const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    unique: false,
  },

  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },

  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
});

module.exports = mongoose.model("adminRegister", adminSchema);
