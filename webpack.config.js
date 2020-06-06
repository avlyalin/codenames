const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CopyPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isAnalysis = process.env.NODE_ENV === 'analysis';

const plugins = [
  new Dotenv({ systemvars: true }),
  new HtmlWebpackPlugin({ template: './assets/index.html' }),
  new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
  }),
  new CopyPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, 'assets/favicons'),
        to: path.resolve(__dirname, 'public/favicons'),
      },
    ],
  }),
];
if (isAnalysis) {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.[hash].js',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 5000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
            )[1];

            return `vendors.${packageName.replace('@', '')}`;
          },
        },
      },
    },
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
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-inline-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      'react-dom': isDev ? '@hot-loader/react-dom' : 'react-dom',
      assets: path.resolve(__dirname, './assets'),
      src: path.resolve(__dirname, './src'),
      _storybook: path.resolve(__dirname, './.storybook'),
    },
  },
  plugins: plugins,
  devtool: isDev ? 'eval-cheap-module-source-map' : false,
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    compress: true,
    contentBase: path.join(__dirname, 'assets'),
    watchContentBase: true,
    historyApiFallback: true,
  },
};
