const { get, is, em, num, breaks, dec, media, merge } = require('./util')
const { measures } = require('./constants')
const width = require('./width')

module.exports = props => {
  const n = props.measure

  if(!is(n)) return null

  const scale = get(props, 'theme.measures', measures)

  if (!Array.isArray(n)) {
    return {
      width: mx(scale)(n)
    }
  }

  const bp = breaks(props)

  return n
    .map(mx(scale))
    .map(dec('width'))
    .map(media(bp))
    .reduce(merge, {})
}

const mx = scale => n => num(n) ? em(scale[n] || n) : n
