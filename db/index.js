var mysql = require('mysql')
const login = require('./auth.js')

var connection = mysql.createConnection(login.auth);

connection.connect((err) => {
  if (err) console.log('db Connection error', err);
});

exports.connection = connection;