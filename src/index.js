//  v4 prototype
//
//  - Returns arrays of styles for responsive and composed styles. This should work the same as before when combined with CSS-in-JS libraries like styled-components and emotion
//  - Refactors `space` function to use core `style` function
//  - Adds long-hand props for margin and padding. Shorthand aliases still work.
//  - The get utility works differently, returning the last argument as a fallback.
//  - **UNDER CONSIDERATION** Requires a `theme.mediaQueries` field with full media query strings instead of the `theme.breakpoints` array.
//  - Removes the `styles` export
//  - Removes `meta` field from `propTypes` - this was used by system-docs. An alternative/optional object export for documentation will be added
//  - Removes the `merge` utility
//  - Removes `mixed` utility
//  - The theme scale is passed as the second argument to the `transformValue` option in `style`
//
//  - [ ] move space to index.js
//  - [ ] width
//  - [ ] color
//  - [ ] fontSize
//  - [ ] variant
//  - [ ] other style functions

import PropTypes from 'prop-types'

export const defaultBreakpoints = [40, 52, 64].map(n => n + 'em')

export const propType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array,
  PropTypes.object,
])

export const cloneFunction = fn => (...args) => fn(...args)

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

const getValue = (n, scale) => get(scale, n)

export const style = ({
  prop,
  cssProperty,
  alias,
  key,
  transformValue = getValue,
  scale: defaultScale = {}
}) => {
  const property = cssProperty || prop
  const func = props => {
    // TODO write some tests for this
    const value = get(props, prop, alias, null)
    if (!is(value)) return null
    const scale = get(props.theme, key, defaultScale)
    const createStyle = n => is(n) ? ({
      [property]: transformValue(n, scale)
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

export const compose = (...funcs) => {
  const func = props => {
    const n = funcs
      .map(fn => fn(props))
      .filter(Boolean)
    return n
  }

  func.propTypes = {}
  funcs.forEach(fn => {
    func.propTypes = {
      ...func.propTypes,
      ...fn.propTypes,
    }
  })

  return func
}

export const mapProps = mapper => func => props => func(mapper(props))
