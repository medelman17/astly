const getProdBuildConfigs = require('./scripts/webpack/webpack.prod.js');
const getDevBuildConfigs = require('./scripts/webpack/webpack.dev.js');
const path = require('path');
const prodOptions = [
  {
    buildFor: 'web',
    buildType: 'umd',
    path: 'dist',
  },
  {
    buildFor: 'native',
    buildType: 'umd',
    path: 'dist',
  },
  {
    buildFor: 'native',
    buildType: 'esm',
    path: 'dist',
  },
  {
    buildFor: 'native',
    buildType: 'commonjs2',
    path: 'dist',
  },
  {
    buildFor: 'web',
    buildType: 'commonjs2',
    path: 'dist',
  },

  {
    buildFor: 'web',
    buildType: 'esm',
    path: 'dist',
  },
];

const devOptions = [
  {
    buildFor: 'web',
    buildType: 'umd',
    path: 'dist',
  },
  {
    buildFor: 'native',
    buildType: 'umd',
    path: 'dist',
  },
  {
    buildFor: 'web',
    buildType: 'commonjs2',
    path: 'dist',
  },
  {
    buildFor: 'native',
    buildType: 'commonjs2',
    path: 'dist',
  },

  {
    buildFor: 'web',
    buildType: 'esm',
    path: 'dist',
  },
];

// module.exports = config => {
//   const { env } = config;
//   return env === "prod"
//     ? [...getDevBuildConfigs(devOptions), ...getProdBuildConfigs(prodOptions)]
//     : getDevBuildConfigs(devOptions);
// };

const nodeExternals = require('webpack-node-externals');

const client = {
  entry: './lib/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '',
    filename: 'build.js',
    libraryTarget: 'umd',
  },
};

const server = {
  entry: './lib/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '',
    filename: 'build.js',
    libraryTarget: 'umd',
  },
  entry: './lib/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '',
    filename: 'server.js',
    libraryTarget: 'umd',
  },
  target: 'node',
  externals: [nodeExternals()],
};

module.exports = [client, server];
