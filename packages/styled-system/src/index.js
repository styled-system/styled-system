<<<<<<< HEAD
export {
  get,
  createParser,
  createStyleFunction,
  style,
  compose,
} from './core'
// split up into separate packages
export { variant } from './variant'
export { themeGet } from './themeGet'
export {
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginX,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY,
  space,
=======
import PropTypes from 'prop-types'

const compare = (a, b) => {
  if (a < b) return -1
  if (a > b) return 1
  return 0
}

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

// loosely based on deepmerge package
export const merge = (a, b) => {
  const result = {}
  for (const key in a) {
    result[key] = a[key]
  }
  for (const key in b) {
    if (!a[key] || typeof a[key] !== 'object') {
      result[key] = b[key]
    } else {
      result[key] = merge(a[key], b[key])
    }
  }
  return result
}

const mergeAll = (...args) => {
  let result = {}
  for (let i = 0; i < args.length; i++) {
    result = merge(result, args[i])
  }
  return result
}

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
      for (let i = 1; i < value.slice(0, breakpoints.length + 1).length; i++) {
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
      styles.sort(compare)
    }

    return mergeAll(...styles)
  }

  func.propTypes = {
    [prop]: cloneFunction(propType),
  }
  func.propTypes[prop].meta = {
    prop,
    themeKey: key,
  }

  if (alias) {
    func.propTypes[alias] = cloneFunction(propType)
    func.propTypes[alias].meta = {
      prop: alias,
      themeKey: key,
    }
  }

  return func
}

export const compose = (...funcs) => {
  const func = props => {
    const n = funcs.map(fn => fn(props)).filter(Boolean)
    return mergeAll(...n)
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

export const mapProps = mapper => func => {
  const next = props => func(mapper(props))
  for (const key in func) {
    next[key] = func[key]
  }
  return next
}

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
  if (!num(n)) {
    return px(get(scale, n, n))
  }

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
>>>>>>> master
  textColor,
  backgroundColor,
  color,
  width,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  textAlign,
  fontStyle,
  letterSpacing,
  display,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  size,
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
  border,
  borderWidth,
  borderStyle,
  borderColor,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderRadius,
  borders,
  boxShadow,
  opacity,
  overflow,
  background,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  buttonStyle,
  textStyle,
  colorStyle,
} from './styles'
