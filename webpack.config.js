const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageJson = require('./package.json');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Test'
        })
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader", // translates CSS into CommonJS
                options: {
                  alias: (() => {
                      const m = {};
                      m[packageJson.name] = path.resolve('.');
                      return m;
                  })(),
                },
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }, {
            test: [/\.woff2$/, /\.eot$/, /\.svg$/, /\.ttf$/, /\.woff$/],
            loader: 'file-loader',
        }, ]
    }
};
