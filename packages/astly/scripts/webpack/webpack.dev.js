const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

function getOutput(opts) {
  switch (opts.buildType) {
    case "esm":
      return {
        filename:
          opts.buildFor === "native"
            ? `astly.native.esm.dev.js`
            : `[name].esm.dev.js`,
        path: path.resolve(__dirname, "../../", opts.path)
      };
    default:
      return {
        library: "astly",
        libraryTarget: opts.buildType,
        filename:
          opts.buildFor === "native"
            ? `[name].native.${opts.buildType}.development.js`
            : `[name].${opts.buildType}.development.js`,
        chunkFilename:
          opts.buildFor === "native"
            ? `[name].native.${opts.buildType}.development.bundle.js`
            : `[name].${opts.buildType}.development.bundle.js`,
        umdNamedDefine: true,
        path: path.resolve(__dirname, "../../", opts.path),
        globalObject: "typeof self !== 'undefined' ? self : this"
      };
  }
}

function getModule(opts) {
  return {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: false
            }
          }
        ]
      }
    ]
  };
}

function getPlugins(opts) {
  return [
    new Dotenv({
      path: path.resolve(__dirname, `../../.${opts.buildFor}.env`)
    }),
    new webpack.ProvidePlugin({})
  ];
}

function getEntry(opts) {
  return {
    main: path.resolve(__dirname, "../../lib/index.js")
  };
}

function getWebpackConfig(opts) {
  return {
    mode: "development",
    devtool: "inline-source-map",
    optimization: {
      usedExports: true
    },
    resolve: {
      // extensions: [".ts", ".tsx", ".js", ".jsx"],
      alias: {
        react: path.resolve("./node_modules/react"),
        "@fabulas/themes": path.resolve("../../../themes")
      }
    },
    externals: {
      react: {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react"
      },
      "react-dom": {
        root: "ReactDOM",
        commonjs2: "react-dom",
        commonjs: "react-dom",
        amd: "react-dom"
      },
      "react-native": "react-native"

      // "styled-system": "styled-system"
    },
    entry: getEntry(opts),
    output: getOutput(opts),
    module: getModule(opts),
    plugins: getPlugins(opts)
  };
}

module.exports = builds => {
  return builds.map(build => getWebpackConfig(build));
};
