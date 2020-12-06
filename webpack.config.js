const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const TSLintPlugin = require('tslint-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, "bulid"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            //Css loaders
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[hash:base64:8]'
                            },
                        }
                    }
                ],
                include: /\.module\.css$/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
                exclude: /\.module\.css$/
            },
            //Sass loaders
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[hash:base64:8]'
                            },
                        }
                    },
                    "postcss-loader",
                    'sass-loader'
                ],
                include: /\.module\.scss$/
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'sass-loader'
                ],
                exclude: /\.module\.scss$/
            },
            {
                test: /\.(pdf|png|svg|jpg|gif|ico)$/,
                use: [{
                    loader: 'file-loader'
                }],
            },
            {
                test: /\.mp4$/,
                use: 'file-loader?name=videos/[name].[ext]',
            },
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
        new webpack.HotModuleReplacementPlugin(),
        new TSLintPlugin({
            files: ['./src/**/*.ts']
        })
    ]
}