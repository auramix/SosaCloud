const express = require('express');
const app = express();
const api = require('./api.js');

const responseHeader = {
  'Cache-Control': 'max-age=31536000'
};

app.use('/', express.static(__dirname + '/../client/dist', {
  maxAge: 31557600
}));
app.use('/:id', express.static(__dirname + '/../client/dist', {
  maxAge: 31557600
}));


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
      res.set(responseHeader).status(200).json(results);
    }
  })
})

// Retrieves user info from db
app.get('/api/user/:user_name', (req, res) => {
  let userName = req.params.user_name;
  api.getUserInfo(userName, (err, results) => {
    if (err) {
      console.log('db Query Error: ', err);
      res.status(404).json(err);
    } else {
      res.set(responseHeader).status(200).json(results);
    }
  })
})

// Retrieves number of likes for a given track
app.get('/api/track/likes/:track_id', (req, res) => {
  let trackId = req.params.track_id;
  api.getLikesInfo(trackId, (err, results) => {
    if (err) {
      console.log('db Query Error: ', err);
      res.status(404).json(err);
    } else {
      res.set(responseHeader).status(200).json(results);
    }
  })
})

// Retrieves number of likes for a given track
app.get('/api/track/reposts/:track_id', (req, res) => {
  let trackId = req.params.track_id;
  api.getRepostsInfo(trackId, (err, results) => {
    if (err) {
      console.log('db Query Error: ', err);
      res.status(404).json(err);
    } else {
      res.set(responseHeader).status(200).json(results);
    }
  })
})

app.get('/api/playlists/:track_id', (req, res) => {
  let trackId = req.params.track_id;
  api.getPlaylists(trackId, (err, results) => {
    if (err) {
      console.log('getPlaylists error: ', err);
      res.status(404).json(err);
    } else {
      res.set(responseHeader).status(200).json(results);
    }
  })
})

// // Retrieves userIds associated with liking a given trackId
// app.get('/api/likes/:track_id', (req, res) => {
//   let trackId = req.params.track_id;
//   api.getLikesInfo(trackId, (err, results) => {
//     if (err) {
//       console.log('db Query Error: ', err);
//       res.status(404).json(err);
//     } else {
//       res.set(responseHeader).status(200).json(results);
//     }
//   }, true)
// })

module.exports = app;