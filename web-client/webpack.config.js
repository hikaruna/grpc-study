const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    index: './index.ts',
    interactive: './interactive.ts'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: '0.0.0.0',
    port: 1234
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: [ 'index' ]
    }),
    new HtmlWebpackPlugin({
      template: './interactive.html',
      filename: 'interactive.html',
      chunks: [ 'interactive' ]
    })
  ]
};
