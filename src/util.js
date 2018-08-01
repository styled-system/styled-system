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
const defaultBreakpointsKeys = ['small', 'medium', 'large']
export const defaultBreakpointsObject = defaultBreakpoints.reduce((acc, val, index) => {
  acc[defaultBreakpointsKeys[index]] = val
  return acc
}, {})
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

    const isArrayValue = Array.isArray(val)
    const isObjectValue = !isArrayValue && val === Object(val)

    if (!isArrayValue && !isObjectValue) {
      return style(val)
    }

    const breakpointRawValues = get(props.theme, 'breakpoints') || (
      isObjectValue ?
        defaultBreakpointsObject :
        defaultBreakpoints
    )
    let breakpointKeys

    if (isObjectValue) {
      breakpointKeys = ['', ...Object.keys(breakpointRawValues)]
    }
    // how to hoist this up??
    const breakpoints = isObjectValue ?
      breakpointKeys.reduce((acc, key) => {
        const value = breakpointRawValues[key]
        if (!value) {
          return acc
        }
        acc[key] = createMediaQuery(breakpointRawValues[key])
        return acc
      }, {}) :
      [
        null,
        ...breakpointRawValues.map(createMediaQuery)
      ]

    let styles = {}
    let finalVal = isObjectValue ?
      breakpointKeys.reduce((acc, key) => acc.push(val[key]) && acc, []) :
      val
    
    for (let i = 0; i < finalVal.length; i++) {
      const media = breakpoints[isObjectValue ? breakpointKeys[i] : i]
      if (!media) {
        styles = style(finalVal[i])
        continue
      }
      const rule = style(finalVal[i])
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
