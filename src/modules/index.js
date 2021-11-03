//Register Routes
const auth = require("./auth/auth.routes");
const users = require("./users/users.routes");
const products = require('./products/products.routes');
const orders = require('./orders/orders.routes');
module.exports = function (app) {
  app.use("/api/auth", auth);
  app.use("/api/users", users);
  app.use("/api/products",products);
  app.use("/api/orders",orders);
};
