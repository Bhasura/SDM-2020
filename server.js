var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
const path = require("path");
var app = express();
const mongoose = require("mongoose");
var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

const mongoURI =
  "mongodb+srv://Brian:Seerteam3@cluster0.qv19c.mongodb.net/test?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

var Users = require("./routes/Users");
var Records = require("./routes/Records");
var RecordAttributes = require("./routes/RecordAttributes");
app.use("/", Users, Records, RecordAttributes);

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, function () {
  console.log("Server is running on port: " + port);
});
