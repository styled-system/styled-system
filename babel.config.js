module.exports = {
  env: {
    test: {
      presets: [
        [ '@babel/env', { loose: true } ],
        '@babel/react'
      ],
      plugins: [
        '@babel/transform-runtime'
      ]
    },
    cjs: {
      presets: [
        [ '@babel/env', { loose: true } ]
      ],
      plugins: [
        '@babel/transform-runtime'
      ]
    },
    esm: {
      presets: [
        [ '@babel/env', { loose: true, modules: false } ]
      ],
      plugins: [
        ['@babel/transform-runtime', { useESModules: true }]
      ]
    },
  }
}
