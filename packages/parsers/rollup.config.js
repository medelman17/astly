import pkg from './package.json';
import common from '../../rollup.config.js';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import {sizeSnapshot} from 'rollup-plugin-size-snapshot';
import {terser} from 'rollup-plugin-terser';
const isNative =
  typeof process.env.IS_NATIVE !== 'undefined' &&
  process.env.IS_NATIVE === 'true';

const plugins = isNative ? [nodePolyfills()] : [nodePolyfills()];

const output = isNative
  ? [
      {
        file: pkg['react-native'],
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
    ]
  : [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'es',
        exports: 'named',
        sourcemap: true,
      },
    ];

const config = {
  input: 'lib/index.ts',
  output,
  plugins: [...plugins, ...common.plugins, sizeSnapshot(), terser()],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    'react',
    'react-native',
    'react-native-web',
  ],
};

export default Object.assign(common, config);
