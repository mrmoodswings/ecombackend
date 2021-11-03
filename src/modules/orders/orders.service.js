const Models = require("../../../models");
const Utils = require("../../utils/utils");
const Op = Models.Sequelize.Op;
const APIError = require("../../utils/error");
const { sequelize } = require("../../../models");
module.exports = {
  getOrders: async (query) => {
    try {
      const orders = await Models.orders.findAll();
      return orders;
    } catch (error) {
      throw new Error(error);
    }
  },
  getOrder: async (orderId) => {
    try {
      const order = await Models.orders.findOne({
        where: {
          id: orderId,
        },
      });
      return order;
    } catch (error) {
      throw new Error(error);
    }
  },

  createOrder: async (data) => {
    let transaction;
    try {
      transaction = await Models.sequelize.transaction();
      const order = await Models.orders
        .create(
          {
            customer_id: data.customer_id ?? null,
            first_name: data.first_name,
            last_name: data.last_name,
            address: data.address,
            town: data.town,
            pincode: data.postalCode,
            payment_status: "PENDING",
            order_status: "PROCESSING",
            phone: data.phone,
            email:data.email,
            grand_total: data.grand_total,
            shipping_rate:data.shipping_rate
          },
          { transaction }
        )
        .then(async (result) => {
          const orderData = data.order_details;
          if (orderData) {
            orderData.forEach(async (value, index) => {
              let itemId = value.id;
              const items = await Models.products.findOne({
                where: { id: itemId },
              });
              if (items) {
                const data = await Models.order_details.create(
                  {
                    product_id:itemId,
                    product_name: items.name,
                    qty: value.quantity,
                    price: items.price,
                    order_id: result.id,
                  },
                  
                );

              }
            });

          }
          return data

        });
      await transaction.commit();
      return order;
    } catch (error) {
      if (transaction) {
        await transaction.rollback();
      }
      throw new Error(error);
    }
  },
};
