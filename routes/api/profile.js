const passport = require("passport");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const validateProfileData = require("../../validation/profile");
const validateExperienceData = require("../../validation/experience");
const validateEducationData = require("../../validation/education");

//! client requests https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#4xx_Client_errors

/**
 * !Import Profile Model and User Model
 */
const Profile = require("../../models/Profile");
const User = require("../../models/User");

/**
 * ! GET User api/profile
 *
 *
 * @private
 */
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    // authenticate user profile from jwt and validate if the current profile has the correct id
    // if not update errors object with error message and return that json with a 404
    Profile.findOne({ user: req.user.id })
      .populate("user", ["name", "avatar"])
      .then(userProfile => {
        if (!userProfile) {
          errors.invalidProfile = "The profile you are looking for is invalid";
          return res.status(404).json(errors);
        }
        res.json(userProfile);
      })
      .catch(err => res.json(err));
  }
);

/**
 * ! GET User api/profile/user/:user_id
 * * req.params will use what the :parameter if assigned
 * * get handle from user id
 *
 * @public
 */
router.get("/user/:user_id", (req, res) => {
  const errors = {};

  Profile.findOne({ user: req.params.user_id })
    .populate("user", ["name", "avatar"])
    .then(userProfile => {
      if (!userProfile) {
        errors.invalidProfile = "The profile you are looking for is invalid";
        return res.status(404).json(errors);
      }
      res.json(userProfile);
    })
    .catch(err => res.json({ profile: "There is no profile for this user" }));
});

/**
 * ! GET User api/profile/handle/:handle
 * * req.params will use what the :parameter if assigned
 * * get user profile from user handle
 *
 * @public
 */
router.get("/handle/:handle", (req, res) => {
  const errors = {};

  Profile.findOne({ handle: req.params.handle })
    .populate("user", ["name", "avatar"])
    .then(userProfile => {
      if (!userProfile) {
        errors.invalidProfile = "The profile you are looking for is invalid";
        return res.status(404).json(errors);
      }
      res.json(userProfile);
    })
    .catch(err => res.json(err));
});

/**
 * ! GET User api/profile/all
 * * req.params will use what the :parameter if assigned
 * * get all user profiles
 *
 * @public
 */
router.get("/all", (req, res) => {
  const errors = {};

  Profile.find()
    .populate("user", ["name", "avatar"])
    .then(userProfiles => {
      if (!userProfiles) {
        errors.invalidProfile = "The are no user profiles";
        return res.status(404).json(errors);
      }
      res.json(userProfiles);
    })
    .catch(err => res.json(err));
});

/**
 * ! POST User api/profile
 * * Create user profile
 *
 * @private
 */
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileData(req.body);

    //* check if isValid is false
    if (!isValid) {
      return res.status(400).json(errors);
    }
    //! Profile Object for Profile Details
    const profileInfo = {};
    profileInfo.user = req.user.id;
    if (req.body.handle) profileInfo.handle = req.body.handle;
    if (req.body.company) profileInfo.company = req.body.company;
    if (req.body.website) profileInfo.website = req.body.website;
    if (req.body.bio) profileInfo.bio = req.body.bio;
    if (req.body.location) profileInfo.location = req.body.location;
    if (req.body.status) profileInfo.status = req.body.status;

    //! Social Object
    profileInfo.social = {};
    if (req.body.youtube) profileInfo.social.youtube = req.body.youtube;
    if (req.body.twitter) profileInfo.social.twitter = req.body.twitter;
    if (req.body.linkedin) profileInfo.social.linkedin = req.body.linkedin;
    if (req.body.insta) profileInfo.social.insta = req.body.insta;
    if (req.body.facebook) profileInfo.social.facebook = req.body.facebook;

    // check if skills is an array
    if (typeof req.body.skills !== "undefined") {
      profileInfo.skills = req.body.skills.split(",");
    }

    const profileIdentifier = { user: req.user.id };
    // ! Update profile with profiles objects for the user
    Profile.findOne(profileIdentifier).then(profile => {
      // ! If the profile exists update that profile
      // * using findOneAndUpdate method -> findOneAndUpdate(conditions, update, options, callback)
      // ? http://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate
      if (profile) {
        Profile.findOneAndUpdate(
          // condition/query - >{}
          profileIdentifier,
          // update -> {}
          { $set: profileInfo },
          // options --> {} new: bool - if true, return the modified document rather than the original. defaults to false (changed in 4.0)
          { new: true }
        )
          .then(profile => {
            // send response with json data of profile
            res.json(profile);
          })
          .catch(err => res.json(err));
      } else {
        // Create profile if one does not exist
        // to do so validate the user/url handle
        Profile.findOne({ handle: profileInfo.handle })
          .then(profile => {
            // if the handle exists return json error
            if (profile) {
              errors.handle = "Handle already exists";
              //return client 400 bad request and json with error
              res.status(400).json(errors);
            }
            // create new profile
            new Profile(profileInfo).save().then(profile => res.json(profile));
          })
          .catch(err => res.json(err));
      }
    });
  }
);

/**
 * ! Post User api/profile/experience
 * * post user experience object from requested fields
 * *
 *
 * @private
 */

router.post(
  "/experience",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateExperienceData(req.body);

    //* check if isValid is false
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Profile.findOne({ user: req.user.id }).then(profile => {
      // create experience object and necessary fields
      const currentExperience = {
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description
      };

      // add to the array
      profile.experience.unshift(currentExperience);
      profile.save().then(profile => res.json(profile));
    });
  }
);

/**
 * ! Post User api/profile/education
 * * post user education object from requested fields
 * *
 *
 * @private
 */

router.post(
  "/education",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEducationData(req.body);

    //* check if isValid is false
    if (!isValid) {
      return res.status(400).json(errors);
    }
    Profile.findOne({ user: req.user.id }).then(profile => {
      // create experience object and necessary fields
      const educationObj = {
        school: req.body.school,
        degree: req.body.degree,
        fieldofstudy: req.body.fieldofstudy,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description
      };

      // create education on profile and  move object add to the array
      profile.education.unshift(educationObj);
      profile.save().then(profile => res.json(profile));
    });
  }
);

// @route   DELETE api/profile/experience/:exp_id
// @desc    Delete experience from profile
// @access  Private
router.delete(
  "/experience/:exp_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        // use map on experience array to return the array of current items with id's, then find
        // index of the current params id in that array
        // store in removeIndex
        const removeIndex = profile.experience
          .map(item => item.id)
          .indexOf(req.params.exp_id);

        // Splice out of array
        profile.experience.splice(removeIndex, 1);

        // Save
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => res.status(404).json(err));
  }
);

/**
 * !DELETE api/profile
 *
 * * Delete education and profile
 *
 * @private
 */

router.delete(
  "/education/:edu_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // find user profile by id
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        // use map on education array to return the array of current items with id's, then find
        // index of the current params id in that array
        // store in removeIndex
        const removeIndex = profile.education
          .map(item => item.id)
          .indexOf(req.params.edu_id);

        // Splice out of array
        profile.education.splice(removeIndex, 1);

        // Save
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => res.status(404).json(err));
  }
);

/**
 * !DELETE api/profile
 *
 * * Delete user and profile
 *
 * @private
 */

router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() =>
        res.json({ success: true })
      );
    });
  }
);

module.exports = router;
