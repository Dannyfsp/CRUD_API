const mongoose = require("mongoose");

// model (schema) - skeleton of our data
const notePadSchema = new mongoose.Schema({
  topic: String,
  todo: String,
  date: Date,
});

const NotePad = mongoose.model("NotePad", notePadSchema);

module.exports = NotePad;
