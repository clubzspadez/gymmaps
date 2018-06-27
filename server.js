/**
 * !Module dependencies.
 */

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");

//* Port
const port = 5000;

/**
 * ! Grab data from mongoDatabase URI
 *
 * * require("./config/keys") returns  { mongURI: 'string'}
 * * monogData has mongoURI value which is a string
 *
 * @private
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
 * ! Setting up body parser as top-level middleware
 *
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * !Using Mongoose we connect to the mongoDB
 * *  the connect method returns a promise
 */

mongoose
  .connect(mongoData)
  .then(() => console.log("DB is connected"))
  .catch(err => console.log(err));

//! Passport middleware
//* https://www.npmjs.com/package/passport
app.use(passport.initialize());

//! Passport Config
require("./config/passport")(passport);

/**
 * !Use express routes
 *
 * * (server route, and js file)
 *
 * @public
 */
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profile", profile);

app.listen(port, console.log(`listening on port ${port}`));
