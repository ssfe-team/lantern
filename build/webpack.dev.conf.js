/*
 * @Author: bianhao 
 * @Date: 2017-12-21 16:28:20 
 * @Last Modified by: bianhao
 * @Last Modified time: 2017-12-22 11:05:04
 */
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackbaseConf = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
  entry: {
    main: './examples/main.js',
    vendors: ['vue', 'vue-router']
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '',
    chunkFilename: '[name].chunk.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './examples/index.html'
    }),
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    public: 'localhost:8010'
  }
}

module.exports = webpackMerge(webpackbaseConf, devConfig);