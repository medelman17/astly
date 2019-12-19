import pkg from "./package.json";
import common from "../../rollup.config.js";

const isNative =
  typeof process.env.IS_NATIVE !== "undefined" &&
  process.env.IS_NATIVE === "true";

const plugins = isNative ? [] : [];

const output = isNative
  ? [
      {
        file: pkg["react-native"],
        format: "cjs",
        exports: "named",
        sourcemap: true
      }
    ]
  : [
      {
        file: pkg.main,
        format: "cjs",
        exports: "named",
        sourcemap: true
      },
      {
        file: pkg.module,
        format: "es",
        exports: "named",
        sourcemap: true
      }
    ];

const config = {
  input: "lib/index.ts",
  output,
  plugins: [...plugins, ...common.plugins]
};

export default Object.assign(common, config);
