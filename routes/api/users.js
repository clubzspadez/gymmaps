const express = require("express");
const router = express.Router();

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
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar: avatar,
          password: req.body.password
        });
      }
    })
    .catch();
});

module.exports = router;
