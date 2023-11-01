'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('logins', [
    {
    username:"richoco",
    email:"richoco@gmail.com",
    password:"12345678",
    phone_number:"086789432",
    createdAt:new Date(),
    updatedAt:new Date()
   },
    {
    username:"richisee",
    email:"richosee@gmail.com",
    password:"45678901",
    phone_number:"0812345",
    createdAt:new Date(),
    updatedAt:new Date()
   },
    {
    username:"richico",
    email:"richico@gmail.com",
    password:"89012345",
    phone_number:"08154367",
    createdAt:new Date(),
    updatedAt:new Date()
   },
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
