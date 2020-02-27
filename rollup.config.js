import typescript from '@wessberg/rollup-plugin-ts';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';

export default {
  input: 'lib/index.ts',
  plugins: [
    json(),
    external(),
    resolve(),
    typescript({
      transformers: [],
    }),
    commonjs({
      include: /node_modules/,
      namedExports: {
        'styled-components-modifiers': ['applyStyleModifiers'],
      },
    }),
  ],
};
