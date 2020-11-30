const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const output = path.resolve(__dirname, '../dist');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    path: output,
    publicPath: '/',
    filename: 'src/[name].bundle.js',
  },
});
