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
/*
const purifyCssWebpack = require("purifycss-webpack"); //消除冗余的css
*/
module.exports = {
	//新增了mode/--mode参数来表示是开发还是生产，mode有两个可选值：development和production，production不支持监听，production侧重于打包后的文件大小，development侧重于构建的速度。
	mode: 'development',
	//入口文件
    entry: [
        "webpack/hot/only-dev-server",
        "./src/main.js"
    ],
	//出口文件配置项
    output: {		
        path: path.resolve(__dirname, '../dist'), // 打包文件的输出目录
        filename: "js/[name].js",
        publicPath:website.publicPath,  //publicPath：主要作用就是处理静态文件路径的。
		chunkFilename: "js/[name].chunk.js"
    },
	
	//webpack4开始官方移除了commonchunk插件，改用了optimization属性进行更加灵活的配置   对压缩(optimization.minimize)的设置，默认在production时开启，在development时关闭。
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

	//模块：解读css，图片如何转换，压缩等
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
				// use:[
				// 	{loader: "style-loader"},
				// 	{loader: "css-loader",options: {minimize: true}}
				// ]
			},{
                test:/\.(png|jpg|gif|jpeg)$/,
                use:[
                    {
                        loader:'url-loader', //是指定使用的loader和loader的配置参数
                        options:{
                            limit:500,  //是把小于500B的文件打成Base64的格式，写入JS
                            name: '[hash].[ext]',
                            outputPath:'images/', //输出图片路径
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
                            limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
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
        
		
		//new copyWebpackPlugin([{
        //    from: path.resolve(__dirname,"src/assets"),
        //    to: './pulic'
        //}]),
        
        
		
		// 消除冗余的css代码
		//new purifyCssWebpack({            
        //    paths: glob.sync(path.join(__dirname, "src/*.html")) // glob为扫描模块，使用其同步方法
        //}),		
		
		
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
    
    //配置第三方JS库，配置之后, 在项目的文件中不再需要import或者require相关的库!!! 
    // resolve: {
	// 	modulesDirectories: ['src', 'node_modules'],
	// 	alias: {
	// 		'jWeixin': path.resolve(__dirname, './src/utils/weixin/jweixin-1.0.0.js'),
	// 	},
	// 	extensions: ['', '.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json']
    // },

    // 全局暴露统一入口
    //new webpack.ProvidePlugin({
    //    jwx: "jWeixin"
    //}),
    
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



//webpack
/*
https://github.com/mikechabot/react-boilerplate
https://github.com/LeeRayno/react-antd-mobile-demo/tree/master/config
https://github.com/heuuLZP/vue-axios/tree/master/build

*/