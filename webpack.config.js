const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: {
    index: './lib/index.tsx',
  },
  resolve: {
    // 当引入文件时，默认文件后缀，ts必须要配置，不然默认是js文件，就会报错
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'MUI',
    libraryTarget: 'umd', // 告诉webpack把代码打包成什么模块定义，umd是兼容其他模块规则的方案
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader', // 把svg放到html里
      },
    ],
  },
}
