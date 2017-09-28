const { get, is, arr, num, px, breaks, dec, media, merge } = require('./util')

module.exports = (...args) => props => {
  // support for legacy API
  const [ arg, _prop, _bool ] = args
  let { cssProperty, prop, boolValue, key } = typeof arg === 'string'
    ? { cssProperty: arg, prop: _prop, boolValue: _bool }
    : arg

  prop = prop || cssProperty
  const n = props[prop]
  if (!is(n)) return null

  const bp = breaks(props)
  const scale = get(props, [ 'theme', key || prop ].join('.'), {})

  if (!Array.isArray(n)) {
    return {
      [cssProperty]: sx(scale)(
        bool(boolValue)(n)
      )
    }
  }

  const val = arr(n)
  return val
    .map(bool(boolValue))
    .map(sx(scale))
    .map(dec(cssProperty))
    .map(media(bp))
    .reduce(merge, {})
}

const bool = val => n => n === true ? val : n
const sx = scale => n => is(n) ? scale[n] || n : n
