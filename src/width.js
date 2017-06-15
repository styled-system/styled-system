const { is, arr, num, px, breaks, dec, media } = require('./util')

module.exports = props => {
  const w = props.width || props.w
  if (!is(w)) return null

  const bp = breaks(props)
  const val = arr(w)

  return val
    .map(wx)
    .map(dec('width'))
    .map(media(bp))
    .join('')
}

const wx = n => !num(n) || n > 1 ? px(n) : (n * 100) + '%'

