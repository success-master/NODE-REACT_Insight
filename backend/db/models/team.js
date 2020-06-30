'use strict';
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    teamName: DataTypes.STRING
  }, {});
  Team.associate = function (models) {
    // associations can be defined here
    Team.belongsToMany(models.User, { through: 'teamuser', foreignKey: 'TeamId', as: 'users' });
  };
  return Team;
};