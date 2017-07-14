const {
  arr,
  idx,
  px,
  neg,
  num,
  breaks,
  dec,
  media,
  merge
} = require('./util')
const { scale } = require('./constants')

const REG = /^[mp][trblxy]?$/

module.exports = props => {
  const keys = Object.keys(props)
    .filter(key => REG.test(key))
    .sort()
  const bp = breaks(props)
  const sc = idx([ 'theme', 'space' ], props) || scale

  return keys.map(key => {
    const val = arr(props[key])
    const p = getProperties(key)
    return val
      .map(mx(sc))
      .map(dec(p))
      .map(media(bp))
      .reduce(merge, {})
  }).reduce(merge, {})
}

const mx = scale => n => num(n)
  ? px((scale[Math.abs(n)] || Math.abs(n)) * (neg(n) ? -1 : 1))
  : n

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

