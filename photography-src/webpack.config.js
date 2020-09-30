const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    photography: './src/index.tsx',
    foo: './src/bar.tsx'
  },
  output: {
    path: path.resolve(__dirname, '../photography'),
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Janne Lavila - Software Engineer',
      filename: './index.html',
      template: 'photography.html',
      chunks: ['photography']
    }),
    new HtmlWebpackPlugin({
      title: 'Janne Lavila - Software Engineer',
      filename: './foo.html',
      template: 'foo.html',
      chunks: ['foo']
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: { presets: ['@babel/preset-react'] },
      },
      {
        test: /\.css$/,
        loaders: ['style-loader']
      },
      {
        test: /\.css$/,
        loaders: 'css-loader',
        options: { url: false }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../photography'),
    compress: true,
    port: 3000,
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}

module.exports = config