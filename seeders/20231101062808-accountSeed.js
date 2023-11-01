"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("accounts", [
      {
        email: "dmasiv@gmail.com",
        username: "Dmasiv",
        password: "dmasivcuyy",
        phone: "085647253362",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "dinorawr@gmail.com",
        username: "Dinomanjah__",
        password: "dinonihboss",
        phone: "085372173737",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "solikin123@gmail.com",
        username: "solikin_RT",
        password: "solikinbree",
        phone: "089546646622",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "premier@gmail.com",
        username: "premierMie",
        password: "premierpremium12345",
        phone: "088264672542",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
