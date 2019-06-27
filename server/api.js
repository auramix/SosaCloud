const db = require('../db/index.js');
var mysql = require('mysql')

// Given a track's id query the database for 3 random tracks to populate related tracks component
const getRelatedTracks = function (id, callbk) {
  db.connection.query('SELECT * FROM `tracks` ORDER BY `numPlays` ASC LIMIT 3', (err, results) => {
    callbk(err, results);
  })
}

exports.getRelatedTracks = getRelatedTracks;