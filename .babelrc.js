const modules = process.env.BABEL_ENV === 'cjs' || process.env.NODE_ENV === 'test' ? 'commonjs' : false

module.exports = {
  presets: [
    ['env', { loose: true, modules }],
    'react'
  ],
  plugins: ['annotate-pure-calls'],
}
