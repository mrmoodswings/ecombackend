const passport = require("passport");
const APIError = require("../../utils/error");

//Used to authenticate each protected route requests

module.exports = (req, res, next) => {
  //function to authenticate secure route
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    try {
      if (err) {
        throw new APIError(err.message, 401, err.stack);
      }
      if (info instanceof Error) {
        throw new APIError(info.message, 401, info.stack);
      }
      //pass data to next middleware
      req._user = user;
      next();
    } catch (ex) {
      next(ex);
    }
  })(req, res, next);
};
