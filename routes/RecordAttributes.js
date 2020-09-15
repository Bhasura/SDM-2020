const express = require("express");
const records = express.Router();
const cors = require("cors");

const RecordAttributes = require("../models/RecordAttributes")
records.use(cors());

records.get("/record_attributes/se_practices", function (req, res) {
    RecordAttributes.find({}, {se_practice:1, _id:0},
      function (err, records) {
        if (err) {
          res.send(err);
        }
        console.log(records);
        res.json(records);
      }
    )
   }
  )
  
  records.get("/record_attributes/tdd_claims", function (req, res) {
    RecordAttributes.find({}, {tdd_claims:1, _id:0},
      function (err, records) {
        if (err) {
          res.send(err);
        }
        console.log(records);
        res.json(records);
      }
    )
   }
  )

  module.exports = records;
