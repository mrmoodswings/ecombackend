//Register Routes
const auth = require("./auth/auth.routes");
const users = require("./users/users.routes");
const products = require('./products/products.routes');
const orders = require('./orders/orders.routes');
module.exports = function (app) {
  app.use("/auth", auth);
  app.use("/users", users);
  app.use("/products",products);
  app.use("/orders",orders);
};
