const path = require('path');
const withSass = require('../../node_modules/@zeit/next-sass');
module.exports = withSass({
  webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config

    // Example using webpack option
    config.resolve.alias = {
      ...config.resolve.alias,
      react: path.resolve('../../node_modules/react'),
      // '@zeit/next-sass': path.resolve('../../node_modules/@zeit/next-sass'),
    };
    return config;
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
});
