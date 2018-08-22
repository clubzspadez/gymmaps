const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

router.get("/test", (req, res) => res.json({ test: "this is working" }));

/**
 *   POST api/posts
 *
 * * create post
 *
 *
 * @private
 */

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {}
);

module.exports = router;
