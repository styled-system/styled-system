import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import { sizeSnapshot } from 'rollup-plugin-size-snapshot'
import pkg from './package.json'

const input = 'src/index.js'
const name = 'styledSystem'

const external = id => !id.startsWith('.') && !id.startsWith('/')

const getBabelOptions = ({ useESModules }) => ({
  exclude: '**/node_modules/**',
  runtimeHelpers: true,
  plugins: [
    'babel-plugin-annotate-pure-calls',
    ['@babel/plugin-transform-runtime', { useESModules }],
  ],
})

export default [
  {
    input,
    output: { file: `dist/styled-system.umd.js`, format: 'umd', name },
    plugins: [
      nodeResolve(),
      commonjs(),
      babel(getBabelOptions({ useESModules: true })),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    ],
  },
  {
    input,
    output: { file: 'dist/styled-system.min.js', format: 'umd', name },
    plugins: [
      nodeResolve(),
      commonjs(),
      babel(getBabelOptions({ useESModules: true })),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      terser(),
    ],
  },
  {
    input,
    output: { file: pkg.main, format: 'cjs' },
    external,
    plugins: [babel(getBabelOptions({ useESModules: false })), sizeSnapshot()],
  },
  {
    input,
    output: { file: pkg.module, format: 'esm' },
    external,
    plugins: [babel(getBabelOptions({ useESModules: true })), sizeSnapshot()],
  },
]
