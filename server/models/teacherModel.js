const mongoose = require("mongoose");

const addNewTeacter = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    unique: false,
  },
  // lastname: {
  //   type: String,
  //   required: true,
  //   unique: false,
  // },

  email: {
    type: String,
    required: true,
    unique: false,
  },

  degree: {
    type: String,
    required: true,
    unique: false,
  },
  subjects: {
    type: String,
    required: true,
    unique: false,
  },
});

module.exports = mongoose.model("Teachers", addNewTeacter);
