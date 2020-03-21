'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('appointments', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING       
      },
      teststation: {
        type: Sequelize.STRING,
        references: {
          model: 'teststations', // name of Target model
          key: 'id', // key in Target model that we're referencing
        }
      },
      timeslot: {
        type: Sequelize.TIMESTAMP
      },
      patientIdentifier: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Teststations');
  }
};
