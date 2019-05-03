'use strict';
module.exports = (sequelize, DataTypes) => {
  const songs = sequelize.define('songs', {
    package_id: DataTypes.SMALLINT,
    name: DataTypes.STRING,
    bpm: DataTypes.SMALLINT
  }, {
    underscored: true,
  });
  songs.associate = function(models) {
    // associations can be defined here
    songs.belongsTo(models.packages, {foreignKey: 'package_id'});
    songs.hasMany(models.charts, {foreignKey: 'song_id'});
  };
  return songs;
};