const express = require('express');
const app = express();
const port = 3002;

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => {
  console.log(`Now listening on ${port}. Visit http://localhost:3002/`)
});