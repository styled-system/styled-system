import {
  get,
  arr,
  px,
  neg,
  num,
  breaks,
  dec,
  media,
  merge
} from './util'
import { space } from './constants'

const REG = /^[mp][trblxy]?$/

export default props => {
  const keys = Object.keys(props)
    .filter(key => REG.test(key))
    .sort()
  const bp = breaks(props)
  const sc = get(props, 'theme.space', space)

  return keys.map(key => {
    const val = props[key]
    const p = getProperties(key)

    if (!Array.isArray(val)) {
      return p.reduce((a, b) => Object.assign(a, {
        [b]: mx(sc)(val)
      }), {})
    }

    return arr(val)
      .map(mx(sc))
      .map(dec(p))
      .map(media(bp))
      .reduce(merge, {})
  }).reduce(merge, {})
}

const mx = scale => n => {
  if (!num(n)) {
    return n
  }

  const value = scale[Math.abs(n)] || Math.abs(n)
  if (!num(value)) {
    return value
  }

  return px(value * (neg(n) ? -1 : 1));
}

const getProperties = key => {
  const [ a, b ] = key.split('')
  const prop = properties[a]
  const dirs = directions[b] || [ '' ]
  return dirs.map(dir => prop + dir)
}

const properties = {
  m: 'margin',
  p: 'padding'
}

const directions = {
  t: [ 'Top' ],
  r: [ 'Right' ],
  b: [ 'Bottom' ],
  l: [ 'Left' ],
  x: [ 'Left', 'Right' ],
  y: [ 'Top', 'Bottom' ],
}
