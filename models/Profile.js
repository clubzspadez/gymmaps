/**
 * !ImportsDependencies/
 *
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * !Create Profile schema for MongoDb
 *
 * user, handle, company, website
 *
 */
const ObjectId = mongoose.Schema.Types.ObjectId;

const ProfileSchema = new Schema({
  user: {
    type: ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  company: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  // array of skills
  skills: {
    type: [String],
    required: true
  }
});
