//
// prototype for v4
//
//  - returns arrays of style objects instead of merging (this should work with css-in-js libs)
//
// todo
//  - [x] simplify array vs object check
//  - [x] pass `scale` as second argument to `transformValue`
//  - [ ] use compose function to create `color` function
//  - [ ] use compose function to create `space` function
//  - [ ] add default core style functions
//    - [ ] width
//    - [ ] fontSize
//    - [ ] color
//    - [ ] space
//  - [ ] add kitchen sink module
//  - [ ] require theme.mediaQuery instead of theme.breakpoints ??
//  - [ ] support prop={{ sm: null, md: 2 }} etc
//  - [ ] multiple aliases?

import PropTypes from 'prop-types'

export const defaultBreakpoints = [40, 52, 64].map(n => n + 'em')

export const propType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array,
  PropTypes.object,
])

export const cloneFunction = fn => (...args) => fn(...args)

// get(object, keys, fallback)
export const get = (obj, ...paths) => {
  const value = paths.reduce((a, path) => {
    if (is(a)) return a
    const keys = typeof path === 'string' ? path.split('.') : [path]
    return keys.reduce((a, key) => (a && is(a[key]))
        ? a[key]
        : null,
      obj)
  }, null)
  return is(value) ? value : paths[paths.length - 1]
}

export const themeGet = (path, fallback = null) => props => get(props.theme, path, fallback)

export const is = n => n !== undefined && n !== null

export const isObject = n => typeof n === 'object' && n !== null

export const noop = n => n

export const num = n => typeof n === 'number' && !isNaN(n)

export const px = n => (num(n) && n !== 0 ? n + 'px' : n)

export const createMediaQuery = n => `@media screen and (min-width: ${px(n)})`

export const style = ({
  prop,
  cssProperty,
  alias,
  // TODO
  // maybe use a mapProps function instead
  // OR a getProp function
  key,
  transformValue = noop
}) => {
  const property = cssProperty || prop
  const func = props => {
    // TODO write some tests for this
    const value = get(props, prop, alias, null)
    if (!is(value)) return null
    const scale = get(props.theme, key, {})
    const createStyle = n => is(n) ? ({
      [property]: transformValue(get(scale, n), scale)
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
          styles.unshift(rule)
        } else {
          styles.push({ [media]: rule })
        }
      }
      styles.sort()
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
  const func = props => {
    const n = funcs
      .map(fn => fn(props))
      .filter(Boolean)
    // TODO flatten??
    return n
  }

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

export const mapProps = mapper => func => props => func(mapper(props))
