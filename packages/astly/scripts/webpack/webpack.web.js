const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const nodeExternals = require('webpack-node-externals');

const web = {
  mode: 'production',
  devtool: 'none',
  entry: './lib/index.js',
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  resolve: {
    alias: {
      'rehype-parse': 'rehype-dom-parse',
    },
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
            },
          },
        ],
      },
    ],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
    'react-native': 'react-native',
    'styled-components': 'styled-components',
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, `../../.web.env`),
    }),
  ],
  output: {
    path: path.resolve(__dirname, '../../dist/'),
    publicPath: '',
    filename: 'main.umd.development.js',
    libraryTarget: 'commonjs2',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
};

module.exports = web;
