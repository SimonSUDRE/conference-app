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
            {
                test: /\.(html)$/, 
                use: {
                    loader: 'html-loader',
                    options: {
                      attrs: [':data-src']
                    }
                }
            }
        ]
    },
    devtool:"cheap-module-eval-source-map",
    plugins: [
        new HtmlWebpackPlugin()
    ]
}