'use strict';
module.exports = (sequelize, DataTypes) => {
  var game = sequelize.define('game', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  game.associate = function(models) {
    // associations can be defined here
  };
  return game;
};