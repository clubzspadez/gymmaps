const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Post = require("../../models/Post");
const Profile = require("../../models/Profile");
router.get("/test", (req, res) => res.json({ test: "this is working" }));
const validatePostData = require("../../validation/post");

/**
 * ! GET POSTS api/posts
 *
 * * Get Posts
 *
 * @public
 */
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => {
      if (!posts) {
        return res.status(404).json({ invalidPostsRequest: "No Posts Found" });
      }
      res.json(posts);
    })
    .catch(err =>
      res.status(404).json({ invalidPostsRequest: "No Posts Found" })
    );
});

/**
 * ! GET POST api/post
 *
 * * Get Post by id param
 *
 * @public
 */
router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err =>
      res.status(404).json({ invalidPostRequest: "No Post Found" })
    );
});

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
  (req, res) => {
    // validation
    const { errors, isValid } = validatePostData(req.body);

    //* check if isValid is false
    if (!isValid) {
      return res.status(400).json(errors);
    }

    // schema
    let newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id
    });

    newPost
      .save()
      .then(post => res.json(post))
      .catch(err => res.json({ error: err }));
  }
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          if (post.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ unauthirozed: "Authentication is needed" });
          }

          post
            .remove()
            .then(() => res.json({ success: true }))
            .catch(err => res.json({ error: err }));
        })
        .catch(err => res.status(404).json({ notfound: "Post not found" }));
    });
  }
);

/**
 *   POST api/posts/like/:id
 *
 * * like post
 *
 *
 * @private
 */

router.post(
  "/like/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let currentUser = { user: req.user.id };
    Post.findById(req.params.id)
      .then(post => {
        // check to see if there is already a like in the posts.likes object/array
        if (
          post.likes.filter(like => like.user.toString() === req.user.id)
            .length > 0
        ) {
          //if there is since array size is bigger than 0 then the post is there already return  error
          return res.status(401).json({ postLiked: "Post was already liked" });
        }

        // since there is no like push one to the array
        post.likes.push(currentUser);

        // save to DB
        post
          .save()
          .then(post => res.json(post))
          .catch(err => res.json({ err: err }));
      })
      .catch(err => res.status(404).json({ notfound: "Post not found" }));
  }
);
module.exports = router;
