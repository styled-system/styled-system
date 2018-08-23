import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'

const input = 'src/index.js'

export default [
  /* throws syntax error with `export * as`
  {
    input: 'src/index.js',
    dest: pkg.browser,
    format: 'umd',
    moduleName: 'styled-system',
    plugins: [
      resolve(),
      commonjs(),
      babel({
        plugins: ['external-helpers'],
        exclude: ['node_modules/**']
      })
    ]
  },
  */
  {
    input: 'src/index.js',
    external: [
      'prop-types'
    ],
    targets: [
      { dest: pkg.main, format: 'cjs' },
      { dest: pkg.module, format: 'es' }
    ],
    plugins: [
      babel({
        exclude: ['node_modules/**']
      })
    ]
  }
]
