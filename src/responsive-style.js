import { get, is, arr, num, px, breaks, dec, media, merge } from './util'

export default (...args) => props => {
  // support for legacy API
  const [ arg, _prop, _bool ] = args
  let {
    cssProperty,
    prop,
    boolValue,
    key,
    numberToPx
  } = typeof arg === 'string'
    ? { cssProperty: arg, prop: _prop, boolValue: _bool }
    : arg

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

const bool = val => n => n === true ? val : n
