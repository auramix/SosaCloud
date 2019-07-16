const express = require('express');
const app = express();
const api = require('./api.js');
var id;


app.use('/', express.static(__dirname + '/../client/dist'));
app.use('/:id', express.static(__dirname + '/../client/dist'));


// Retrieves track info from db
app.get('/api/track/:id', (req, res) => {
  let id = req.params.id;
  if (id === -1) {
    id = Math.ceil(Math.random() * 100);
  }
  api.getRelatedTracks(id, (err, results) => {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(results);
    }
  })
})

// Retrieves user info from db
app.get('/api/user/:user_name', (req, res) => {
  let userName = req.params.user_name;
  api.getUserInfo(userName, (err, results) => {
    if (err) {
      console.log('db Query Error: ', err)
      res.status(404).json(err);
    } else {
      res.status(200).json(results);
    }
  })
})

// Retrieves number of likes for a given track
app.get('/api/track/likes/:track_id', (req, res) => {
  let trackId = req.params.track_id;
  api.getLikesInfo(trackId, (err, results) => {
    if (err) {
      console.log('db Query Error: ', err)
      res.status(404).json(err);
    } else {
      res.status(200).json(results);
    }
  })
})

module.exports = app;