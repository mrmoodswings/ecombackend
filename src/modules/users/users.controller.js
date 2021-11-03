
const Service = require("./users.service");
const Validator = require("./users.validator");
const Utils = require("../../utils/utils");
module.exports = {
  
  createUser: async (req, res, next) => {
    try {
      const data = req.body;
      if (req.file) data.image = req.file.filename;
      const validationError = await Validator.validate(data);
      if (validationError.length > 0) {
        return res.json({
          status: false,
          errors: validationError,
        });
      } else {
        data.password = await Utils.hashPassword(data.password);
        const users = await Service.createUser(data);
        return res.json({
          status: true,
          message: "User Created Succesfully",
          data: users,
        });
      }
    } catch (error) {
      next(error);
    }
  },
  updateUser: async (req, res, next) => {
    try {
      const userId = req.params.id;
      const data = req.body;
      if (req.file) data.image = req.file.filename;
      const user = await Service.updateUser(data,userId);
      return res.json({
        status: true,
        message: "User updated Successfully",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteUser: async (req, res, next) => {
    try {
      const userId = req.params.id;
      await Service.deleteUser(userId);
      return res.json({
        status: true,
        message: "User deleted Successfully",
      });
    } catch (error) {}
  },
};
