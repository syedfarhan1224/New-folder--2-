const mongoose = require("mongoose");

const addNewClass = new mongoose.Schema({
  room: {
    type: String,
    required: true,
    unique: false,
  },
  teacher: {
    type: String,
    required: true,
    unique: false,
  },

  class: {
    type: String,
    required: true,
    unique: false,
  },
  subject: {
    type: String,
    required: true,
    unique: false,
  },

  day: {
    type: String,
    required: true,
    unique: false,
  },
  startTime: {
    type: String,
    required: true,
    unique: false,
  },
  endTime: {
    type: String,
    required: true,
    unique: false,
  },
});

module.exports = mongoose.model("Classes", addNewClass);
