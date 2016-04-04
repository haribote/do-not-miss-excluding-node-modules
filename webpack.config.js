// import modules
var path              = require('path');
var webpack           = require('webpack');

/**
 * Configuration of webpack
 * @module webpack.config
 * @type {{context: string, entry: string, output: {path: *, filename: string}, module: {loaders: *[]}, resolve: {extensions: string[]}}}
 */
module.exports = {
  context: __dirname + '/src',
  entry  : [
    'webpack-dev-server/client?http://localhost:8080',
    './main.js'
  ],
  output : {
    path    : path.resolve(__dirname, 'dist'),
    filename: './bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module : {
    loaders: [
      {
        test   : /\.js$/,
        loader : 'babel-loader',
        // exclude: /node_modules/, <- Don't miss it!
        query  : {
          plugins: ['transform-runtime'],
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
};
