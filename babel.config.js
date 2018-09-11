module.exports = {
  env: {
    test: {
      presets: [
        '@babel/env',
        '@babel/react'
      ],
    },
    cjs: {
      presets: [
        [ '@babel/env', { loose: true } ]
      ],
    },
    esm: {
      presets: [
        [ '@babel/env', { loose: true, modules: false } ]
      ],
    },
  }
}
