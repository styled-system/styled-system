const { breakpoints } = require('./constants')

const is = n => n !== undefined && n !== null
const num = n => typeof n === 'number' && !isNaN(n)
const px = n => num(n) ? n + 'px' : n
const em = n => num(n) ? n + 'em' : n
const neg = n => n < 0
const arr = n => Array.isArray(n) ? n : [ n ]

const get = (obj, path, fallback) => path.split('.')
  .reduce((a, b) => (a && a[b]) ? a[b] : null, obj) || fallback

const mq = n => `@media screen and (min-width: ${em(n)})`

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

const style = ({
  key,          // key for theme object
  prop,         // react prop
  cssProperty,  // css property
  numberToPx
}) => props => {
  const n = props[prop]
  if (!is(n)) return null
  const val = get(props, [ 'theme', key, n ].join('.'), n)
  const value = numberToPx ? px(val) : val

  return { [cssProperty || prop]: value }
}

const pseudoStyle = (pseudoclass, prop) => (keys = {}) => props => {
  const style = props[prop || pseudoclass]
  const numberToPx = keys.numberToPx || {}
  for (let key in style) {
    const toPx = numberToPx[key]

    if (!keys[key] && !toPx) continue
    const themeKey = [ keys[key], style[key] ].join('.')
    style[key] = get(props.theme, themeKey, style[key])

    if (toPx) style[key] = px(style[key])
  }

  return {
    ['&:' + pseudoclass]: style
  }
}

const responsiveStyle = ({
  cssProperty,
  prop,
  boolValue,
  key,
  numberToPx
}) => props => {
  prop = prop || cssProperty
  const n = props[prop]
  if (!is(n)) return null

  const bp = breaks(props)
  const scale = get(props, [ 'theme', key || prop ].join('.'), {})
  const sx = val => get(scale, '' + val, numberToPx ? px(val) : val)

  if (!Array.isArray(n)) {
    return {
      [cssProperty]: sx(
        bool(boolValue)(n)
      )
    }
  }

  const val = arr(n)
  return val
    .map(bool(boolValue))
    .map(sx)
    .map(dec(cssProperty))
    .map(media(bp))
    .reduce(merge, {})
}

const bool = val => n => {
  if (Array.isArray(val))
    return n === true ? val[0] : val[1];

  return n === true ? val : n;
}

const theme = (keys, fallback) => props => get(props.theme, keys, fallback)

export {
  get,
  is,
  px,
  em,
  neg,
  num,
  arr,
  breaks,
  media,
  dec,
  merge,
  mq,
  style,
  pseudoStyle,
  responsiveStyle,
  theme
}
