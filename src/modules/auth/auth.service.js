const bcrypt = require("bcryptjs");
const Models = require("../../../models");
const Utils = require("../../utils/utils");
const APIError = require("../../utils/error");

module.exports = {
  /**
   * @async
   * @function login
   * @description Login a user with username & password.
   * @param {String} data.username - Username
   * @param {String} data.password - Password
   */
  login: async (data) => {
    Utils.required(["username", "password"], data);
    //database query for getting user by username
    const user = await Models.users.findOne({
      where: {
          [Models.Sequelize.Op.or]: {
              username: data.username,
              mobile: data.username,
          },
      },
  });
    console.log(user);
    //user not in database
    if (!user) {
      throw new APIError("Username or Password Incorrect", 401);
    }

    //validate password
    if (await bcrypt.compare(data.password, user.password)) {
      return user;
    } else {
      throw new APIError("Username or Password Incorrect", 401);
    }
  },
 
  /**
   * @function getUserByUserId
   * @description Returns only minimum amount of data about a user.
   * Only data from users table is returned.
   *
   * @param {Number} userId - User ID
   * @returns {Object} - details of a user.
   */
  async getUserByUserId(userId) {
    const user = await Models.users.findOne({
      where: {
        id: userId,
      },
    });
    return user;
  },
};
