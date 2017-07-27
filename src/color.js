const { breaks, idx, merge, arr, dec, media } = require('./util')

const REG = /^color|bg$/

module.exports = props => {
  const keys = Object.keys(props).filter(key => REG.test(key))
  const bp = breaks(props)
  const palette = idx([ 'theme', 'colors' ], props) || {}

  return keys.map(key => {
    const val = props[key]
    const prop = properties[key] || key

    if (!Array.isArray(val)) {
      return {
        [prop]: cx(palette)(val)
      }
    }

    return val
      .map(cx(palette))
      .map(dec(prop))
      .map(media(bp))
      .reduce(merge, {})
  }).reduce(merge, {})
}

const cx = obj => n => idx(getKeys(n), obj) || n
const getKeys = n => typeof n === 'string' ? n.split('.') : [ n ]

const properties = {
  bg: 'backgroundColor'
}
