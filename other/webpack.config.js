var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin'); //生成html
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包


// https://github.com/dongyuanxin/webpack-demos  webapck4学习
// https://www.jianshu.com/p/6712e4e4b8fe

module.exports = {
    entry: {
        app: "./app.js"
    },
    output: {
        publicPath: __dirname + "/dist/", // js引用路径或者CDN地址
        path: path.resolve(__dirname, "dist"), // 打包文件的输出目录
        filename: "bundle.js"
    },
    module: {
        rules:[
            {test: /\.js$/, exclude: /node_modules/,use: {loader: "babel-loader"}}
        ]
    }
};
