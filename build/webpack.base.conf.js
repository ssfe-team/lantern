/*
 * @Author: bianhao 
 * @Date: 2017-12-20 20:36:20 
 * @Last Modified by: bianhao
 * @Last Modified time: 2018-01-18 18:32:04
 */

const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseConfig = {
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.vue', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            loaders: {
              css: 'vue-style-loader!css-loader',
              less: 'vue-style-loader!css-loader!less-loader'
            }
          }
        }
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.md$/,
        use: [
          'vue-loader',
          {
            loader: path.resolve('build/mdloader.js')
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|ttf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        }
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      }
    ]
  },
}

module.exports = baseConfig;