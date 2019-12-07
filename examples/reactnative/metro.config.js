/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');
const blacklist = require('metro-config/src/defaults/blacklist');

const watchFolders = [
  path.join(__dirname, '../../packages/astly'),
  path.join(__dirname, '../../packages/themes'),
  // path.join(__dirname, '../../node_modules/react'),
];

const extraNodeModules = new Proxy(
  {
    '@fabulas/astly': path.join(__dirname, '../../packages/astly'),
    '@fabulas/themes': path.join(__dirname, '../../packages/themes'),
    '@babel/runtime': path.join(__dirname, '../../node_modules/@babel/runtime'),
    // react: path.join(__dirname, '../../node_modules/react'),
  },
  {
    get: (target, name) => {
      if (target.hasOwnProperty.call(name)) {
        return target[name];
      }
      return path.join(__dirname, `node_modules/${name}`);
    },
  },
);

module.exports = {
  resolver: {
    extraNodeModules,
    sourceExts: ['jsx', 'js', 'ts'],
    blacklistRE: blacklist([
      /node_modules\/.*\/node_modules\/react-native\/.*/,
    ]),
  },
  watchFolders,
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
