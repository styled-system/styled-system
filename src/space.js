const { arr, px } = require('./util')

const REG = /^[mp][trblxy]$/

module.exports = props => {
  const keys = Object.keys(props).filter(key => REG.test(key))

  return keys.map(key => {
    const val = arr(props[key])
    const p = getProperties(key)
    return val.map((v, i) => {
    }).join('')
  })
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
  t: [ '-top' ],
  r: [ '-right' ],
  b: [ '-bottom' ],
  l: [ '-left' ],
  x: [ '-left', '-right' ],
  y: [ '-top', '-bottom' ],
}

