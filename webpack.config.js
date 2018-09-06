const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html",
    hash: true,
    minify: { //压缩html文件
        removeComments: true, //移除html的注释
        collapseWhitespace: true //删除空白符与换行符
    }
});

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"), //Output Directory
        filename: "bundle.js", //Output file
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.js$/,
                loader: "eslint-loader",
                enforce: "pre",
                include: [path.resolve(__dirname, 'src')], // 指定检查的目录
                options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine 
                    formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader",
                options: {
                    name: 'assets/image/[name].[ext]?[hash]'
                }
            },
            {
              test: /\.css$/,
              use: [{
                loader: 'style-loader'
              }, {
                loader: 'css-loader'
              }]
            },
            {
                test: /\.(scss|sass)$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        htmlPlugin
    ],
    //压缩js
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: true
                }
            })
        ]
    }
};
