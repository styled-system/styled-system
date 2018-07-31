import babel from 'rollup-plugin-babel';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import pkg from './package.json';

const input = './src/index.js';

// treat as external everything except relative, absolute and reserved paths
const external = id =>
  !id.startsWith('\0') && !id.startsWith('.') && !id.startsWith('/');

const babelOptions = {
  plugins: ['external-helpers']
};

export default [
  {
    input,
    output: { file: pkg.main, format: 'cjs' },
    external,
    plugins: [
      babel(babelOptions),
      sizeSnapshot()
    ]
  },

  {
    input,
    output: { file: pkg.module, format: 'esm' },
    external,
    plugins: [
      babel(babelOptions),
      sizeSnapshot()
    ]
  }
];
