import PropTypes from 'prop-types'
import assign from 'object-assign'

export const defaultBreakpoints = [40, 52, 64].map(n => n + 'em')

const scales = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
}

export const cloneFunction = fn => (...args) => fn(...args)
/* new implementation
export const get = (obj, key = '', def, p, undef) => {
  key = key.split ? key.split('.') : [key]
  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef
  }
  return obj === undef ? def : obj
}
*/
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
export const createMediaQuery = n => `@media screen and (min-width: ${n})`
const getPx = (n, scale) => px(get(scale, n))
const getValue = (n, scale) => get(scale, n)

// new implementation
export const createParser = (config = {}) => {
  const cache = {}
  const parse = (props) => {
    let styles = {}
    for (const key in props) {
      if (!config[key]) continue
      const sx = config[key]
      const raw = props[key]
      const scale = get(props.theme, sx.scale, sx.defaults)

      if (typeof raw === 'object') {
        cache.breakpoints = cache.breakpoints || get(props.theme, 'breakpoints', defaultBreakpoints)
        if (Array.isArray(raw)) {
          cache.media = cache.media || [ null, ...cache.breakpoints.map(createMediaQuery) ]
          assign(styles,
            parseResponsiveStyle(cache.media, sx, scale, raw)
          )
          continue
        }
        if (raw !== null) {
          assign(styles,
            parseResponsiveObject(cache.breakpoints, sx, scale, raw)
          )
        }
        continue
      }

      assign(styles, sx(raw, scale))
    }

    // v4 shim
    if (!Object.keys(styles).length) return null
    return styles
  }
  parse.config = config
  parse.propNames = Object.keys(config)
  parse.cache = cache
  return parse
}

const parseResponsiveStyle = (mediaQueries, sx, scale, raw) => {
  let styles = {}
  raw.slice(0, mediaQueries.length).forEach((value, i) => {
    const media = mediaQueries[i]
    const style = sx(value, scale)
    if (!media) {
      assign(styles, style)
    } else {
      assign(styles, {
        [media]: assign({}, styles[media], style)
      })
    }
  })
  return styles
}

const parseResponsiveObject = (breakpoints, sx, scale, raw) => {
  let styles = {}
  for (let key in raw) {
    const breakpoint = breakpoints[key]
    const value = raw[key]
    const style = sx(value, scale)
    if (!breakpoint) {
      assign(styles, style)
    } else {
      const media = createMediaQuery(breakpoint)
      assign(styles, {
        [media]: assign({}, styles[media], style)
      })
    }
  }
  return styles
}

export const createStyleFunction = ({
  properties,
  property,
  scale,
  transform = getValue,
  defaultScale,
}) => {
  properties = properties || [ property ]
  const sx = (value, scale) => {
    const result = {}
    const n = transform(value, scale)
    properties.forEach(prop => {
      result[prop] = n
    })
    return result
  }
  sx.scale = scale
  sx.defaults = defaultScale
  return sx
}

export const style = ({
  prop,
  cssProperty,
  alias,
  key,
  transformValue,
  scale,
  // new api
  properties,
}) => {
  const config = {}
  config[prop] = createStyleFunction({
    properties,
    property: cssProperty || prop,
    scale: key,
    defaultScale: scale,
    transform: transformValue,
  })
  if (alias) config[alias] = config[prop]
  const parse = createParser(config)

  // v4 shim
  parse.propTypes = {
    [prop]: cloneFunction(propType)
  }
  if (alias) {
    parse.propTypes[alias] = cloneFunction(propType)
  }

  return parse
}

export const compose = (...parsers) => {
  let config = {}
  let propTypes = {}
  parsers.forEach(parser => {
    assign(config, parser.config)
    assign(propTypes, parser.propTypes)
  })
  const parser = createParser(config)
  parser.propTypes = propTypes

  return parser
}

export const variant = ({
  key,
  prop = 'variant'
}) => {
  const sx = (value, scale) => {
    return get(scale, value, null)
  }
  sx.scale = key
  const config = {
    [prop]: sx
  }
  const parser = createParser(config)
  // v4 shim
  parser.propTypes = {
    [prop]: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }
  return parser
}


// space

const getSpace = (n, scale) => {
  if (!num(n)) {
    return getPx(n, scale)
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
  scale: scales.space,
})

export const marginTop = style({
  prop: 'marginTop',
  alias: 'mt',
  key: 'space',
  transformValue: getSpace,
  scale: scales.space,
})

export const marginBottom = style({
  prop: 'marginBottom',
  alias: 'mb',
  key: 'space',
  transformValue: getSpace,
  scale: scales.space,
})

export const marginLeft = style({
  prop: 'marginLeft',
  alias: 'ml',
  key: 'space',
  transformValue: getSpace,
  scale: scales.space,
})

export const marginRight = style({
  prop: 'marginRight',
  alias: 'mr',
  key: 'space',
  transformValue: getSpace,
  scale: scales.space,
})

export const padding = style({
  prop: 'padding',
  alias: 'p',
  key: 'space',
  transformValue: getSpace,
  scale: scales.space,
})

export const paddingTop = style({
  prop: 'paddingTop',
  alias: 'pt',
  key: 'space',
  transformValue: getSpace,
  scale: scales.space,
})

export const paddingBottom = style({
  prop: 'paddingBottom',
  alias: 'pb',
  key: 'space',
  transformValue: getSpace,
  scale: scales.space,
})

export const paddingLeft = style({
  prop: 'paddingLeft',
  alias: 'pl',
  key: 'space',
  transformValue: getSpace,
  scale: scales.space,
})

export const paddingRight = style({
  prop: 'paddingRight',
  alias: 'pr',
  key: 'space',
  transformValue: getSpace,
  scale: scales.space,
})

export const marginX = style({
  prop: 'marginX',
  properties: [ 'marginLeft', 'marginRight' ],
  alias: 'mx',
  key: 'space',
  transformValue: getSpace,
  scale: scales.space,
})

export const marginY = style({
  prop: 'marginY',
  properties: [ 'marginTop', 'marginBottom' ],
  alias: 'my',
  key: 'space',
  transformValue: getSpace,
  scale: scales.space,
})

export const paddingX = style({
  prop: 'paddingX',
  properties: [ 'paddingLeft', 'paddingRight' ],
  alias: 'px',
  key: 'space',
  transformValue: getSpace,
  scale: scales.space,
})

export const paddingY = style({
  prop: 'paddingY',
  properties: [ 'paddingTop', 'paddingBottom' ],
  alias: 'py',
  key: 'space',
  transformValue: getSpace,
  scale: scales.space,
})

export const space = compose(
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginX,
  marginY,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingX,
  paddingY
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

export const fontSize = style({
  prop: 'fontSize',
  key: 'fontSizes',
  scale: scales.fontSizes,
  transformValue: getPx,
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

export const size = style({
  prop: 'size',
  properties: [ 'width', 'height' ],
  key: 'sizes',
  transformValue: getPx,
})

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
  scale: scales.space,
  transformValue: getPx,
})

export const gridColumnGap = style({
  prop: 'gridColumnGap',
  key: 'space',
  scale: scales.space,
  transformValue: getPx,
})

export const gridRowGap = style({
  prop: 'gridRowGap',
  key: 'space',
  scale: scales.space,
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
export const textStyle = variant({ key: 'textStyles', prop: 'textStyle' })
export const colorStyle = variant({ key: 'colorStyles', prop: 'colors' })

//////// //////// //////// ////////
// v4 api
// deprecated
export const mapProps = mapper => func => {
  const next = props => func(mapper(props))
  for (const key in func) {
    next[key] = func[key]
  }
  return next
}
export const propType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array,
  PropTypes.object,
])
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

