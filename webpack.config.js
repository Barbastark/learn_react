const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: [
                      //"@babel/preset-env",
                      "@babel/preset-react"
                  ],
                  plugins: [
                      //"@babel/plugin-syntax-dynamic-import",
                      "@babel/plugin-proposal-class-properties"
                  ]
                }
              }
           },
           {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader",
              }
            ]
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          },
          
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ],
    entry: { 
        index: path.resolve(__dirname, "src", "index.js")
    }, 
    output: {
        path: path.resolve(__dirname, "dist")
    }
}