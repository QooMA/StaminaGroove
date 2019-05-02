'use strict';
module.exports = (sequelize, DataTypes) => {
  const charts = sequelize.define('charts', {
    song_id: DataTypes.INTEGER,
    chart_type_id: DataTypes.SMALLINT,
    rating: DataTypes.SMALLINT,
    total_of_16th: DataTypes.SMALLINT
  }, {
    underscored: true,
  });
  charts.associate = function(models) {
    // associations can be defined here
  };
  return charts;
};