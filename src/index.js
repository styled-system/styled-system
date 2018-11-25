import PropTypes from 'prop-types'

// utils
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
export const { isArray } = Array
export const isObject = n => (typeof n === 'object' && n !== null)

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

export const createMediaQuery = n => `@media screen and (min-width: ${px(n)})`

const getStyles = (props, style, val) => {
  if (!isObject(val)) {
    return style(val)
  }

  // how to hoist this up??
  const breakpoints = get(props.theme, 'breakpoints') || defaultBreakpoints
  
  if (isArray(val)) {
    const styles = style(val[0]) || {}
    for (let i = 1; i < val.length; i++) {
      const rule = style(val[i])
      if (rule) {
        const media = createMediaQuery(breakpoints[i - 1])
        styles[media] = rule
      }
    }
    return styles
  }

  let styles = {}
  for (let breakpoint in val) {
    const minWidth = breakpoints[breakpoint]
    if (!minWidth) {
      styles = { ...styles, ...style(val[breakpoint]) }
    } else {
      const rule = style(val[breakpoint])
      const media = createMediaQuery(minWidth)
      styles[media] = rule
    }
  }

  return styles
}

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

    return getStyles(props, style, val)
  }

  fn.propTypes = { [prop]: cloneFunc(propTypes.responsive) }

  fn.propTypes[prop].meta = {
    prop,
    themeKey: key,
    styleType: 'responsive'
  }

  return fn
}

export const getWidth = n => !num(n) || n > 1 ? px(n) : (n * 100) + '%'

// variant
export const variant = ({
  key,
  prop = 'variant'
}) => {
  const fn = (props) => get(props.theme, key, props[prop]) || null
  fn.propTypes = {
    [prop]: propTypes.numberOrString
  }
  return fn
}

export const util = {
  propTypes,
  defaultBreakpoints,
  is,
  num,
  px,
  get,
  themeGet,
  cloneFunc,
  merge,
  compose,
  createMediaQuery,
  style,
}

// space
const isNegative = n => n < 0
const REG = /^[mp][trblxy]?$/
const properties = {
  m: 'margin',
  p: 'padding'
}
const directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: [ 'Left', 'Right' ],
  y: [ 'Top', 'Bottom' ],
}

const getProperties = key => {
  const [ a, b ] = key.split('')
  const property = properties[a]
  const direction = directions[b] || ''
  return Array.isArray(direction)
    ? direction.map(dir => property + dir)
    : [ property + direction ]
}

const getValue = scale => n => {
  if (!num(n)) {
    return px(scale[n] || n)
  }
  const abs = Math.abs(n)
  const neg = isNegative(n)
  const value = scale[abs] || abs
  if (!num(value)) {
    return neg ? '-' + value : value
  }
  return px(value * (neg ? -1 : 1))
}

const defaultScale = [
  0, 4, 8, 16, 32, 64, 128, 256, 512
]

export const space = props => {
  const keys = Object.keys(props)
    .filter(key => REG.test(key))
    .sort()
  const scale = get(props.theme, 'space') || defaultScale
  const getStyle = getValue(scale)

  return keys
    .map(key => {
      const val = props[key]
      const properties = getProperties(key)

      const style = n => is(n) ? properties.reduce((a, prop) => ({
        ...a,
        [prop]: getStyle(n)
      }), {}) : null

      return getStyles(props, style, val)
    })
    .reduce(merge, {})
}

space.propTypes = {
  m:  cloneFunc(propTypes.responsive),
  mt: cloneFunc(propTypes.responsive),
  mr: cloneFunc(propTypes.responsive),
  mb: cloneFunc(propTypes.responsive),
  ml: cloneFunc(propTypes.responsive),
  mx: cloneFunc(propTypes.responsive),
  my: cloneFunc(propTypes.responsive),
  p:  cloneFunc(propTypes.responsive),
  pt: cloneFunc(propTypes.responsive),
  pr: cloneFunc(propTypes.responsive),
  pb: cloneFunc(propTypes.responsive),
  pl: cloneFunc(propTypes.responsive),
  px: cloneFunc(propTypes.responsive),
  py: cloneFunc(propTypes.responsive)
}

const meta = prop => ({
  prop,
  themeKey: 'space',
  styleType: 'responsive'
})

Object.keys(space.propTypes).forEach(prop => {
  space.propTypes[prop].meta = meta(prop)
})

// styles
export const width = style({
  prop: 'width',
  transformValue: getWidth
})

export const fontSize = style({
  prop: 'fontSize',
  key: 'fontSizes',
  transformValue: px,
  scale: [
    12,
    14,
    16,
    20,
    24,
    32,
    48,
    64,
    72
  ]
})

export const textColor = style({
  prop: 'color',
  key: 'colors',
})

export const bgColor = style({
  prop: 'bg',
  cssProperty: 'backgroundColor',
  key: 'colors'
})

export const color = compose(
  textColor,
  bgColor
)

// typography
export const fontFamily = style({
  prop: 'fontFamily',
  key: 'fonts'
})

export const textAlign = style({
  prop: 'textAlign'
})

export const lineHeight = style({
  prop: 'lineHeight',
  key: 'lineHeights'
})

export const fontWeight = style({
  prop: 'fontWeight',
  key: 'fontWeights'
})

export const fontStyle = style({
  prop: 'fontStyle'
})

export const letterSpacing = style({
  prop: 'letterSpacing',
  key: 'letterSpacings',
  transformValue: px
})

// layout
export const display = style({
  prop: 'display'
})

export const maxWidth = style({
  prop: 'maxWidth',
  key: 'maxWidths',
  transformValue: px
})

export const minWidth = style({
  prop: 'minWidth',
  key: 'minWidths',
  transformValue: px
})

export const height = style({
  prop: 'height',
  key: 'heights',
  transformValue: px
})

export const maxHeight = style({
  prop: 'maxHeight',
  key: 'maxHeights',
  transformValue: px
})

export const minHeight = style({
  prop: 'minHeight',
  key: 'minHeights',
  transformValue: px
})

export const sizeWidth = style({
  prop: 'size',
  cssProperty: 'width',
  transformValue: px
})

export const sizeHeight = style({
  prop: 'size',
  cssProperty: 'height',
  transformValue: px
})

export const size = compose(
  sizeHeight,
  sizeWidth
)

export const ratioPadding = style({
  prop: 'ratio',
  cssProperty: 'paddingBottom',
  transformValue: n => (n * 100) + '%'
})

export const ratio = props => props.ratio ? ({
  height: 0,
  ...ratioPadding(props)
}) : null
ratio.propTypes = {
  ...ratioPadding.propTypes
}

export const verticalAlign = style({
  prop: 'verticalAlign'
})

// flexbox
export const alignItems = style({
  prop: 'alignItems'
})

export const alignContent = style({
  prop: 'alignContent'
})

export const justifyItems = style({
  prop: 'justifyItems'
})

export const justifyContent = style({
  prop: 'justifyContent'
})

export const flexWrap = style({
  prop: 'flexWrap'
})

export const flexBasis = style({
  prop: 'flexBasis',
  transformValue: getWidth
})


export const flexDirection = style({
  prop: 'flexDirection'
})

export const flex = style({
  prop: 'flex'
})

export const justifySelf = style({
  prop: 'justifySelf'
})

export const alignSelf = style({
  prop: 'alignSelf'
})

export const order = style({
  prop: 'order'
})

// grid
export const gridGap = style({
  prop: 'gridGap',
  transformValue: px,
  key: 'space'
})

export const gridColumnGap = style({
  prop: 'gridColumnGap',
  transformValue: px,
  key: 'space'
})

export const gridRowGap = style({
  prop: 'gridRowGap',
  transformValue: px,
  key: 'space'
})

export const gridColumn = style({
  prop: 'gridColumn'
})

export const gridRow = style({
  prop: 'gridRow'
})

export const gridAutoFlow = style({
  prop: 'gridAutoFlow'
})

export const gridAutoColumns = style({
  prop: 'gridAutoColumns'
})

export const gridAutoRows = style({
  prop: 'gridAutoRows'
})

export const gridTemplateColumns = style({
  prop: 'gridTemplateColumns'
})

export const gridTemplateRows = style({
  prop: 'gridTemplateRows'
})

export const gridTemplateAreas = style({
  prop: 'gridTemplateAreas'
})

export const gridArea = style({
  prop: 'gridArea'
})

// borders
const getBorder = n => num(n) && n > 0 ? n + 'px solid' : n

export const border = style({
  prop: 'border',
  key: 'borders',
  transformValue: getBorder
})

export const borderTop = style({
  prop: 'borderTop',
  key: 'borders',
  transformValue: getBorder
})

export const borderRight = style({
  prop: 'borderRight',
  key: 'borders',
  transformValue: getBorder
})

export const borderBottom = style({
  prop: 'borderBottom',
  key: 'borders',
  transformValue: getBorder
})

export const borderLeft = style({
  prop: 'borderLeft',
  key: 'borders',
  transformValue: getBorder
})

export const borders = compose(
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft
)

export const borderColor = style({
  prop: 'borderColor',
  key: 'colors'
})

export const borderRadius = style({
  prop: 'borderRadius',
  key: 'radii',
  transformValue: px,
})

export const boxShadow = style({
  prop: 'boxShadow',
  key: 'shadows'
})

export const opacity = style({
  prop: 'opacity'
})

export const overflow = style({
  prop: 'overflow'
})

// backgrounds
export const background = style({
  prop: 'background'
})

export const backgroundImage = style({
  prop: 'backgroundImage'
})

export const backgroundSize = style({
  prop: 'backgroundSize'
})

export const backgroundPosition = style({
  prop: 'backgroundPosition'
})

export const backgroundRepeat = style({
  prop: 'backgroundRepeat'
})

// position
export const position = style({
  prop: 'position'
})

export const zIndex = style({
  prop: 'zIndex'
})

export const top = style({
  prop: 'top',
  transformValue: px
})

export const right = style({
  prop: 'right',
  transformValue: px
})

export const bottom = style({
  prop: 'bottom',
  transformValue: px
})

export const left = style({
  prop: 'left',
  transformValue: px
})


export const textStyle = variant({
  prop: 'textStyle',
  key: 'textStyles'
})

export const colorStyle = variant({
  prop: 'colors',
  key: 'colorStyles',
})

export const buttonStyle = variant({
  key: 'buttons'
})

export const styles = {
  space,
  width,
  fontSize,
  textColor,
  bgColor,
  color,
  fontFamily,
  textAlign,
  lineHeight,
  fontWeight,
  fontStyle,
  letterSpacing,
  display,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  sizeWidth,
  sizeHeight,
  size,
  ratioPadding,
  ratio,
  verticalAlign,
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexWrap,
  flexBasis,
  flexDirection,
  flex,
  justifySelf,
  alignSelf,
  order,
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
  // borders
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  opacity,
  overflow,
  background,
  backgroundImage,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  textStyle,
  colorStyle,
  buttonStyle,
}

// mixed
const omit = (obj, blacklist) => {
  const next = {}
  for (let key in obj) {
    if (blacklist.indexOf(key) > -1) continue
    next[key] = obj[key]
  }
  return next
}

const funcs = Object.keys(styles)
  .map(key => styles[key])
  .filter(fn => typeof fn === 'function')

const blacklist = funcs.reduce((a, fn) => [
  ...a,
  ...Object.keys(fn.propTypes || {})
], [ 'theme' ])


export const mixed = props => funcs
  .map(fn => fn(props))
  .reduce(merge, omit(props, blacklist))
