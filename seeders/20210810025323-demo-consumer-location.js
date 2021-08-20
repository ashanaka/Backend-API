'use strict';

const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) =>
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    queryInterface.bulkInsert('ConsumerLocations', [
      {
        coordinates: db.sequelize.fn(
          'ST_MakePoint',
          '5.944847331848458',
          '80.54872149000342'
        ),
        userid: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        coordinates: db.sequelize.fn(
          'ST_MakePoint',
          '6.03705329857342',
          '80.224814630647'
        ),
        userid: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),
  down: async (queryInterface, Sequelize) =>
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    queryInterface.bulkDelete('ConsumerLocations', null, {}),
};
