var express = require('express');
var router = express.Router();

const aBrighterDay = "A Brighter Day";
const cirqueDuZeppelin = "Cirque du Zeppelin";
const hard = "HARD";
const expert = "EXPERT";

/* GET song list. */
router.get('/songs', function(req, res) {
  const songlist = [
    {id: 1, name: aBrighterDay, package: cirqueDuZeppelin, difficult: hard, rating: 11, bpm: 155, total16th: 16},
    {id: 2, name: aBrighterDay, package: cirqueDuZeppelin, difficult: expert, rating: 12, bpm: 155, total16th: 32},
  ];
  res.json(songlist);
});

module.exports = router;
