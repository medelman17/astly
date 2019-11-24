/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');
const blacklist = require('metro-config/src/defaults/blacklist');

const watchFolders = [path.join(__dirname, '../../packages/astly')];

const extraNodeModules = new Proxy(
  {
    astly: path.join(__dirname, '../../packages/astly'),
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
