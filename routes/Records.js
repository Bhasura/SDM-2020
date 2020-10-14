const express = require("express");
const records = express.Router();
const cors = require("cors");

const Record = require("../models/Record");
records.use(cors());

records.get("/records", function (req, res) {
  claims = req.query.claims;
  research_methodology = req.query.research_methodology;
  se_practice = req.query.se_practice;

  if (se_practice === undefined || se_practice.includes("ALL")) {
    se_practice = ["TDD", "Agile"];
  }
  if (claims === undefined || claims.includes("ALL")) {
    claims = ["TDD-Improves Code Quality", "TDD-Improves Team Confidence"];
  }
  if (research_methodology === undefined || research_methodology.includes("ALL")) {
    research_methodology = ["Case Study", "Survey"];
  }

  console.log(se_practice);
  console.log(claims);
  console.log(research_methodology);

  Record.find(
    {
      se_practice: {$in: se_practice} ,
      claims: {$in: claims},
      research_methodology: {$in: research_methodology},
      year: { $gte: req.query.from_date, $lte: req.query.to_date },
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
