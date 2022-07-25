const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/script.js",
  output: {
    path: path.resolve(__dirname, "docs"), // './dist'의 절대 경로를 리턴합니다.
    filename: "app.bundle.js",
    clean: true,
  },
  devServer: {
    contentBase: __dirname + "/docs/",
    host: "localhost",
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
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
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
};
