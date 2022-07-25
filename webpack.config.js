const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./script.js",
  output: {
    path: path.resolve(__dirname, "dist"), // './dist'의 절대 경로를 리턴합니다.
    filename: "app.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: __dirname + "/docs/",
    host: "localhost",
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
    }),
  ],
};
