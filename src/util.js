import PropTypes from 'prop-types'
import defaultTheme, { breakpoints } from './constants'

const propTypes = {
  responsive: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  numberOrString: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}

export const is = n => n !== undefined && n !== null
export const num = n => typeof n === 'number' && !isNaN(n)
export const px = n => num(n) ? n + 'px' : n
export const neg = n => n < 0
export const arr = n => Array.isArray(n) ? n : [ n ]

export const get = (obj, path, fallback) => path.split('.')
  .reduce((a, b) => (a && a[b]) ? a[b] : null, obj) || fallback

export const mq = n => `@media screen and (min-width: ${px(n)})`

export const fallbackTheme = props => ({
  ...defaultTheme,
  ...get(props, 'theme')
})

export const breaks = props => [
  null,
  ...get(props, 'theme.breakpoints', breakpoints).map(mq)
]

export const dec = props => val => arr(props)
  .reduce((acc, prop) => (acc[prop] = val, acc), {})

export const media = bp => (d, i) => is(d)
  ? bp[i] ? ({ [bp[i]]: d }) : d
  : null

export const merge = (a, b) => Object.assign({}, a, b, Object.keys(b).reduce((obj, key) =>
  Object.assign(obj, {
    [key]: a[key] !== null && typeof a[key] === 'object'
    ? merge(a[key], b[key])
    : b[key]
  }),
  {}))

export const getValue = (val, getter, toPx) =>
  typeof getter === 'function'
    ? getter(val)
    : toPx ? px(val) : val

export const style = ({
  prop,         // react prop
  cssProperty,  // css property
  alias,        // shorthand alias for react prop
  key,          // key for theme object
  getter,       // accessor function for converting values
  numberToPx
}) => {
  const fn = props => {
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
  fn.propTypes = {
    [prop]: propTypes.numberOrString
  }
  if (alias) {
    fn.propTypes[alias] = propTypes.numberOrString
  }
  return fn
}

export const responsiveStyle = ({
  prop,
  cssProperty,
  alias,
  key,
  getter,
  numberToPx
}) => {
  const fn = props => {
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

  // add propTypes object to returned function
  fn.propTypes = {
    [prop]: propTypes.responsive
  }
  if (alias) {
    fn.propTypes[alias] = propTypes.responsive
  }

  return fn
}

export const pseudoStyle = ({
  prop,
  alias,
  pseudoclass,
  keys = {},
  getters = {},
  numberToPx = {}
}) => {
  const fn = props => {
    const style = props[prop] || props[alias]
    pseudoclass = pseudoclass || prop
    const th = fallbackTheme(props)
    for (let key in style) {
      const toPx = numberToPx[key]
      if (!keys[key] && !getters[key] && !toPx) continue
      const themeKey = [ keys[key], style[key] ].join('.')
      style[key] = getValue(
        get(th, themeKey, style[key]),
        getters[key],
        toPx
      )
    }

    return {
      ['&:' + pseudoclass]: style
    }
  }
  fn.propTypes = {
    [prop]: PropTypes.object
  }
  return fn
}

// todo: consider alternative names
export const themeGet = (keys, fallback) => props => get(props.theme, keys, fallback)

const getBooleans = props => {
  const bools = []
  for (let key in props) {
    if (props[key] !== true) continue
    bools.push(key)
  }
  return bools
}

export const complexStyle = ({
  prop,
  key,
  alias
}) => {
  const fn = props => {
    let style = get(props,
      [ 'theme', key,
        get(props, prop, props[alias])
      ].join('.'),
      {}
    )
    const bools = getBooleans(props)
    bools.forEach(name => {
      style = {
        ...style,
        ...get(props, [ 'theme', key, name ].join('.'), {})
      }
    })
    return style
  }

  fn.propTypes = {
    [prop]: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])
  }

  if (alias) {
    fn.propTypes[alias] = PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])
  }

  return fn
}
