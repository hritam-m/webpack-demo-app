const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
};
