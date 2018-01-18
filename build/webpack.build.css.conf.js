var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var baseConfig = require('./webpack.base.conf.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

var devConfig = {
  entry: ['./src/index.less'],
  output: {
    path: resolve('lib'),
    publicPath: '/lib/',
    filename: 'lantern.css'
  },
  plugins: [
    new ExtractTextPlugin('lantern.css'),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
};

module.exports = merge(baseConfig, devConfig);