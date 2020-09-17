const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecordAttributesSchema = new Schema({
  se_practice: {
    type: []
  },
  tdd_claims: {
    type: []
  }
});

module.exports = RecordAttributes = mongoose.model("record_attributes", RecordAttributesSchema);
