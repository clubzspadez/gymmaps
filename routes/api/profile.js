const express = require("express");
const router = express.Router();

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
router.get("/", passport.authenticate("jwt", { session: false }), (req, res) => {
  const errors = {};

  // authenticate user profile from jwt and validate if the current profile has the correct id
  // if not update errors object with error message and return that json with a 404
  Profile.findOne({user; req.user.id }).then(( userProfile) => {
    if(!userProfile){
      errors.invalidProfile = 'The profile you are looking for is invalid';
      return res.status(404).json(errors);
    }
  })
});

module.exports = router;
