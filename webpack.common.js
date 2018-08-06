const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    './src/js/main.js',
    './src/scss/style.scss',
  ],
  output: {
    filename: './js/bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src/js'),
      use: {
        loader: 'babel-loader',
        options: {
          presets: 'env',
        },
      },
    }, {
      test: /\.(sass|scss)$/,
      include: path.resolve(__dirname, 'src/scss'),
      use: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true,
            minimize: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            plugins() {
              return [autoprefixer('last 2 version')];
            },
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'resolve-url-loader',
        },
        ],
      }),
    },
    {
      test: /\.(gif|svg|jpg|png)$/,
      loader: 'file-loader',
      options: {
        name: '../img/[name].[ext]',
      },
    },
    {
      test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '../fonts/[name].[ext]',
          // outputPath: 'fonts/'
        },
      }],
    },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './css/style.min.css',
      allChunks: true,
    }),
    new CopyWebpackPlugin([{
      from: './src/img',
      to: './img',
    }, {
      from: './src/fonts',
      to: './fonts',
    }, {
      from: './src/index.html',
      to: './',
    }]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
};
