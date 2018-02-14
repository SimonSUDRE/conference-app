let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module : {
        rules: [
            { test: /\.html$/, use: 'html-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|svg|woff(2))$/, use: "file-loader" }
        ]
    },
    devtool:"cheap-module-eval-source-map",
    plugins: [
        new HtmlWebpackPlugin()
    ]
}