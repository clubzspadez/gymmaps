/**
 * !ImportsDependencies/
 *
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * !Create user schema for MongoDb
 *
 * Users: have the following
 * * A name, email, password, avatar, and the date the account is created
 * @param
 */

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

/**
 * ! Export user schema as a model object, named User
 *
 * @param
 */
module.exports = User = mongoose.model("users", UserSchema);
