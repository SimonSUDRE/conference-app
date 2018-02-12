var path = require('path');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // définition des points d'entrée
    // il est possible de définir plusieurs points d'entrée
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    plugins: [
        new UglifyJSPlugin(),
        new HtmlWebpackPlugin()
    ]
}