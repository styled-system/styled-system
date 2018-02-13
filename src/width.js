const { is, arr, num, px, breaks, dec, media, merge } = require('./util')

module.exports = props => {
  const n = is(props.width) ? props.width : props.width || props.w
  if (!is(n)) return null

  if (!Array.isArray(n)) {
    const val = wx(n)
    return is(val) ? {
      width: wx(n)
    } : null
  }

  const bp = breaks(props)

  return n
    .map(wx)
    .map(dec('width'))
    .map(media(bp))
    .reduce(merge, {})
}

const wx = n => !num(n) || n > 1 ? px(n) : (n * 100) + '%'

