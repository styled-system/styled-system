import { get, is, arr, num, px, breaks, dec, media, merge } from './util'
import { fontSizes } from './constants'

export default props => {
  const n = is(props.fontSize) ? props.fontSize : props.fontSize || props.f
  if (!is(n)) return null

  const scale = get(props, 'theme.fontSizes', fontSizes)

  if (!Array.isArray(n)) {
    return {
      fontSize: fx(scale)(n)
    }
  }

  const bp = breaks(props)

  return n
    .map(fx(scale))
    .map(dec('fontSize'))
    .map(media(bp))
    .reduce(merge, {})
}

const fx = scale => n => num(n) ? px(scale[n] || n) : n
