var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET song list. */
router.get('/songs', function(req, res) {
  models.charts.findAll({
    // required: true=INNER JOIN, false=LEFT OUTER JOIN
    include: [{
      model: models.songs,
      required: false,
      // required: true=INNER JOIN, false=LEFT OUTER JOIN
      include: [{
        model: models.packages,
        required: false,
      }]
    }]
  }).then(results => {
    let songs = []
    for (const result of results) {
      const song = {
        "id": result.id,
        "song": result.song.name,
        "package": result.song.package.name,
        "chart_type_id": result.chart_type_id,
        "rating": result.rating,
        "bpm": result.song.bpm,
        "total_of_16th": result.total_of_16th,
      }
      songs.push(song);
    }
    res.json(songs);
  });
});

module.exports = router;
