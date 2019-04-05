//const webpack = require('webpack');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
  mode: "development",
  entry: "./src/client/ts/main.ts",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(svg|mp3)$/,
        use:[
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
              publicPath: 'assets/'
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/server/wwwroot')
  },
  resolve: {
    extensions: [ '.ts', '.tsx', ".js", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/client/index.html'
    })
  ]
}

module.exports = config;