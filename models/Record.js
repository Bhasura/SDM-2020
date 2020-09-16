const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecordSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  journal: {
    type: String,
    required: true,
  },
  se_practice: {
    type: String,
    required: true
  },
  claims: {
    type: [],
    required: true
  },
  doi: {
    type: String,
    required: true
  }
});

module.exports = Record = mongoose.model("records", RecordSchema);
