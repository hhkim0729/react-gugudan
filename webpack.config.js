const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: {
    app: ['./index'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [require.resolve('react-refresh/babel')].filter(Boolean),
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new RefreshWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
  ].filter(Boolean),
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname + '/build'),
  },
  devServer: {
    publicPath: '/',
    hot: true,
  },
};
