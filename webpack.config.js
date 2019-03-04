//const webpack = require('webpack');
const path = require('path');

const config = {
  mode: "development",
  entry: "./src/client/ts/main.ts",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: [ '.ts', '.tsx', ".js", ".json"]
  }
}

module.exports = config;