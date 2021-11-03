'use strict';
const Utils = require("../src/utils/utils");
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
      "users",
      [
        {
          username: "superadmin",
          mobile:"9744971637",
          password: await Utils.hashPassword("admin123"),
          email: "superadmin@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
       
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
