// ! Dependencies
const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../../config/keys");

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
        //* use genSalt to create salt that will be addded to password
        //* genSalt(rounds, [optional]minor, [optional]cb);
        //? https://github.com/kelektiv/node.bcrypt.js

        bcrypt.genSalt(rounds, (err, salt) => {
          //! if you receive an error with postman, please
          //! restart server and then make a post request

          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;

            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    })
    .catch();
});

/**
 * ! GET API /login
 *
 * * Login user /return JWT toekn
 * * or details
 *
 * @public
 */

router.post("/login", (req, res) => {
  //grab email from body
  //grab password from body
  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  //User object calls findOne method which takes an object of the appropriate properties for that User model
  // the findOne method returns a promise
  User.findOne({ email: email }).then(user => {
    //! verify if the user is not returned
    if (!user) {
      //return a response with a 404 status and send a json response with an error for the email
      return res.status(404).json({ email: "Email not found" });
    }

    //! Check password for with bcrypt.compare method
    //* compare parsed password to return user.password
    //* compare() returns a promise
    bcrypt.compare(password, user.password).then(hash => {
      //* load hash from your password DB
      if (hash) {
        //User Matched

        const payload = { id: user.id, name: user.name, avatar: user.avatar };

        //Sign Token

        jwt.sign(payload, secret.secret, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        res.status(404).json({ password: "Password is incorrect" });
      }
    });
  });
});
module.exports = router;
