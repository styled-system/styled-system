const { get, is, arr, num, px, breaks, dec, media, merge } = require('./util')

module.exports = ({
  cssProperty,
  prop,
  boolValue,
  key,
  numberToPx
}) => props => {
  prop = prop || cssProperty
  const n = props[prop]
  if (!is(n)) return null

  const bp = breaks(props)
  const scale = get(props, [ 'theme', key || prop ].join('.'), {})
  const sx = val => get(scale, '' + val, numberToPx ? px(val) : val)

  if (!Array.isArray(n)) {
    return {
      [cssProperty]: sx(
        bool(boolValue)(n)
      )
    }
  }

  const val = arr(n)
  return val
    .map(bool(boolValue))
    .map(sx)
    .map(dec(cssProperty))
    .map(media(bp))
    .reduce(merge, {})
}

const bool = val => n => {
  if (Array.isArray(val))
    return n === true ? val[0] : val[1];

  return n === true ? val : n;
}
