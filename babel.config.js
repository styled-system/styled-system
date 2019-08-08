module.exports = {
  presets: [['@babel/env' ], '@babel/preset-react'],
  // plugins: ['@babel/transform-runtime'],
  env: {
    esm: {
      presets: [
        ['@babel/env', { modules: false }],
        '@babel/preset-react',
      ],
      // plugins: [['@babel/transform-runtime', { useESModules: true }]],
    },
  },
}
