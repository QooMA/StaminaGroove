'use strict';
module.exports = (sequelize, DataTypes) => {
  const packages = sequelize.define('packages', {
    name: DataTypes.STRING
  }, {
    underscored: true,
  });
  packages.associate = function(models) {
    // associations can be defined here
  };
  return packages;
};