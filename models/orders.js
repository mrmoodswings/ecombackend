'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  orders.init({
    customer_id: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    address: DataTypes.STRING,
    town: DataTypes.STRING,
    pincode: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    order_status: DataTypes.STRING,
    payment_status: DataTypes.STRING,
    shipping_rate:DataTypes.FLOAT,
    grand_total:DataTypes.FLOAT

  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};