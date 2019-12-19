import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";

export default {
  input: "lib/index.ts",
  plugins: [
    external(),
    resolve({
      customResolveOptions: {
        moduleDirectory: ["node_modules", "../../node_modules"]
      }
    }),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: "**/__tests__/**",
      clean: true
    }),
    commonjs({
      include: ["node_modules/**", "../../node_modules/**"]
    })
  ]
};
