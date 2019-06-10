//const webpack = require('webpack');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
    mode: "development",
    entry: {
        game: "./src/client/ts/game.ts",
        editorMain: "./src/client/ts/editor-main.ts",
        controller: "./src/server/GameController/controller.ts"
    },
    module: {
        rules: [{
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
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/',
                        publicPath: 'assets/'
                    }
                }]
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'src/server/wwwroot')
    },
    resolve: {
        extensions: ['.ts', '.tsx', ".js", ".jsx", ".json"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/client/views/index.html',
            chunks: ['game']
        }),
        new HtmlWebpackPlugin({
            filename: 'arena-editor.html',
            template: 'src/client/views/arena-editor.html',
            chunks: ['editorMain']
        })
    ]
}

module.exports = config;