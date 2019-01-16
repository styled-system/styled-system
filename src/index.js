//
// prototype for v4
//
//  - returns arrays of style objects instead of merging (this should work with css-in-js libs)
//
// todo
//  - [ ] simplify array vs object check
//  - [ ] use compose function to create `color` function
//  - [ ] use compose function to create `space` function
//  - [ ] add default core style functions
//    - [ ] width
//    - [ ] fontSize
//    - [ ] color
//    - [ ] space
//  - [ ] require theme.mediaQuery instead of theme.breakpoints ??

import PropTypes from 'prop-types'

export const defaultBreakpoints = [40, 52, 64].map(n => n + 'em')

export const propType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array,
  PropTypes.object,
])

export const cloneFunction = fn => (...args) => fn(...args)

export const get = (obj, ...paths) => paths
  .reduce((a, path) => (
    a || (path + '')
      .split('.')
      .reduce((a, b) => (a && a[b]) ? a[b] : null, obj)
  ), null) || paths[paths.length - 1]

export const themeGet = (paths, fallback) => props => get(props.theme, paths, fallback)

export const is = n => n !== undefined && n !== null

export const isObject = n => typeof n === 'object' && n !== null

export const noop = n => n

export const num = n => typeof n === 'number' && !isNaN(n)

export const px = n => (num(n) ? n + 'px' : n)

export const createMediaQuery = n => `@media screen and (min-width: ${px(n)})`

// todo
// - [ ] ability to transform negative scalar values
export const style = ({
  prop,
  cssProperty,
  alias,
  key,
  transformValue = noop
}) => {
  const property = cssProperty || prop
  const func = props => {
    const value = props[prop] || props[alias]
    if (!is(value)) return null
    const scale = get(props.theme, key) || {}
    const createStyle = n => is(n) ? ({
      [property]: transformValue(get(scale, n))
    }) : null

    if (!isObject(value)) return createStyle(value)

    const breakpoints = get(props.theme, 'breakpoints', defaultBreakpoints)

    const styles = []
    if (Array.isArray(value)) {
      styles.push(createStyle(value[0]))
      for (let i = 1; i < value.length; i++) {
        const rule = createStyle(value[i])
        if (rule) {
          const media = createMediaQuery(breakpoints[i - 1])
          styles.push({ [media]: rule })
        }
      }
    } else {
      for (let key in value) {
        const breakpoint = breakpoints[key]
        const media = createMediaQuery(breakpoint)
        const rule = createStyle(value[key])
        if (!breakpoint) {
          styles.push(rule)
        } else {
          styles.push({ [media]: rule })
        }
      }
    }

    return styles
  }

  func.propTypes = {
    [prop]: cloneFunction(propType)
  }

  if (alias) func.propTypes[alias] = cloneFunction(propType)

  return func
}

// extras
export const compose = (...funcs) => {
  const func = props =>
    funcs
      .map(fn => fn(props))
      .filter(Boolean)

  func.propTypes = {}
  funcs.forEach(fn => {
    func.propTypes = {
      ...func.propTypes,
      ...fn.propTypes,
    }
  })
  // fn.propTypes = funcs.map(fn => fn.propTypes).reduce(merge, {})
  return func
}
