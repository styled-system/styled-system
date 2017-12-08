const { get, is, px, num, breaks, dec, media, merge } = require('./util')
const { maxWidths } = require('./constants')
const width = require('./width')

module.exports = props => {
  const n = props.maxWidth

  if(!is(n)) return null

  const scale = get(props, 'theme.maxWidths', maxWidths)

  if (!Array.isArray(n)) {
    return {
      maxWidth: mx(scale)(n)
    }
  }

  const bp = breaks(props)

  return n
    .map(mx(scale))
    .map(dec('maxWidth'))
    .map(media(bp))
    .reduce(merge, {})
}

const mx = scale => n => num(n) ? px(scale[n] || n) : n
