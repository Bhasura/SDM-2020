const express = require("express");
const users = express.Router();
const cors = require("cors");
const bcrypt = require("bcrypt");

const User = require("../models/User");
users.use(cors());

users.get("/users", function (req, res) {
  User.find(function (err, users) {
    if (err) {
      res.send(err);
    }
    console.log(users);
    res.json(users);
  });
});

users.post("/register", (req, res) => {
  const userData = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    organisation: req.body.organisation,
    user_type: req.body.user_type,
  };

  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          User.create(userData)
            .then((user) => {
              res.json({ status: user.email + "Registered!" });
            })
            .catch((err) => {
              res.send("error: " + err);
            });
        });
      } else {
        res.json({ error: "User already exists" });
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

module.exports = users;

module.exports = users;

module.exports = users;

module.exports = users;

module.exports = users;

module.exports = users;

module.exports = users;

module.exports = users;

module.exports = users;

module.exports = users;

module.exports = users;

module.exports = users;

module.exports = users;

module.exports = users;

module.exports = users;

module.exports = users;

module.exports = users;

module.exports = users;
