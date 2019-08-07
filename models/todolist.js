'use strict';
module.exports = (sequelize, DataTypes) => {
  const todolist = sequelize.define('todolist', {
    task: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  todolist.associate = function(models) {
    // associations can be defined here
  };
  return todolist;
};