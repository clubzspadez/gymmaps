const JwtStrat = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("User");
const keys = require("../config/keys");

/**
 * !Example of Config
 *
 * * https://github.com/themikenicholson/passport-jwt
 * * specify opts, formrequest, and secret key
 *
 */

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secret;

module.exports = passport => {
  passport.use(
    // ! jwt_payload is an object literal containing the decoded JWT payload.
    //* Pass in options to new Instance of JwtStrategy

    new JwtStrat(opts, (jwt_payload, done) => {
      let payload = jwt_payload;
      console.log(payload);
      User.findOne({ id: jwt_payload.id }, (err, user) => {});
    })
  );
};
