const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const packageJson = require('./package.json');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'src/index.ejs'
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }, {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader", // translates CSS into CommonJS
                options: {
                    alias: (() => {
                        const m = {};
                        m[packageJson.name] = path.resolve(
                            '.');
                        return m;
                    })(),
                },
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }, {
            test: [/\.woff2$/, /\.eot$/, /\.svg$/, /\.ttf$/,
                /\.woff$/
            ],
            loader: 'file-loader',
        }, ]
    }
};
