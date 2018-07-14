const passport = require("passport");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

/**
 * !Import Profile Model and User Model
 */
const Profile = require("../../models/Profile");
const User = require("../../models/User");

/**
 * ! GET User api/profile
 *
 *
 * @param
 */
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    // authenticate user profile from jwt and validate if the current profile has the correct id
    // if not update errors object with error message and return that json with a 404
    Profile.findOne({ user: req.user.id }).then(userProfile => {
      if (!userProfile) {
        errors.invalidProfile = "The profile you are looking for is invalid";
        return res.status(404).json(errors);
      }
      res.json(userProfile);
    });
  }
);
/**
 * ! POST User api/profile
 * * Create user profile
 *
 * @param
 */
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    //! Profile Object for Profile Details
    const profile = {};
    profile.user = req.user.id;
    if (req.body.handle) profile.handle = req.body.handle;
    if (req.body.experience) profile.experience = req.body.experience;
    if (req.body.website) profile.website = req.body.website;
    if (req.body.bio) profile.bio = req.body.bio;
    if (req.body.location) profile.location = req.body.location;
    if (req.body.status) profile.status = req.body.status;
    if (req.body.company) profile.company = req.body.company;
    if (req.body.status) profile.status = req.body.status;

    //! Social Object
    profile.social = {};
    if (req.body.youtube) profile.youtube = req.body.youtube;
    if (req.body.twitter) profile.twitter = req.body.twitter;
    if (req.body.linkedin) profile.linkedin = req.body.linkedin;
    if (req.body.insta) profile.insta = req.body.insta;
    if (req.body.facebook) profile.facebook = req.body.facebook;

    if (typeof req.body.skills !== "undefined") {
      profile.skills = req.body.skills.split(",");
    }

    // ! Update profile with profiles objects for the user
    Profile.findOne({ user: req.body.user }).then(profile => {
      // ! If the profile exists update that profile
      // * using findOneAndUpdate method
      if (profile) {
      } else {
      }
    });
  }
);

module.exports = router;
