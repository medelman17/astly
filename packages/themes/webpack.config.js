const getProdBuildConfigs = require("./scripts/webpack/webpack.prod.js");
const getDevBuildConfigs = require("./scripts/webpack/webpack.dev.js");

const prodOptions = [
  {
    buildFor: "web",
    buildType: "umd",
    path: "dist"
  },
  {
    buildFor: "native",
    buildType: "umd",
    path: "dist"
  },
  {
    buildFor: "native",
    buildType: "esm",
    path: "dist"
  },
  {
    buildFor: "native",
    buildType: "commonjs2",
    path: "dist"
  },
  {
    buildFor: "web",
    buildType: "commonjs2",
    path: "dist"
  },

  {
    buildFor: "web",
    buildType: "esm",
    path: "dist"
  }
];

const devOptions = [
  {
    buildFor: "web",
    buildType: "umd",
    path: "dist"
  },
  {
    buildFor: "native",
    buildType: "umd",
    path: "dist"
  },
  {
    buildFor: "web",
    buildType: "commonjs2",
    path: "dist"
  },
  {
    buildFor: "native",
    buildType: "commonjs2",
    path: "dist"
  },

  {
    buildFor: "web",
    buildType: "esm",
    path: "dist"
  }
];

module.exports = config => {
  const { env } = config;
  return env === "prod"
    ? [...getDevBuildConfigs(devOptions), ...getProdBuildConfigs(prodOptions)]
    : getDevBuildConfigs(devOptions);
};
