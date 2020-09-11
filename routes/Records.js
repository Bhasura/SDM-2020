const express = require('express')
const records = express.Router()
const cors = require('cors')

const Record = require('../models/Record')
records.use(cors())

records.get('/user',function(req, res) {

    Record.find({$or:[{region: "NA"},{sector:"Some Sector"}]}, function(err, records)  
    {
       if (err)
       {
           res.send(err);
       }
       console.log(records);
       res.json(records);
   
    });
   });


module.exports = records