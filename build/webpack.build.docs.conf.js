const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const webpackbaseConf = require('./webpack.base.conf.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const devConfig = {
  entry: {
    main: './examples/main.js',
    vendors: ['vue', 'vue-router']
  },
  output: {
    path: resolve('/docs'),
    filename: '[name].js',
    publicPath: '',
    chunkFilename: '[name].chunk.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './examples/index.html'
    })
  ]
}

module.exports = webpackMerge(webpackbaseConf, devConfig)
