const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/src/index.jsx',
  module: {
    rules: [{
      test: /\.jsx$/,
      exclude: /(node_modules|bower_components)/,
      use: {loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react']
      }}
    }]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  }
}