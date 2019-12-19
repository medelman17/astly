import pkg from "./package.json";
import common from "../../rollup.config.js";
import replace from "@rollup/plugin-replace";

const isNative =
  typeof process.env.IS_NATIVE !== "undefined" &&
  process.env.IS_NATIVE === "true";

const plugins = isNative
  ? [
      replace({
        "styled-components": "styled-components/native"
      })
    ]
  : [
      replace({
        "react-native": "react-native-web"
      })
    ];

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
  plugins: [...plugins, ...common.plugins],
  external: ["react", "react-dom"]
};

export default Object.assign(common, config);
