import propTypes from './prop-types'
import defaultTheme, { breakpoints } from './constants'

const is = n => n !== undefined && n !== null
const num = n => typeof n === 'number' && !isNaN(n)
const px = n => num(n) ? n + 'px' : n
const neg = n => n < 0
const arr = n => Array.isArray(n) ? n : [ n ]

const get = (obj, path, fallback) => path.split('.')
  .reduce((a, b) => (a && a[b]) ? a[b] : null, obj) || fallback

const mq = n => `@media screen and (min-width: ${px(n)})`

const fallbackTheme = props => get(props, 'theme', defaultTheme)

const breaks = props => [
  null,
  ...get(props, 'theme.breakpoints', breakpoints).map(mq)
]

const dec = props => val => arr(props)
  .reduce((acc, prop) => (acc[prop] = val, acc), {})

const media = bp => (d, i) => is(d)
  ? bp[i] ? ({ [bp[i]]: d }) : d
  : null

const merge = (a, b) => Object.assign({}, a, b, Object.keys(b).reduce((obj, key) =>
  Object.assign(obj, {
    [key]: a[key] !== null && typeof a[key] === 'object'
    ? merge(a[key], b[key])
    : b[key]
  }),
  {}))

const blacklist = Object.keys(propTypes)
  .reduce((a, key) => [
    ...a,
    ...Object.keys(propTypes[key])
  ], [])

const removeProps = props => {
  if (process.env.NODE_ENV === 'development') {
    console.log('remove-props is deprecated and will be removed in v3 of styled-system')
  }

  const next = {}

  for (let key in props) {
    if (blacklist.includes(key)) continue
    next[key] = props[key]
  }

  return next
}

const getValue = (val, getter, toPx) =>
  typeof getter === 'function'
    ? getter(val)
    : toPx ? px(val) : val

const style = ({
  prop,         // react prop
  cssProperty,  // css property
  alias,        // shorthand alias for react prop
  key,          // key for theme object
  getter,       // accessor function for converting values
  numberToPx
}) => props => {
  cssProperty = cssProperty || prop
  const n = is(props[prop]) ? props[prop] : props[alias]
  const th = fallbackTheme(props)
  if (!is(n)) return null
  const value = getValue(
    get(th, [ key, n ].join('.'), n),
    getter,
    numberToPx
  )

  return { [cssProperty]: value }
}

const responsiveStyle = ({
  prop,
  cssProperty,
  alias,
  key,
  getter,
  numberToPx
}) => props => {
  cssProperty = cssProperty || prop
  const n = is(props[prop]) ? props[prop] : props[alias]
  if (!is(n)) return null

  const bp = breaks(props)
  const th = fallbackTheme(props)
  const sx = n => getValue(
    get(th, [ key || prop, n ].join('.'), n),
    getter,
    numberToPx
  )

  if (!Array.isArray(n)) {
    return {
      [cssProperty]: sx(n)
    }
  }

  const val = arr(n)
  return val
    .map(sx)
    .map(dec(cssProperty))
    .map(media(bp))
    .reduce(merge, {})
}

const pseudoStyle = (pseudoclass, prop) => (keys = {}) => props => {
  const style = props[prop || pseudoclass]
  const numberToPx = keys.numberToPx || {}
  for (let key in style) {
    const toPx = numberToPx[key]

    if (!keys[key] && !toPx) continue
    const themeKey = [ keys[key], style[key] ].join('.')
    const th = fallbackTheme(props)
    style[key] = get(th, themeKey, style[key])

    if (toPx) style[key] = px(style[key])
  }

  return {
    ['&:' + pseudoclass]: style
  }
}

const theme = (keys, fallback) => props => get(props.theme, keys, fallback)

export {
  get,
  is,
  px,
  neg,
  num,
  arr,
  breaks,
  media,
  dec,
  merge,
  mq,
  removeProps,
  getValue,
  style,
  pseudoStyle,
  responsiveStyle,
  theme
}
