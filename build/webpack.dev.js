var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin'); //生成html
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
var PurifyCSS = require("purifycss-webpack"); //消除未使用的CSS
var cleanWebpackPlugin = require("clean-webpack-plugin");  // 清除目录等
let spritesConfig = {
    spritePath: "../dist/img"
};
//理静态文件路径
var website ={
    spritePath: "../dist/",
    publicPath:"" //这里配置输出js的路径
}
module.exports = {
	mode: 'development',
    entry: [
        "webpack/hot/only-dev-server",
        "./src/index.js"
    ],
    output: {		
        path: path.resolve(__dirname, '../dist'),
        filename: "js/[name].js",
        publicPath:website.publicPath,
		chunkFilename: "js/[name].chunk.js"
    },
	optimization:{
		splitChunks:{
			cacheGroups: {
				// 注意: priority属性
				// 其次: 打包业务中公共代码
				common: {
					name: "common",
					chunks: "all",
					minSize: 1,
					priority: 0
				},
				// 首先: 打包node_modules中的文件
				vendor: {
					name: "vendor",
					test: /[\\/]node_modules[\\/]/,
					chunks: "all",
					priority: 10
					// enforce: true
				}
			}
		}
	},
    module: {
		rules:[
            {
                test :/(\.jsx|\.js)$/,
                exclude : /node_modules/,
                loader :'babel-loader',
                options:{
                    presets:[
                        "env", "react", 
                    ]
                }
            },
			{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: {
                        loader: "style-loader"
                    },
                    use: [
                        {
                            loader: "css-loader"
                        },
                        // 雪碧图
                        {
                            loader: "postcss-loader",
                            options: {
                                ident: "postcss",
                                plugins: [require("postcss-sprites")(spritesConfig)]
                            }
                        }
                    ]
                })
			},{
                test:/\.(png|jpg|gif|jpeg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:500,
                            name: '[hash].[ext]',
                            outputPath:'images/',
                        }
                    }
                ]
            },{
                test: /\.(eot|woff2?|ttf|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "[name]-[hash:5].min.[ext]",
                            limit: 5000,
                            publicPath: "fonts/",
                            outputPath: "fonts/"
                        }
                    }
                ]
            },            
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    // 对于不提取为单独文件的css样式的loader
                    fallback: {
                        loader: "style-loader"
                    },
                    use: [
                        {loader: "css-loader",options: {minimize: true}},
                        {loader: "less-loader"}
                    ]
                })
            }
		]
	},
	//插件用于生产模版和各项功能
	plugins:[
        require('autoprefixer'), //自动添加前缀插件
        new cleanWebpackPlugin(["../dist"]), //调用之前先清除
        new webpack.HotModuleReplacementPlugin(),
        //css分离的插件
		new ExtractTextPlugin({
            //publicPath : "css/",
            filename: "[name].min.css",  //这里可以在前面加文件名，但会影响到图片的路径
            allChunks: false
        }),
        		
		// 自动生成html模板
        new HtmlwebpackPlugin({
			//favicon:'./src/img/favicon.ico', //favicon路径
			filename: './index.html', //渲染输出html文件名,路径相对于 output.path 的值
			template: path.resolve(__dirname, '../src/template/index.html'),
			title: '积分商城',
			inject:true,//允许插件修改哪些内容，包括head与body
			hash:true,	//为静态资源生成hash值
			showErrors:false, //是否显示错误
            cache:false, //是否缓存
			minify:{	//压缩HTML文件
				removeComments:true,	//移除HTML中的注释
				//collapseWhitespace:true	//删除空白符与换行符
			}
        }),        
        //消除未使用的css
        // new PurifyCSS({
        //     paths: glob.sync([
        //         // 要做CSS Tree Shaking的路径文件
        //         path.resolve(__dirname, "./src/*.html"),
        //         path.resolve(__dirname, "./src/*.js")
        //     ])
        // })
	],
    //devtool: "source-map",  // 开启调试模式
    
	//配置webpack开发服务功能
	devServer:{
		//设置基本目录结构
		contentBase: path.join(__dirname, "../dist"),
		//服务器的IP地址，可以使用IP也可以使用localhost
		//host:'location',
		// 开启浏览器
		open: true, 
		// 开启热更新
		hot: true,
		overlay: true,
		//服务端压缩是否开启
		compress:true,
		//配置服务端口号
		port:8000
	}
};
