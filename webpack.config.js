const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
  hash: true,
  minify:{ //压缩html文件
      removeComments: true,     //移除html的注释
      collapseWhitespace: true  //删除空白符与换行符
  }
});

module.exports = {
    entry: "./src/index.js",
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
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader",
                options: {
                    name: 'assets/image/[name].[ext]?[hash]'
                }
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
