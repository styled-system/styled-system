import PropTypes from 'prop-types'

const noop = n => n

export const propTypes = {
  numberOrString: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  responsive: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
}

export const defaultBreakpoints = [ 40, 52, 64, ].map(n => n + 'em')
export const is = n => n !== undefined && n !== null
export const num = n => typeof n === 'number' && !isNaN(n)
export const px = n => num(n) ? n + 'px' : n

export const get = (obj, ...paths) => paths.join('.').split('.')
  .reduce((a, b) => (a && a[b]) ? a[b] : null, obj)

export const themeGet = (paths, fallback) => props => get(props.theme, paths) || fallback

export const cloneFunc = fn => (...args) => fn(...args)

export const merge = (a, b) => Object.assign({}, a, b, Object
  .keys(b || {}).reduce((obj, key) =>
    Object.assign(obj, {
      [key]: a[key] !== null && typeof a[key] === 'object'
      ? merge(a[key], b[key])
      : b[key]
    }),
    {}))

export const compose = (...funcs) => {
  const fn = props => funcs
    .map(fn => fn(props))
    .filter(Boolean)
    .reduce(merge, {})

  fn.propTypes = funcs
    .map(fn => fn.propTypes)
    .reduce(merge, {})
  return fn
}

export const createMediaQuery = n => `@media screen and (min-width: ${n})`

export const style = ({
  prop,
  cssProperty,
  key,
  getter,
  transformValue,
  scale: defaultScale = {}
}) => {
  const css = cssProperty || prop
  const transform  = transformValue || getter || noop
  const fn = props => {
    const val = props[prop]
    if (!is(val)) return null

    const scale = get(props.theme, key) || defaultScale
    const style = n => is(n) ? ({
      [css]: transform(
        get(scale, n) || n
      )
    }) : null

    if (!Array.isArray(val)) {
      return style(val)
    }

    // how to hoist this up??
    const breakpoints = [
      null,
      ...(get(props.theme, 'breakpoints') || defaultBreakpoints)
        .map(createMediaQuery)
    ]

    let styles = {}

    for (let i = 0; i < val.length; i++) {
      const media = breakpoints[i]
      if (!media) {
        styles = style(val[i])
        continue
      }
      const rule = style(val[i])
      if (!rule) continue
      styles[media] = rule
    }

    return styles
  }

  fn.propTypes = { [prop]: cloneFunc(propTypes.responsive) }

  fn.propTypes[prop].meta = {
    prop,
    themeKey: key,
    styleType: 'responsive'
  }

  return fn
}
