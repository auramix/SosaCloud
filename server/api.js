const db = require('../db/index.js');

// Given a track's id query the database for 3 random tracks to populate related tracks component
const getRelatedTracks = function (id, callbk) {
  db.connection.query('SELECT * FROM `tracks` ORDER BY RAND() ASC LIMIT 3', (err, results) => {
    callbk(err, results);
  })
}

const getUserInfo = function (userName, callbk) {
  db.connection.query('SELECT * FROM `users` WHERE `userName`= ? LIMIT 1', [userName], (err, results) => {
    callbk(err, results);
  })
}

const getLikesInfo = function (trackId, callbk) {
  db.connection.query('SELECT * FROM `likes_tracks` WHERE `track_id`= ?', [trackId], (err, results, fields) => {
    callbk(err, results);
  })
}

// Given a track's id find no more than 3 playlists that include the give track
const getAssociatedPlaylists = function (trackId, callbk) {
  db.connection.query('SELECT * FROM `playlists_tracks` WHERE `track_id`= ?', [trackId], (err, results, fields) => {
    callbk(err, results);
  })
}

const getPlaylists = function ([id1, id2, id3], callbk) {
  db.connection.query('SELECT * FROM `playlists` WHERE `id` IN (?, ?, ?)', [id1, id2, id3], (err, results, fileds) => {
    callbk(err, results);
  })
}



exports.getRelatedTracks = getRelatedTracks;
exports.getUserInfo = getUserInfo;
exports.getLikesInfo = getLikesInfo;
exports.getAssociatedPlaylists = getAssociatedPlaylists;
exports.getPlaylists = getPlaylists;