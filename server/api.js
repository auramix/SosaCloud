const db = require('../db/index.js');

// Given a track's id query the database for 3 random tracks to populate related tracks component
const getRelatedTracks = function (id, callbk) {
  db.connection.query('SELECT * FROM `tracks` ORDER BY RAND() ASC LIMIT 3', (err, results) => {
    callbk(err, results);
  })
}

// Can query user information with either a username or id
const getUserInfo = function (user_identification, callbk) {
  let id = isNaN(Number(user_identification)) ? `userName` : `id`;

  db.connection.query(`SELECT * FROM users WHERE ${id} = ? LIMIT 1`, [user_identification], (err, results) => {
    callbk(err, results);
  })
}

const getLikesInfo = function (trackId, callbk) {
  let query = 'SELECT DISTINCT `user_id` FROM `likes_tracks` WHERE `track_id`= ?';

  db.connection.query(query, [trackId], (err, results, fields) => {
    callbk(err, results);
  })
}

const getRepostsInfo = function (trackId, callbk) {
  let query = 'SELECT DISTINCT `user_id` FROM `reposts_tracks` WHERE `track_id`= ?';

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
exports.getRepostsInfo = getRepostsInfo;