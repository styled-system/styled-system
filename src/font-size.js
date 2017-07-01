const { is, idx, arr, num, px, breaks, dec, media, merge } = require('./util')
const { fontSizes } = require('./constants')

module.exports = props => {
  const f = is(props.fontSize) ? props.fontSize : props.fontSize || props.f
  if (!is(f)) return null

  const bp = breaks(props)
  const scale = idx([ 'theme', 'fontSizes' ], props) || fontSizes
  const val = arr(f)

  return val
    .map(fx(scale))
    .map(dec('fontSize'))
    .map(media(bp))
    .reduce(merge, {})
}

const fx = scale => n => num(n) ? px(scale[n] || n) : n
