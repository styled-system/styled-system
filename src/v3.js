import PropTypes from 'prop-types'

// utils
const noop = n => n

export const propTypes = {
  numberOrString: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  responsive: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
}

export const defaultBreakpoints = [40, 52, 64].map(n => n + 'em')
export const is = n => n !== undefined && n !== null
export const num = n => typeof n === 'number' && !isNaN(n)
export const px = n => (num(n) ? n + 'px' : n)
export const isObject = n => typeof n === 'object' && n !== null

export const get = (obj, ...paths) =>
  paths
    .join('.')
    .split('.')
    .reduce((a, b) => (a && a[b] ? a[b] : null), obj)

export const themeGet = (paths, fallback) => props =>
  get(props.theme, paths) || fallback

export const cloneFunc = fn => (...args) => fn(...args)

export const merge = (a, b) =>
  Object.assign(
    {},
    a,
    b,
    Object.keys(b || {}).reduce(
      (obj, key) =>
        Object.assign(obj, {
          [key]:
            a[key] !== null && typeof a[key] === 'object'
              ? merge(a[key], b[key])
              : b[key],
        }),
      {}
    )
  )

export const compose = (...funcs) => {
  const fn = props =>
    funcs
      .map(fn => fn(props))
      .filter(Boolean)
      .reduce(merge, {})

  fn.propTypes = funcs.map(fn => fn.propTypes).reduce(merge, {})
  return fn
}

export const createMediaQuery = n => `@media screen and (min-width: ${px(n)})`

const getStyles = ({ props, style, value }) => {
  if (!isObject(value)) {
    return style(value)
  }

  // how to hoist this up??
  const breakpoints = get(props.theme, 'breakpoints') || defaultBreakpoints

  if (Array.isArray(value)) {
    const styles = style(value[0]) || {}
    for (let i = 1; i < value.length; i++) {
      const rule = style(value[i])
      if (rule) {
        const media = createMediaQuery(breakpoints[i - 1])
        styles[media] = rule
      }
    }
    return styles
  }

  const styles = {}
  for (let breakpoint in value) {
    const minWidth = breakpoints[breakpoint]
    if (!minWidth) {
      Object.assign(styles, style(value[breakpoint]))
    } else {
      const rule = style(value[breakpoint])
      const media = createMediaQuery(minWidth)
      styles[media] = rule
    }
  }

  return styles
}

export const style = ({
  prop,
  cssProperty,
  key,
  getter,
  transformValue,
  scale: defaultScale = {},
}) => {
  const css = cssProperty || prop
  const transform = transformValue || getter || noop
  const fn = props => {
    const value = props[prop]
    if (!is(value)) return null

    const scale = get(props.theme, key) || defaultScale
    const style = n =>
      is(n)
        ? {
            [css]: transform(get(scale, n) || n),
          }
        : null

    return getStyles({ props, style, value })
  }

  fn.propTypes = { [prop]: cloneFunc(propTypes.responsive) }

  return fn
}

export const util = {
  propTypes,
  defaultBreakpoints,
  is,
  num,
  px,
  get,
  themeGet,
  cloneFunc,
  merge,
  compose,
  createMediaQuery,
  style,
}

// space
//
// TODO
// - rewrite based on core style function
const isNegative = n => n < 0
const REG = /^[mp][trblxy]?$/
const properties = {
  m: 'margin',
  p: 'padding',
}
const directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom'],
}

const getProperties = key => {
  const [a, b] = key.split('')
  const property = properties[a]
  const direction = directions[b] || ''
  return Array.isArray(direction)
    ? direction.map(dir => property + dir)
    : [property + direction]
}

const getValue = scale => n => {
  if (!num(n)) {
    return px(get(scale, n) || n)
  }
  const abs = Math.abs(n)
  const neg = isNegative(n)
  const value = scale[abs] || abs
  if (!num(value)) {
    return neg ? '-' + value : value
  }
  return px(value * (neg ? -1 : 1))
}

const defaultScale = [0, 4, 8, 16, 32, 64, 128, 256, 512]

export const space = props => {
  const keys = Object.keys(props)
    .filter(key => REG.test(key))
    .sort()
  const scale = get(props.theme, 'space') || defaultScale
  const getStyle = getValue(scale)

  return keys
    .map(key => {
      const value = props[key]
      const properties = getProperties(key)

      const style = n =>
        is(n)
          ? properties.reduce(
              (a, prop) => ({
                ...a,
                [prop]: getStyle(n),
              }),
              {}
            )
          : null

      return getStyles({ props, style, value })
    })
    .reduce(merge, {})
}

space.propTypes = {
  m: cloneFunc(propTypes.responsive),
  mt: cloneFunc(propTypes.responsive),
  mr: cloneFunc(propTypes.responsive),
  mb: cloneFunc(propTypes.responsive),
  ml: cloneFunc(propTypes.responsive),
  mx: cloneFunc(propTypes.responsive),
  my: cloneFunc(propTypes.responsive),
  p: cloneFunc(propTypes.responsive),
  pt: cloneFunc(propTypes.responsive),
  pr: cloneFunc(propTypes.responsive),
  pb: cloneFunc(propTypes.responsive),
  pl: cloneFunc(propTypes.responsive),
  px: cloneFunc(propTypes.responsive),
  py: cloneFunc(propTypes.responsive),
}


