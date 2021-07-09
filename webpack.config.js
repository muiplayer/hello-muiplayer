'use strict';

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    devtool: process.env.NODE_ENV == 'production' ? 'none' : 'inline-source-map',
    entry: ['./src/main.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[id].[chunkhash].js', // 非入口的chunk文件的名称
    },
    devServer:{
        port:8089,
        host:'0.0.0.0',
        // host:'localhost',
        open:false,
        compress:true,
        quiet: true,
    },
    module: {
        rules: [
            {
                test:/\.(css|less)$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','postcss-loader','less-loader']
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                include: [
                    path.resolve(__dirname, "src"),
                ],
                loader: "babel-loader",
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 200,
                            name:'[name].[hash:7].[ext]',
                        }
                    }
                ]
            },
        ]
    },
    resolve: {
        extensions: ['.js'],
        alias:{
            '@':path.resolve(__dirname,'src'),
            'static': path.resolve(__dirname, '../static'),
        }
    },
    optimization: {
        minimize: true,
        minimizer:process.env.NODE_ENV == 'production' ? [
            // JS 文件压缩
            new TerserPlugin({
                cache: true,
                terserOptions:{
                    compress: {
                        drop_console:true,
                        drop_debugger:true,
                    },
                }
            }),

            // CSS 文件压缩
            new OptimizeCssAssetsPlugin({}),
        ] : [],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            favicon:'./favicon.ico',
            minify:false,
        }),

        // 分离CSS文件
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css',
            chunkFilename: '[id].[chunkhash].css'
        }),

        new CleanWebpackPlugin(),

        // copy custom static assets
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'static'),
            to: './static',
            ignore: ['.*']
        }]),
    ]
};
