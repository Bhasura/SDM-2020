const express = require("express");
const records = express.Router();
const cors = require("cors");

const Record = require("../models/Record");
records.use(cors());

records.get("/records", function (req, res) {
  Record.find(
    {
      $or: [
        {
          se_practice: { $regex: ".*" + req.query.search_description + ".*" },
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

module.exports = records;
