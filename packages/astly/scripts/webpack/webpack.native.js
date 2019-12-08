const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');

const native = {
  mode: 'production',
  devtool: 'eval',
  entry: './lib/index.js',
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, '../../node_modules/react'),
      'styled-components':
        'styled-components/native/dist/styled-components.native.cjs.js',
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
      path: path.resolve(__dirname, `../../.native.env`),
    }),
  ],
  output: {
    path: path.resolve(__dirname, '../../dist/'),
    publicPath: '',
    filename: 'main.native.umd.development.js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
};

module.exports = native;
