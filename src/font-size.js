const { is, idx, arr, num, px, breaks, dec, media } = require('./util')
const { fontSizes } = require('./constants')

module.exports = props => {
  const f = props.fontSize || props.f
  if (!is(f)) return null

  const bp = breaks(props)
  const scale = idx([ 'theme', 'fontSizes' ], props) || fontSizes
  const val = arr(f)

  return val
    .map(fx(scale))
    .map(dec('font-size'))
    .map(media(bp))
    .join('')
}

const fx = scale => n => num(n) ? px(scale[n] || n) : n
