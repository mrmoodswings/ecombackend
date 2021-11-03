const Models = require("../../../models");

module.exports = {
  getAllusers: async () => {
    try {
      const users = await Models.users.findAll();
      return users;
    } catch (error) {
      throw new Error(error);
    }
  },
  getUser: async (userId) => {
    try {
      const user = await Models.users.findOne({ where: { id: userId } });
      return user;
    } catch (error) {
      throw new Error(error);
    }
  },
  createUser: async (data) => {
    try {
      const user = await Models.users.create(data)
      return user;
    } catch (error) {
      throw new Error(error);
    }
  },
  updateUser: async (data, userId) => {
    try {
      const user = await Models.users.findOne({ where: { id: userId } });
      if (data.image) user.image = data.image;
      if (data.status) user.status = data.status;
      await user.save();
      return user;
    } catch (error) {
      throw new Error(error);
    }
  },
};
