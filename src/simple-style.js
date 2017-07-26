const { is, idx } = require('./util')

module.exports = ({
  scale,        // object or array to extract values from
  key,          // key for theme object
  prop,         // react prop
  cssProperty   // css property
}) => props => {
  const n = props[prop]
  if (!is(n)) return null
  const scale = idx([ 'theme', key ], props) || {}
  const val = is(n) ? scale[n] || n : n

  return { [cssProperty]: val }
}
