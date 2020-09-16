const path = require('path')
const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({}, base, {
  entry: {
    index: './lib/testDemo.tsx',
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'night-with-design',
      template: 'index.html',
    }),
  ],
})
