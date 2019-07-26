const db = require('../db/index.js');

// Given a track's id query the database for 3 random tracks to populate related tracks component
const getRelatedTracks = function (id, callbk) {
  db.connection.query('SELECT * FROM `tracks` ORDER BY RAND() ASC LIMIT 3', (err, results) => {
    callbk(err, results);
  })
}

// Can query user information with either a username or id
const getUserInfo = function (user_identification, callbk) {
  let id = typeof user_identification === 'string' ? `userName` : `id`;

  let query = 'SELECT * FROM `users` WHERE ? = ? LIMIT 1'

  db.connection.query(query, [id, user_identification], (err, results) => {
    callbk(err, results);
  })
}

const getLikesInfo = function (trackId, callbk, limit) {
  let query = 'SELECT * FROM `likes_tracks` WHERE `track_id`= ?';
  if (limit) {
    query += ' LIMIT 9';
  }
  db.connection.query(query, [trackId], (err, results, fields) => {
    callbk(err, results);
  })
}

const getPlaylists = function (trackId, callbk) {
  db.connection.query('SELECT * FROM playlists WHERE id IN (SELECT `playlist_id` FROM `playlists_tracks` WHERE `track_id`=?) LIMIT 3', [trackId], (err, results, fileds) => {
    callbk(err, results);
  })
}



exports.getRelatedTracks = getRelatedTracks;
exports.getUserInfo = getUserInfo;
exports.getLikesInfo = getLikesInfo;
exports.getPlaylists = getPlaylists;