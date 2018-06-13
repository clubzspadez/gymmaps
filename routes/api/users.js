// ! Dependencies
const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");

/**
 * !Import User Model
 */
const User = require("../../models/User");

router.get("/test", (req, res) => res.json({ test: "this is working 3" }));

/**
 *  ! GET api/users/register
 *
 * * Register User, will check the current form to see if the email currently exists in MongoDB
 *
 * @public
 */

router.post("/register", (req, res) => {
  // Check and find if the user registering has the email listed in the req.body
  // findOne takes an object
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({ email: "Email exists" });
      } else {
        const rounds = 10;

        //* gravatar has two methods (url, and profile_url)
        //* both methods take parameters such as
        //* gravatar.url(email, options) || gravatar.url(email, options, protocol);
        //? for me info @ https://github.com/emerleite/node-gravatar

        const avatar = gravatar.url(req.body.email, {
          s: "200",
          r: "pg",
          d: "mm"
        });

        //* generate newUser model object and assign
        //* the data that is being parsed from the body

        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar: avatar,
          password: req.body.password
        });

        // ! Asynchronous Version 
        //* Generate bcrypt hash for password
        //* genSalt(rounds, [optional]minor, [optional]cb);
        //? https://github.com/kelektiv/node.bcrypt.js

        bcrypt.hash(newUser.password, rounds, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser.save().then.().
        });
      }
    })
    .catch();
});

module.exports = router;
