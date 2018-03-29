var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var baseConfig = require('./webpack.base.conf.js');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

var devConfig = {
  //entry: ['babel-polyfill', './src/index.js'],
  entry: ['./src/index.js'],
  output: {
    path: resolve('lib'),
    publicPath: '/lib/',
    libraryTarget: 'umd',
    filename: 'lantern.js'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
};

module.exports = merge(baseConfig, devConfig);