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
  experience: [
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  education: [
    {
      school: {
        type: String,
        required: true
      },
      degree: {
        type: String
      },
      fieldofstudy: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    insta: {
      type: String
    }
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
  },
  date: {
    type: Date,
    default: Date.now
  },
  company: {
    type: String
  }
});

//Mongoose method 'model' allows us to pass in a name and Schema object
module.exports = Profile = mongoose.model("profile", ProfileSchema);
