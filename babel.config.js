module.exports = {
  env: {
    test: {
      presets: [['@babel/env', { loose: true }], '@babel/preset-react'],
      plugins: ['@babel/transform-runtime'],
    },
    cjs: {
      presets: [['@babel/env', { loose: true }], '@babel/preset-react'],
      plugins: ['@babel/transform-runtime'],
    },
    esm: {
      presets: [
        ['@babel/env', { loose: true, modules: false }],
        '@babel/preset-react',
      ],
      plugins: [['@babel/transform-runtime', { useESModules: true }]],
    },
  },
}
