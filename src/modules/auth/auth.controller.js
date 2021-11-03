const jwt = require("jsonwebtoken");
const passport = require("passport");
const Service = require("./auth.service");
const _ = require("lodash");
//initialize passport strategy
require("./auth.strategy")(passport);

module.exports = {
  /**
   * @async
   * @function login
   * @description Login to app.
   */
  login: async (req, res, next) => {
    try {
      const userdata = req.body;
      const user = await Service.login(userdata);
      const tokenData = _.pick(user, ["id", "name"]);
      //sign payload with jwt
      const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRATION_TIME,
      });

      const refreshToken = await jwt.sign(
        tokenData,
        process.env.JWT_REFRESH_SECRET,
        {
          expiresIn: process.env.JWT_EXPIRATION_TIME,
        }
      );
      return res.json({
        token,
        refreshToken,
        message: "Login Succesful",
        user: user,
      });
    } catch (error) {
      next(error);
    }
  },

  refreshToken: async (req, res, next) => {
    try {
      const refreshToken = req.body.token;
      if (!refreshToken) {
        return res.status(403).json({ message: "User not authenticated" });
      }
      jwt.verify(
        refreshToken,
        process.env.JWT_REFRESH_SECRET,
        async (err, user) => {
          if (!err) {
            const tokenData = _.pick(user, ["id", "name"]);
            const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
              expiresIn: process.env.JWT_EXPIRATION_TIME,
            });
            const newRefreshToken = await jwt.sign(
              tokenData,
              process.env.JWT_REFRESH_SECRET,
              {
                expiresIn: process.env.JWT_EXPIRATION_TIME,
              }
            );
            return res.json({
              token: token,
              refreshToken: newRefreshToken,
            });
          }
        }
      );
    } catch (error) {}
  },
};
