import PropTypes from 'prop-types'
import deepmerge from 'deepmerge' // < 1kb payload overhead when lodash/merge is > 3kb.

// PropTypes
export const propType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array,
  PropTypes.object,
])

// Utils
export const cloneFunction = fn => (...args) => fn(...args)
export const is = n => n !== undefined && n !== null
export const isObject = n => typeof n === 'object' && n !== null
export const num = n => typeof n === 'number' && !Number.isNaN(n)
const string = n => typeof n === 'string' && n !== ''
const func = n => typeof n === 'function'
const negative = n => n < 0

// Media
const getBreakpoint = (breakpoints, breakpoint) => {
  console.log(breakpoints, breakpoint)
  const value = breakpoints[breakpoint]
  if (value === undefined) return false
  return value !== 0 ? value : null
}
export const createMediaQuery = value =>
  `@media screen and (min-width: ${value})`
export const defaultBreakpoints = [40, 52, 64].map(n => `${n}em`)

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

function merge(acc, item) {
  if (!item) {
    return acc
  }

  return deepmerge(acc, item, {
    clone: false, // No need to clone deep, it's way faster.
  })
}

// Style
function callOrReturn(fn, arg) {
  if (!func(fn)) return fn
  const next = fn(arg)
  return callOrReturn(next, arg)
}

function getThemeValue(theme, path, initial) {
  if (!theme) return undefined
  return callOrReturn(get(initial || theme, path, undefined), { theme })
}

function getValue(value, variants, theme) {
  if (is(variants)) {
    const valueFromVariants = getThemeValue(theme, value, variants)
    if (is(valueFromVariants)) {
      return valueFromVariants
    }
  }
  return value
}

function styleFromValue(cssProperties, value, theme, key, transformValue) {
  const variants = getThemeValue(theme, key)
  const computedValue = getValue(value, variants, theme)
  if (string(computedValue) || num(computedValue)) {
    const style = {}
    for (let i = 0; i < cssProperties.length; i++) {
      style[cssProperties[i]] = transformValue
        ? transformValue(computedValue, {
            rawValue: value,
            variants,
          })
        : computedValue
    }
    return style
  }
  return null
}

function getBreakpoints(theme) {
  const themeBreakpoints = getThemeValue(theme, 'breakpoints')
  const breakpoints = is(themeBreakpoints)
    ? themeBreakpoints
    : defaultBreakpoints
  // TODO deprecate in v5
  if (Array.isArray(breakpoints)) {
    const clonedBreakpoints = merge([], breakpoints)
    clonedBreakpoints.unshift(0)
    return clonedBreakpoints
  }
  return breakpoints
}

function createStyleGenerator(getStyle, props, generators) {
  const getStyles = props => {
    const theme = props.theme || null
    return getStyle(props, theme)
  }

  getStyles.meta = {
    props,
    getStyle,
    generators,
  }

  getStyles.propTypes = props.reduce((obj, prop) => {
    obj[prop] = propType
    return obj
  }, {})

  return getStyles
}

function styleFromBreakPoint(cssProperties, value, theme, key, transformValue) {
  const breakpoints = getBreakpoints(theme)
  const keys = Object.keys(value)
  let allStyle = {}
  for (let i = 0; i < keys.length; i++) {
    const breakpoint = keys[i]
    const style = styleFromValue(
      cssProperties,
      value[breakpoint],
      theme,
      key,
      transformValue
    )

    if (style !== null) {
      const breakpointValue = getBreakpoint(breakpoints, breakpoint)
      if (breakpointValue === false) {
        continue
      } else if (breakpointValue === null) {
        allStyle = merge(allStyle, style)
      } else if (breakpointValue) {
        allStyle = merge(allStyle, {
          [createMediaQuery(breakpointValue)]: style,
        })
      }
    }
  }
  return allStyle
}

function getStyleFactory(prop, cssProperties, key, transformValue) {
  return function getStyle(attrs, theme) {
    const value = attrs[prop]
    if (!is(value)) return null

    const style = styleFromValue(
      cssProperties,
      value,
      theme,
      key,
      transformValue
    )

    if (style !== null) {
      return style
    }

    if (isObject(value)) {
      return styleFromBreakPoint(
        cssProperties,
        value,
        theme,
        key,
        transformValue
      )
    }

    return null
  }
}

export function style({
  prop,
  cssProperties,
  cssProperty,
  alias,
  key = null,
  transformValue = null,
}) {
  cssProperties = cssProperties || (cssProperty ? [cssProperty] : [prop])
  const getStyle = getStyleFactory(prop, cssProperties, key, transformValue)
  const generator = createStyleGenerator(getStyle, [prop])

  if (!alias) {
    return generator
  }

  return compose(
    generator,
    style({ prop: alias, cssProperties, key, transformValue })
  )
}

function indexGeneratorsByProp(styles) {
  const index = {}
  for (let i = 0; i < styles.length; i++) {
    const style = styles[i]
    if (style && style.meta) {
      const propsKeys = Object.keys(style.meta.props)
      for (let j = 0; j < propsKeys.length; j++) {
        const prop = style.meta.props[propsKeys[j]]
        index[prop] = style
      }
    }
  }
  return index
}

export function compose(...generators) {
  let flatGenerators = []
  generators.forEach(gen => {
    if (gen.meta.generators) {
      flatGenerators = [...flatGenerators, ...gen.meta.generators]
    } else {
      flatGenerators.push(gen)
    }
  })

  const generatorsByProp = indexGeneratorsByProp(flatGenerators)

  function getStyle(attrs, theme) {
    const propKeys = Object.keys(attrs)
    const propCount = propKeys.length
    let allStyle = {}
    for (let i = 0; i < propCount; i++) {
      const propKey = propKeys[i]
      const generator = generatorsByProp[propKey]
      if (generator) {
        allStyle = merge(allStyle, generator.meta.getStyle(attrs, theme))
      }
    }
    return allStyle
  }

  const props = flatGenerators.reduce(
    (keys, generator) => [...keys, ...generator.meta.props],
    []
  )

  return createStyleGenerator(getStyle, props, generators)
}

export const mapProps = mapper => func => {
  const next = props => func(mapper(props))
  for (const key in func) {
    next[key] = func[key]
  }
  return next
}

// Variant
export const variant = ({ key, prop = 'variant' }) => props =>
  get(props.theme, [key, props[prop]].join('.')) || null

// Units
export const px = value => (num(value) && value !== 0 ? `${value}px` : value)
export const getPx = px
export const getWidth = n => (!num(n) || n > 1 ? px(n) : `${n * 100}%`)

// Scale
const DEFAULT_SPACE = [0, 4, 8, 16, 32, 64, 128, 256, 512]

const scale = (defaultVariants = DEFAULT_SPACE) => (
  transformedValue,
  { rawValue, variants = defaultVariants }
) => {
  if (!num(rawValue)) {
    return px(variants[rawValue] || rawValue)
  }
  const abs = Math.abs(rawValue)
  const neg = negative(rawValue)
  const value = variants[abs] || abs
  if (!num(value)) {
    return neg ? `-${value}` : value
  }
  return px(value * (neg ? -1 : 1))
}

// Space
export const margin = style({
  prop: 'margin',
  alias: 'm',
  cssProperties: ['margin'],
  key: 'space',
  transformValue: scale(),
})

export const marginTop = style({
  prop: 'marginTop',
  alias: 'mt',
  cssProperties: ['marginTop'],
  key: 'space',
  transformValue: scale(),
})

export const marginRight = style({
  prop: 'marginRight',
  alias: 'mr',
  cssProperties: ['marginRight'],
  key: 'space',
  transformValue: scale(),
})

export const marginBottom = style({
  prop: 'marginBottom',
  alias: 'mb',
  cssProperties: ['marginBottom'],
  key: 'space',
  transformValue: scale(),
})

export const marginLeft = style({
  prop: 'marginLeft',
  alias: 'ml',
  cssProperties: ['marginLeft'],
  key: 'space',
  transformValue: scale(),
})

export const padding = style({
  prop: 'padding',
  alias: 'p',
  cssProperties: ['padding'],
  key: 'space',
  transformValue: scale(),
})

export const paddingTop = style({
  prop: 'paddingTop',
  alias: 'pt',
  cssProperties: ['paddingTop'],
  key: 'space',
  transformValue: scale(),
})

export const paddingRight = style({
  prop: 'paddingRight',
  alias: 'pr',
  cssProperties: ['paddingRight'],
  key: 'space',
  transformValue: scale(),
})

export const paddingBottom = style({
  prop: 'paddingBottom',
  alias: 'pb',
  cssProperties: ['paddingBottom'],
  key: 'space',
  transformValue: scale(),
})

export const paddingLeft = style({
  prop: 'paddingLeft',
  alias: 'pl',
  cssProperties: ['paddingLeft'],
  key: 'space',
  transformValue: scale(),
})

export const space = mapProps(props => ({
  ...props,
  mt: is(props.my) ? props.my : props.mt,
  mb: is(props.my) ? props.my : props.mb,
  ml: is(props.mx) ? props.mx : props.ml,
  mr: is(props.mx) ? props.mx : props.mr,
  pt: is(props.py) ? props.py : props.pt,
  pb: is(props.py) ? props.py : props.pb,
  pl: is(props.px) ? props.px : props.pl,
  pr: is(props.px) ? props.px : props.pr,
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

// Typography
export const fontSize = style({
  prop: 'fontSize',
  key: 'fontSizes',
  transformValue: scale([12, 14, 16, 20, 24, 32, 48, 64, 72]),
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

export const textAlign = style({ prop: 'textAlign' })
export const fontStyle = style({ prop: 'fontStyle' })

export const letterSpacing = style({
  prop: 'letterSpacing',
  key: 'letterSpacings',
  transformValue: px,
})

export const textColor = style({
  prop: 'color',
  key: 'colors',
})

// Layout
export const display = style({ prop: 'display' })

export const width = style({
  prop: 'width',
  key: 'widths',
  transformValue: getWidth,
})

export const maxWidth = style({
  prop: 'maxWidth',
  key: 'maxWidths',
  transformValue: getWidth,
})

export const minWidth = style({
  prop: 'minWidth',
  key: 'minWidths',
  transformValue: getWidth,
})

export const height = style({
  prop: 'height',
  key: 'heights',
  transformValue: getWidth,
})

export const maxHeight = style({
  prop: 'maxHeight',
  key: 'maxHeights',
  transformValue: getWidth,
})

export const minHeight = style({
  prop: 'minHeight',
  key: 'minHeights',
  transformValue: getWidth,
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

// Flexboxes
export const alignItems = style({ prop: 'alignItems' })
export const alignContent = style({ prop: 'alignContent' })
export const justifyItems = style({ prop: 'justifyItems' })
export const justifyContent = style({ prop: 'justifyContent' })
export const flexWrap = style({ prop: 'flexWrap' })
export const flexBasis = style({
  prop: 'flexBasis',
  transformValue: getWidth,
})
export const flexDirection = style({ prop: 'flexDirection' })
export const flex = style({ prop: 'flex' })
export const justifySelf = style({ prop: 'justifySelf' })
export const alignSelf = style({ prop: 'alignSelf' })
export const order = style({ prop: 'order' })

// Grid
export const gridGap = style({
  prop: 'gridGap',
  key: 'space',
  transformValue: scale(),
})

export const gridColumnGap = style({
  prop: 'gridColumnGap',
  key: 'space',
  transformValue: scale(),
})

export const gridRowGap = style({
  prop: 'gridRowGap',
  key: 'space',
  transformValue: scale(),
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

// Backgrounds
export const background = style({ prop: 'background' })

export const backgroundColor = style({
  prop: 'backgroundColor',
  alias: 'bg',
  key: 'colors',
})

export const backgroundImage = style({ prop: 'backgroundImage' })
export const backgroundSize = style({ prop: 'backgroundSize' })
export const backgroundPosition = style({ prop: 'backgroundPosition' })
export const backgroundRepeat = style({ prop: 'backgroundRepeat' })

// Borders

export const border = style({
  prop: 'border',
  key: 'borders',
})

export const borderWidth = style({
  prop: 'borderWidth',
  key: 'borderWidths',
  transformValue: px,
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
  transformValue: px,
})

export const borders = compose(
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderWidth,
  borderStyle,
  borderColor,
  borderRadius
)

// Color
export const color = compose(
  backgroundColor,
  textColor
)

// Position
export const position = style({ prop: 'position' })
export const zIndex = style({ prop: 'zIndex', key: 'zIndices' })
export const top = style({ prop: 'top', transformValue: px })
export const right = style({ prop: 'right', transformValue: px })
export const bottom = style({ prop: 'bottom', transformValue: px })
export const left = style({ prop: 'left', transformValue: px })

// Misc
export const opacity = style({ prop: 'opacity' })
export const overflow = style({ prop: 'overflow' })

export const boxShadow = style({
  prop: 'boxShadow',
  key: 'shadows',
})

// Variants
export const buttonStyle = variant({ key: 'buttons' })
export const textStyle = variant({ key: 'textStyles', prop: 'textStyle' })
export const colorStyle = variant({ key: 'colorStyles', prop: 'colors' })
