const { is, idx, arr, num, px, breaks, dec, media, merge } = require('./util')

module.exports = (key, prop, boolValue) => props => {
  prop = prop || key
  const n = props[prop]
  if (!is(n)) return null

  const bp = breaks(props)
  const scale = idx([ 'theme', prop ], props) || {}
  const val = arr(n)

  return val
    .map(bool(boolValue))
    .map(sx(scale))
    .map(dec(key))
    .map(media(bp))
    .reduce(merge, {})
}

const bool = val => n => n === true ? val : n
const sx = scale => n => is(n) ? scale[n] || n : n
