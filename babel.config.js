module.exports = function getConfig(api) {
  const isRollup = api.caller(
    caller => caller && caller.name === 'rollup-plugin-babel'
  )
  if (!isRollup)
    return {
      presets: [['@babel/preset-env', { loose: true }], '@babel/react'],
    }
  return {
    presets: [['@babel/preset-env', { loose: true, modules: false }]],
    plugins: [
      'babel-plugin-annotate-pure-calls',
      ['@babel/transform-runtime', { useESModules: true }],
    ],
  }
}
