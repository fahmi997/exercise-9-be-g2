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
   await queryInterface.bulkInsert('profiles', [
    {
      bio:"semangat",
      email:"richoco@gmail.com",
      username:"richoco",
      createdAt:new Date (),
      updatedAt: new Date ()
    },
    {
      bio:"fighting",
      email:"richosee@gmail.com",
      username:"richisee",
      createdAt:new Date (),
      updatedAt: new Date ()
    },
    {
      bio:"semangat",
      email:"richico@gmail.com",
      username:"richico",
      createdAt:new Date (),
      updatedAt: new Date ()
    },
   ]

   )
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
