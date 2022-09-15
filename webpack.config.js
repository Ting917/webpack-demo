const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [new HTMLWebpackPlugin({
    title: 'My App',
    template: 'src/assets/index.html'
  })]
};