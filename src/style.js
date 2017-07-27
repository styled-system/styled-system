const { is, idx } = require('./util')

module.exports = ({
  key,          // key for theme object
  prop,         // react prop
  cssProperty   // css property
}) => props => {
  const n = props[prop]
  if (!is(n)) return null
  const scale = idx([ 'theme', key ], props) || {}
  const val = scale[n] || n

  return { [cssProperty || prop]: val }
}
