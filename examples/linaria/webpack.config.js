const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const dev = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: dev ? 'development' : 'production',
  devtool: 'source-map',
  entry: {
    app: './src/index',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  optimization: {
    noEmitOnErrors: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
    }),
    new MiniCssExtractPlugin({ filename: 'styles.css' }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: 'Styled System Linaria Demo',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'linaria/loader',
            options: { sourceMap: dev },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV !== 'production',
            },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: dev },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif|woff|woff2|eot|ttf|svg)$/,
        use: [{ loader: 'file-loader' }],
      },
    ],
  },
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    compress: true,
    stats: 'errors-only',
    overlay: true,
  },
}
