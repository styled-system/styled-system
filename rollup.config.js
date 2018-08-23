import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'

const input = 'src/index.js'

export default [
  {
    input: 'src/index.js',
    external: [
      'prop-types'
    ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      babel({
        exclude: ['node_modules/**'],
        plugins: [ 'external-helpers' ]
      })
    ]
  }
]
