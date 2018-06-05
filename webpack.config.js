const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');


module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack-sample.bundle.js'
     },
    plugins: [new HtmlWebpackPlugin({template: './src/index.html'})],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader','css-loader'] }
        ]
        }
 };

