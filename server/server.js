const app = require('./index.js');
const port = 3002;


app.listen(port, () => {
  console.log(`Now listening on ${port}. Visit http://localhost:${port}/`)
});