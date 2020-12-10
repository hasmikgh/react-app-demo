const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entry = path.resolve(__dirname, '../src');
const output = path.resolve(__dirname, '../dist');

module.exports = {
  entry: [entry + '/index.js'],
  output: {
    path: output,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  plugins: [
    new CleanWebpackPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: entry + '/assets/images',
          to: 'assets'
        }, {
          from: entry + '/json',
          to: 'json'
        }, {
          from: entry + '/locales',
          to: 'locales'
        }
      ],
    }),

    new HtmlWebpackPlugin({
      title: 'React App',
      template: entry + '/index.html',
      filename: 'index.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js|jsx$/, exclude: /node_modules/,
        use: ['babel-loader']
      },
    ],
  },
};
