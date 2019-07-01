const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  entry: './client/src/index.jsx',
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.jsx$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  }
}