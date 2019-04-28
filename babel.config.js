module.exports = {
  env: {
    test: {
      presets: [['@babel/preset-env', { loose: true }], '@babel/react'],
    },
  },
}
