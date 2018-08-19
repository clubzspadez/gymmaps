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
const ObjectId = Schema.Types.ObjectId;

const PostSchema = new Schema({
  user: {
    type: ObjectId,
    ref: "users"
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  likes: [
    {
      user: {
        type: ObjectId,
        ref: "users"
      }
    }
  ],
  comments: [
    {
      user: {
        type: ObjectId,
        ref: "users"
      },
      date: {
        type: Date,
        default: Date.now
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

//Mongoose method 'model' allows us to pass in a name and Schema object
module.exports = Post = mongoose.model("post", PostSchema);
