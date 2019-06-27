const express = require('express');
const app = express();
const api = require('./api.js');
const port = 3002;

app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/track/:id', (req, res) => {
  let id = req.params.id;
  api.getRelatedTracks(id, (err, results) => {
    if (err) {
      console.log('db Query Error: ', err)
      res.status(404).json(err);
    } else {
      res.status(200).json(results);
    }
  })
})

app.listen(port, () => {
  console.log(`Now listening on ${port}. Visit http://localhost:3002/`)
});