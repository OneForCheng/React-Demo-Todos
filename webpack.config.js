const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
  hash: true
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
    plugins: [htmlPlugin]
};
