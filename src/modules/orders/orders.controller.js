const Service = require("./orders.service");
module.exports = {
  getOrders: async (req, res, next) => {
    try {
      const orders = await Service.getOrders(req.query);
      return res.json({
        status: true,
        data: orders,
      });
    } catch (error) {
      next(error);
    }
  },
  getOrder: async (req, res, next) => {
    try {
      const orderId = req.params.id;
      const orders = await Service.getOrder(orderId);
      return res.json({
        status: true,
        data: orders,
      });
    } catch (error) {
      next(error);
    }
  },
  
  createOrder: async (req, res, next) => {
    try {
      const data = req.body;
      data.customer_id = req._user.id;
      const order = await Service.createOrder(data);
      return res.json({
        status: true,
        message: "Order created successfully",
        data: order,
      });
    } catch (error) {
      next(error);
    }
  },
};
