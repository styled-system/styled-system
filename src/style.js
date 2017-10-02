const { get, is } = require('./util')

module.exports = ({
  key,          // key for theme object
  prop,         // react prop
  cssProperty   // css property
}) => props => {
  const n = props[prop]
  if (!is(n)) return null
  const val = get(props, [ 'theme', key, n ].join('.'), n)

  return { [cssProperty || prop]: val }
}
