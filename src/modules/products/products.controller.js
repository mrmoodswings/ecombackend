const Service = require("./products.service");
const Validator = require("./products.validator");
module.exports = {
  getProducts: async (req, res, next) => {
    try {
      const items = await Service.getProducts(req.query);
      return res.json({ status: true, data: items });
    } catch (error) {
      next(error);
    }
  },
  getProduct: async (req, res, next) => {
    try {
      const itemId = req.params.id;
      const item = await Service.getProduct(itemId);
      return res.json({
        status: true,
        data: item,
      });
    } catch (error) {
      next(error);
    }
  },
  createProduct: async (req, res, next) => {
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
        const items = await Service.createProduct(data);
        return res.json({
          status: true,
          message: "Item Created Succesfully",
          data: items,
        });
      }
    } catch (error) {
      next(error);
    }
  },
  updateItem: async (req, res, next) => {
    try {
      const itemId = req.params.id;
      const data = req.body;
      console.log(req);
      const item = await Service.updateItem(data, itemId);
      return res.json({
        status: true,
        message: "Item Updated Successfully",
        data: item,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteItem: async (req, res, next) => {
    try {
      const itemId = req.params.id;
      await Service.deleteItem(itemId);
      return res.json({
        status: true,
        message: "Item Deleted Successfully",
      });
    } catch (error) {
      next(error);  
    }
  },
};
