var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.conf.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

var devConfig = {
  entry: ['./examples/main.js'],
  output: {
    path: resolve('dist'),
    publicPath: './dist/',
    filename: 'lantern.[hash].js'
  },
  plugins: [
    new ExtractTextPlugin('[name].style.[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new UglifyJSPlugin({
      sourceMap: false,
      parallel: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('examples/') + 'index.html'
    })
  ]
}

module.exports = merge(baseConfig, devConfig)
