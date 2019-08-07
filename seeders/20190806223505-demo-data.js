'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('todolists', [
      {
       task   : 'As a user, I should be able to add a task',
       status : 'completed',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       task   : 'As a user, I should be able to list all my active tasks',
       status : 'active',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       task   : 'As a user, I should be able to list all my completed tasks',
       status : 'completed',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       task   : 'As a user, I should be able to delete a task',
       status : 'completed',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       task   : 'As a user, I should be able to edit a task',
       status : 'active',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       task   : 'As a user, I should be able to mark a task as completed',
       status : 'active',
       createdAt: new Date(),
       updatedAt: new Date()
    }],{})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('todolists', null, {});
  }
};
