const mongoose = require("mongoose");

const addNewSemesterSection = new mongoose.Schema({
  semester: {
    type: String,
    required: true,
    unique: false,
  },
  section: {
    type: String,
    required: true,
    unique: false,
  },
});

module.exports = mongoose.model("Semester&Section", addNewSemesterSection);
