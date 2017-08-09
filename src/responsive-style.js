const { is, idx, arr, num, px, breaks, dec, media, merge } = require('./util')

module.exports = (keys, prop, boolValue) => props => {
  const bp = breaks(props)
  const rule = []

  arr(keys).forEach(key => {
    prop = prop || key
    const scale = idx([ 'theme', prop ], props) || {}
    const val = props[prop]

    if (!is(val)) return null

    if (!Array.isArray(val)) {
      rule.push({
        [key]: sx(scale)(
          bool(boolValue)(val)
        )
      })
    }

    rule.push(arr(val)
      .map(bool(boolValue))
      .map(sx(scale))
      .map(dec(keys))
      .map(media(bp))
      .reduce(merge, {})
    )
  })

  if (rule.length === 0) return null

  return rule.reduce(merge, {})
}

const bool = val => n => n === true ? val : n
const sx = scale => n => is(n) ? scale[n] || n : n
