const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.[hash].js',
  },
  optimization: {
    minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()],
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      {
        test: /\.css$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: { auto: true },
              sourceMap: isDev,
              localsConvention: 'camelCase',
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      src: path.resolve(__dirname, './src'),
      _storybook: path.resolve(__dirname, './.storybook'),
    },
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({ template: './assets/index.html' }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new BundleAnalyzerPlugin(),
  ],
  devtool: isDev ? 'eval-cheap-module-source-map' : false,
  devServer: {
    port: 9000,
    compress: true,
    contentBase: path.join(__dirname, 'assets'),
    watchContentBase: true,
    historyApiFallback: true,
  },
};
