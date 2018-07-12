import {
  propTypes,
  defaultBreakpoints,
  createMediaQuery,
  idx,
  is,
  px,
  num,
  merge,
} from './util'

const isNegative = n => n < 0

const REG = /^[mp][trblxy]?$/

const properties = {
  m: 'margin',
  p: 'padding'
}

const directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: [ 'Left', 'Right' ],
  y: [ 'Top', 'Bottom' ],
}

const getProperties = key => {
  const [ a, b ] = key.split('')
  const property = properties[a]
  const direction = directions[b] || ''
  return Array.isArray(direction)
    ? direction.map(dir => property + dir)
    : [ property + direction ]
}

const getValue = scale => n => {
  if (!num(n)) {
    return scale[n] || n
  }
  const abs = Math.abs(n)
  const neg = isNegative(n)
  const value = scale[abs] || abs
  if (!num(value)) {
    return neg ? '-' + value : value
  }
  return px(value * (neg ? -1 : 1))
}

const defaultScale = [
  0, 4, 8, 16, 32, 64, 128, 256, 512
]

const space = props => {
  const keys = Object.keys(props)
    .filter(key => REG.test(key))
    .sort()
  const scale = idx(props.theme, 'space') || defaultScale
  const getStyle = getValue(scale)

  return keys
    .map(key => {
      const value = props[key]
      const properties = getProperties(key)

      const style = n => is(n) ? properties.reduce((a, prop) => ({
        ...a,
        [prop]: getStyle(n)
      }), {}) : null

      if (!Array.isArray(value)) {
        return style(value)
      }

      const breakpoints = [
        null,
        ...(idx(props.theme, 'breakpoints') || defaultBreakpoints)
          .map(createMediaQuery)
      ]

      let styles = {}

      for (let i = 0; i < value.length; i++) {
        const media = breakpoints[i]
        if (!media) {
          styles = style(value[i])
          continue
        }
        const rule = style(value[i])
        if (!rule) continue
        styles[media] = rule
      }

      return styles
    })
    .reduce(merge, {})
}

space.propTypes = {
  m:  propTypes.responsive,
  mt: propTypes.responsive,
  mr: propTypes.responsive,
  mb: propTypes.responsive,
  ml: propTypes.responsive,
  mx: propTypes.responsive,
  my: propTypes.responsive,
  p:  propTypes.responsive,
  pt: propTypes.responsive,
  pr: propTypes.responsive,
  pb: propTypes.responsive,
  pl: propTypes.responsive,
  px: propTypes.responsive,
  py: propTypes.responsive
}

const meta = prop => ({
  prop,
  themeKey: 'space',
  styleType: 'responsive'
})

Object.keys(space.propTypes).forEach(prop => {
  space.propTypes[prop].meta = meta(prop)
})

export default space
