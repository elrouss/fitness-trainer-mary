const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../../src/index.pug'),
  }),
  new MiniCssExtractPlugin({
    filename: 'index.[contenthash].css',
  }),
];
