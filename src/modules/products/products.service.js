const Models = require("../../../models");

module.exports = {
  getProducts: async (query) => {
    try {
      const items = await Models.products.findAll();
      return items;
    } catch (error) {
      throw new Error(error);
    }
  },
  getProduct: async (itemId) => {
    try {
      const item = await Models.products.findOne({ where: { id: itemId } });
      return item;
    } catch (error) {
      throw new Error(error);
    }
  },
  createProduct: async (data) => {
    try {
      const item = await Models.products.create(data);
      return item;
    } catch (error) {
      throw new Error(error);
    }
  },
};
