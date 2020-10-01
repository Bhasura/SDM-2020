const express = require("express");
const records = express.Router();
const cors = require("cors");

const Record = require("../models/Record");
records.use(cors());

records.get("/records", function (req, res) {
  claims = req.query.claims
  research_methodology = req.query.research_methodology

  Record.find(
    {
      $or: [
        {
          $and: [
            {
              se_practice: { $regex: ".*" + req.query.se_practice + ".*" },
              year: { $gte: req.query.from_date, $lte: req.query.to_date },
            },
          ],
        },
        {
          $and: [
            {
              claims: { $in: claims },
              research_methodology: { $in: research_methodology },
              year: { $gte: req.query.from_date, $lte: req.query.to_date },
            },
          ],
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
