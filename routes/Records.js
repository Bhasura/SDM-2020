const express = require("express");
const records = express.Router();
const cors = require("cors");

const Record = require("../models/Record");
const RecordAttributes = require("../models/RecordAttributes")
records.use(cors());

records.get("/records", function (req, res) {
  Record.find(
    {
      $or: [
        {
          se_practice: { $regex: ".*" + req.query.se_practice + ".*" },
        },
      ],
    },
    function (err, records) {
      if (err) {
        res.send(err);
      }
      console.log(records);
      res.json(records);
    }
  );
});

records.get("/record_attributes", function (req, res) {
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

module.exports = records;
