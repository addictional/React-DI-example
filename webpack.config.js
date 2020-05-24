/* eslint-disable max-len */
const {CheckerPlugin} = require('awesome-typescript-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');


module.exports = (env) => {
  // eslint-disable-next-line no-param-reassign
  env = env || {};
  return {
    mode: env.NODE_ENV || 'development',
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      plugins: [new TsconfigPathsPlugin({configFile: path.resolve(__dirname, 'tsconfig.json')})],
    },
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: env.NODE_ENV ? 'js/app.[hash].js' : 'js/app.js',
      publicPath: '/',
    },
    entry: './src/app.tsx',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
        },
        {
          test: /\.(scss|less|sass)$/i,
          use: [
            env.NODE_ENV ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new CheckerPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'style/[name].[hash].css',
        chunkFilename: '[id].css',
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      open: true,
      compress: true,
      historyApiFallback: true,
    },
  };
};
