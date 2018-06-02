/**
 *
 * !Module dependencies.
 * @param
 */

const express = require("express");
const mongoose = require("mongoose");
const app = express();

/**
 * ! Grab data from mongoDatabase URI
 *
 * * require("./config/keys") returns  { mongURI: 'string'}
 * * monogData has mongoURI value which is a string
 *
 * @param
 */
const mongoData = require("./config/keys").mongoURI;

/**
 * !import routes
 *
 * * users, posts, profile
 * * ./routes/api/<route name>
 *
 * @param
 */
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

/**
 * !Using Mongoose we connect to the mongoDB
 *
 * *  the connect method returns a promise
 *
 * @param
 */
mongoose
  .connect(mongoData)
  .then(() => console.log("DB is connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("HEL");
});

const port = 5000;

app.listen(port, console.log(`listening on port ${port}`));
