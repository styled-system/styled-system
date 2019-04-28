/* eslint-disable import/no-extraneous-dependencies */
import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

function getConfig() {
  const name = 'styledSystem'
  const buildName = 'styled-system'

  const SOURCE_DIR = path.resolve(__dirname, 'src')
  const DIST_DIR = path.resolve(__dirname, 'dist')

  const baseConfig = {
    input: `${SOURCE_DIR}/index.js`,
    plugins: [
      babel({
        runtimeHelpers: true,
        exclude: 'node_modules/**',
        configFile: path.join(__dirname, 'babel.config.js'),
      }),
    ],
  }

  const esConfig = Object.assign({}, baseConfig, {
    output: {
      file: `${DIST_DIR}/${buildName}.esm.js`,
      format: 'esm',
    },
    external: id => !id.startsWith('.') && !id.startsWith('/'),
    plugins: [...baseConfig.plugins, resolve()],
  })

  const cjsConfig = Object.assign({}, esConfig, {
    output: {
      file: `${DIST_DIR}/${buildName}.cjs.js`,
      format: 'cjs',
    },
  })

  const globals = {}

  const umdConfig = Object.assign({}, baseConfig, {
    output: {
      name,
      file: `${DIST_DIR}/${buildName}.js`,
      format: 'umd',
      globals,
      exports: 'named',
      sourcemap: false,
    },
    external: Object.keys(globals),
    plugins: [...baseConfig.plugins, resolve({ browser: true }), commonjs()],
  })

  const minConfig = Object.assign({}, umdConfig, {
    output: {
      ...umdConfig.output,
      file: `${DIST_DIR}/${buildName}.min.js`,
    },
    plugins: [
      ...umdConfig.plugins,
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      terser(),
    ],
  })

  if (process.env.WATCH_MODE) {
    return [esConfig, cjsConfig]
  }

  return [esConfig, cjsConfig, umdConfig, minConfig]
}

export default getConfig()
