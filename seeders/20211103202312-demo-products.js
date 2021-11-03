'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert(
      "products",
      [
        {
        "id":"1",
        "name":"DT36 Unisex Smartwatch Bluetooth Silver",
        "price":"240",
        "description":"Best Drip in the Market",
        "image":"items\/dt36.jpg",
        "createdAt":"0000-00-00 00:00:00",
        "updatedAt":"0000-00-00 00:00:00"
        },
        {
        "id":"2",
        "name":"Samsung Galaxy Watch ",
        "price":"50",
        "description":"Classy, Stylish",
        "image":"items\/sgw.jpg",
        "createdAt":"0000-00-00 00:00:00",
        "updatedAt":"0000-00-00 00:00:00"
        },
        {
        "id":"3",
        "name":"Samsung Galaxy S20 FE 5G 128GB ",
        "price":"1200",
        "description":"Elegance built in",
        "image":"items\/sg20.jpg",
        "createdAt":"0000-00-00 00:00:00",
        "updatedAt":"0000-00-00 00:00:00"
        },
        {
        "id":"4",
        "name":"Apple Watch Series 7 ",
        "price":"70",
        "description":"Sleek, Trendy, Clean",
        "image":"items\/a7.jpg",
        "createdAt":"0000-00-00 00:00:00",
        "updatedAt":"0000-00-00 00:00:00"
        },
        {
        "id":"5",
        "name":"Featured\nAmazfit T-Rex Pro Smartwatch",
        "price":"70",
        "description":"Fabulous, Exotic, Classy",
        "image":"items\/7.jpg",
        "createdAt":"0000-00-00 00:00:00",
        "updatedAt":"0000-00-00 00:00:00"
        },
        {
        "id":"6",
        "name":"New Apple iPhone 12 Pro Max ",
        "price":"170",
        "description":"Neat, Sleek, Smart",
        "image":"items\/i12.jpg",
        "createdAt":"0000-00-00 00:00:00",
        "updatedAt":"0000-00-00 00:00:00"
        },
        {
        "id":"11",
        "name":"Google Pixel 4A 128GB G025J ",
        "price":"170",
        "description":"Neat, Sleek, Smart",
        "image":"items\/gp.jpg",
        "createdAt":"0000-00-00 00:00:00",
        "updatedAt":"0000-00-00 00:00:00"
        }
        ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
