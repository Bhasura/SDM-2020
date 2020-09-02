const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080; // Step 1
const MONGODB_URI =
  "mongodb+srv://Brian:Seerteam3@cluster0.qv19c.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//check if mongoose is connected
mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const Schema = mongoose.Schema;
const BlogPostsSchema = new Schema({
  name: String,
});

const BlogPost = mongoose.model("BlogPosts", BlogPostsSchema);

app.get("/api", (req, res) => {
  BlogPost.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});
app.use(morgan("tiny"));

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
