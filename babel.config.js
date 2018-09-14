module.exports = {
  env: {
    test: {
      presets: [
        [ '@babel/env', { loose: true } ],
        '@babel/react'
      ]
    },
    cjs: {
      presets: [
        [ '@babel/env', { loose: true } ]
      ]
    },
    esm: {
      presets: [
        [ '@babel/env', { loose: true, modules: false } ]
      ]
    },
  }
}
