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
//  - Removes `ratio` function
//  - TODO: changes to border functions
//
//  - [ ] fontSize scale

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
    return keys.reduce((a, key) => (a && is(a[key]) ? a[key] : null), obj)
  }, null)
  return is(value) ? value : paths[paths.length - 1]
}

export const themeGet = (path, fallback = null) => props =>
  get(props.theme, path, fallback)

export const is = n => n !== undefined && n !== null

export const isObject = n => typeof n === 'object' && n !== null

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
  scale: defaultScale = {},
}) => {
  const property = cssProperty || prop
  const func = props => {
    // TODO write some tests for this
    const value = get(props, prop, alias, null)
    if (!is(value)) return null
    const scale = get(props.theme, key, defaultScale)
    const createStyle = n =>
      is(n)
        ? {
            [property]: transformValue(n, scale),
          }
        : null

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
    [prop]: cloneFunction(propType),
  }

  if (alias) func.propTypes[alias] = cloneFunction(propType)

  return func
}

export const compose = (...funcs) => {
  const func = props => {
    const n = funcs.map(fn => fn(props)).filter(Boolean)
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

export const variant = ({ key, prop = 'variant' }) => {
  const fn = props => get(props.theme, [key, props[prop]].join('.'), null)
  fn.propTypes = {
    [prop]: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }
  return fn
}

// space

const spaceScale = [0, 4, 8, 16, 32, 64, 128, 256, 512]

const getSpace = (n, scale) => {
  if (!num(n)) return n
  const isNegative = n < 0
  const absolute = Math.abs(n)
  const value = get(scale, absolute)
  if (!num(value)) {
    return isNegative ? '-' + value : value
  }
  return px(value * (isNegative ? -1 : 1))
}

export const margin = style({
  prop: 'margin',
  alias: 'm',
  key: 'space',
  transformValue: getSpace,
  scale: spaceScale,
})

export const marginTop = style({
  prop: 'marginTop',
  alias: 'mt',
  key: 'space',
  transformValue: getSpace,
  scale: spaceScale,
})

export const marginBottom = style({
  prop: 'marginBottom',
  alias: 'mb',
  key: 'space',
  transformValue: getSpace,
  scale: spaceScale,
})

export const marginLeft = style({
  prop: 'marginLeft',
  alias: 'ml',
  key: 'space',
  transformValue: getSpace,
  scale: spaceScale,
})

export const marginRight = style({
  prop: 'marginRight',
  alias: 'mr',
  key: 'space',
  transformValue: getSpace,
  scale: spaceScale,
})

export const padding = style({
  prop: 'padding',
  alias: 'p',
  key: 'space',
  transformValue: getSpace,
  scale: spaceScale,
})

export const paddingTop = style({
  prop: 'paddingTop',
  alias: 'pt',
  key: 'space',
  transformValue: getSpace,
  scale: spaceScale,
})

export const paddingBottom = style({
  prop: 'paddingBottom',
  alias: 'pb',
  key: 'space',
  transformValue: getSpace,
  scale: spaceScale,
})

export const paddingLeft = style({
  prop: 'paddingLeft',
  alias: 'pl',
  key: 'space',
  transformValue: getSpace,
  scale: spaceScale,
})

export const paddingRight = style({
  prop: 'paddingRight',
  alias: 'pr',
  key: 'space',
  transformValue: getSpace,
  scale: spaceScale,
})

export const space = mapProps(props => ({
  ...props,
  mt: props.my,
  mb: props.my,
  ml: props.mx,
  mr: props.mx,
  pt: props.py,
  pb: props.py,
  pl: props.px,
  pr: props.px,
}))(
  compose(
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight
  )
)

// color
export const textColor = style({
  prop: 'color',
  key: 'colors',
})

export const backgroundColor = style({
  prop: 'backgroundColor',
  alias: 'bg',
  key: 'colors',
})

export const color = compose(
  textColor,
  backgroundColor
)

// width
export const getWidth = (n, scale) => (!num(n) || n > 1 ? px(n) : n * 100 + '%')

export const width = style({
  prop: 'width',
  key: 'widths',
  transformValue: getWidth,
})

// typography

export const getPx = (n, scale) => px(get(scale, n))

export const fontSize = style({
  prop: 'fontSize',
  key: 'fontSizes',
  transformValue: getPx,
  scale: [12, 14, 16, 20, 24, 32, 48, 64, 72],
})

export const fontFamily = style({
  prop: 'fontFamily',
  key: 'fonts',
})

export const fontWeight = style({
  prop: 'fontWeight',
  key: 'fontWeights',
})

export const lineHeight = style({
  prop: 'lineHeight',
  key: 'lineHeights',
})

export const textAlign = style({
  prop: 'textAlign',
})

export const fontStyle = style({
  prop: 'fontStyle',
})

export const letterSpacing = style({
  prop: 'letterSpacing',
  key: 'letterSpacings',
  transformValue: getPx,
})

// layout
export const display = style({
  prop: 'display',
})

export const maxWidth = style({
  prop: 'maxWidth',
  key: 'maxWidths',
  transformValue: getPx,
})

export const minWidth = style({
  prop: 'minWidth',
  key: 'minWidths',
  transformValue: getPx,
})

export const height = style({
  prop: 'height',
  key: 'heights',
  transformValue: getPx,
})

export const maxHeight = style({
  prop: 'maxHeight',
  key: 'maxHeights',
  transformValue: getPx,
})

export const minHeight = style({
  prop: 'minHeight',
  key: 'minHeights',
  transformValue: getPx,
})

export const size = mapProps(props => ({
  ...props,
  width: props.size,
  height: props.size,
}))(
  compose(
    width,
    height
  )
)

export const verticalAlign = style({ prop: 'verticalAlign' })

// flexbox
export const alignItems = style({ prop: 'alignItems' })
export const alignContent = style({ prop: 'alignContent' })
export const justifyItems = style({ prop: 'justifyItems' })
export const justifyContent = style({ prop: 'justifyContent' })
export const flexWrap = style({ prop: 'flexWrap' })
export const flexBasis = style({ prop: 'flexBasis', transformValue: getWidth })
export const flexDirection = style({ prop: 'flexDirection' })
export const flex = style({ prop: 'flex' })
export const justifySelf = style({ prop: 'justifySelf' })
export const alignSelf = style({ prop: 'alignSelf' })
export const order = style({ prop: 'order' })

// grid
export const gridGap = style({
  prop: 'gridGap',
  key: 'space',
  transformValue: getPx,
})

export const gridColumnGap = style({
  prop: 'gridColumnGap',
  key: 'space',
  transformValue: getPx,
})

export const gridRowGap = style({
  prop: 'gridRowGap',
  key: 'space',
  transformValue: getPx,
})

export const gridColumn = style({ prop: 'gridColumn' })
export const gridRow = style({ prop: 'gridRow' })
export const gridAutoFlow = style({ prop: 'gridAutoFlow' })
export const gridAutoColumns = style({ prop: 'gridAutoColumns' })
export const gridAutoRows = style({ prop: 'gridAutoRows' })
export const gridTemplateColumns = style({ prop: 'gridTemplateColumns' })
export const gridTemplateRows = style({ prop: 'gridTemplateRows' })
export const gridTemplateAreas = style({ prop: 'gridTemplateAreas' })
export const gridArea = style({ prop: 'gridArea' })

// borders

// export const getBorder = (n, scale) =>
export const border = style({
  prop: 'border',
  key: 'borders',
})

export const borderWidth = style({
  prop: 'borderWidth',
  key: 'borderWidths',
  transformValue: getPx,
})

export const borderStyle = style({
  prop: 'borderStyle',
  key: 'borderStyles',
})

export const borderColor = style({
  prop: 'borderColor',
  key: 'colors',
})

export const borderTop = style({
  prop: 'borderTop',
  key: 'borders',
})

export const borderRight = style({
  prop: 'borderRight',
  key: 'borders',
})

export const borderBottom = style({
  prop: 'borderBottom',
  key: 'borders',
})

export const borderLeft = style({
  prop: 'borderLeft',
  key: 'borders',
})

export const borderRadius = style({
  prop: 'borderRadius',
  key: 'radii',
  transformValue: getPx,
})

export const borders = compose(
  border,
  borderStyle,
  borderWidth,
  borderColor,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderRadius
)

export const boxShadow = style({
  prop: 'boxShadow',
  key: 'shadows',
})

export const opacity = style({ prop: 'opacity' })
export const overflow = style({ prop: 'overflow' })

// backgrounds
export const background = style({ prop: 'background' })
export const backgroundImage = style({ prop: 'backgroundImage' })
export const backgroundSize = style({ prop: 'backgroundSize' })
export const backgroundPosition = style({ prop: 'backgroundPosition' })
export const backgroundRepeat = style({ prop: 'backgroundRepeat' })

// position
export const position = style({ prop: 'position' })
export const zIndex = style({ prop: 'zIndex', key: 'zIndices' })
export const top = style({ prop: 'top', transformValue: getPx })
export const right = style({ prop: 'right', transformValue: getPx })
export const bottom = style({ prop: 'bottom', transformValue: getPx })
export const left = style({ prop: 'left', transformValue: getPx })

// variants
export const buttonStyle = variant({ key: 'buttons' })
export const textStyle = variant({ key: 'textStyles' })
export const colorStyle = variant({ key: 'colorStyles' })
