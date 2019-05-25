import { get } from './core'
import {
  style,
  compose,
} from './shim'
import { variant } from './variant'

const defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
}

const isNumber = n => typeof n === 'number' && !isNaN(n)
// space

const getMargin = (n, scale) => {
  if (!isNumber(n)) {
    return get(scale, n, n)
  }

  const isNegative = n < 0
  const absolute = Math.abs(n)
  const value = get(scale, absolute)
  if (!isNumber(value)) {
    return isNegative ? '-' + value : value
  }
  return value * (isNegative ? -1 : 1)
}

export const margin = style({
  prop: 'margin',
  alias: 'm',
  key: 'space',
  transformValue: getMargin,
  scale: defaults.space,
})

export const marginTop = style({
  prop: 'marginTop',
  alias: 'mt',
  key: 'space',
  transformValue: getMargin,
  scale: defaults.space,
})

export const marginBottom = style({
  prop: 'marginBottom',
  alias: 'mb',
  key: 'space',
  transformValue: getMargin,
  scale: defaults.space,
})

export const marginLeft = style({
  prop: 'marginLeft',
  alias: 'ml',
  key: 'space',
  transformValue: getMargin,
  scale: defaults.space,
})

export const marginRight = style({
  prop: 'marginRight',
  alias: 'mr',
  key: 'space',
  transformValue: getMargin,
  scale: defaults.space,
})

export const marginX = style({
  prop: 'marginX',
  properties: [ 'marginLeft', 'marginRight' ],
  alias: 'mx',
  key: 'space',
  transformValue: getMargin,
  scale: defaults.space,
})

export const marginY = style({
  prop: 'marginY',
  properties: [ 'marginTop', 'marginBottom' ],
  alias: 'my',
  key: 'space',
  transformValue: getMargin,
  scale: defaults.space,
})

export const padding = style({
  prop: 'padding',
  alias: 'p',
  key: 'space',
  scale: defaults.space,
})

export const paddingTop = style({
  prop: 'paddingTop',
  alias: 'pt',
  key: 'space',
  scale: defaults.space,
})

export const paddingBottom = style({
  prop: 'paddingBottom',
  alias: 'pb',
  key: 'space',
  scale: defaults.space,
})

export const paddingLeft = style({
  prop: 'paddingLeft',
  alias: 'pl',
  key: 'space',
  scale: defaults.space,
})

export const paddingRight = style({
  prop: 'paddingRight',
  alias: 'pr',
  key: 'space',
  scale: defaults.space,
})

export const paddingX = style({
  prop: 'paddingX',
  properties: [ 'paddingLeft', 'paddingRight' ],
  alias: 'px',
  key: 'space',
  scale: defaults.space,
})

export const paddingY = style({
  prop: 'paddingY',
  properties: [ 'paddingTop', 'paddingBottom' ],
  alias: 'py',
  key: 'space',
  scale: defaults.space,
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
const getWidth = (n, scale) => (!isNumber(n) || n > 1 ? n : n * 100 + '%')

export const width = style({
  prop: 'width',
  key: 'widths',
  transformValue: getWidth,
})

// typography

export const fontSize = style({
  prop: 'fontSize',
  key: 'fontSizes',
  scale: defaults.fontSizes,
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
})

export const minWidth = style({
  prop: 'minWidth',
  key: 'minWidths',
})

export const height = style({
  prop: 'height',
  key: 'heights',
})

export const maxHeight = style({
  prop: 'maxHeight',
  key: 'maxHeights',
})

export const minHeight = style({
  prop: 'minHeight',
  key: 'minHeights',
})

export const size = style({
  prop: 'size',
  properties: [ 'width', 'height' ],
  key: 'sizes',
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
  scale: defaults.space,
})

export const gridColumnGap = style({
  prop: 'gridColumnGap',
  key: 'space',
  scale: defaults.space,
})

export const gridRowGap = style({
  prop: 'gridRowGap',
  key: 'space',
  scale: defaults.space,
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
export const top = style({ prop: 'top' })
export const right = style({ prop: 'right',})
export const bottom = style({ prop: 'bottom',})
export const left = style({ prop: 'left',})

// variants
export const buttonStyle = variant({ key: 'buttons' })
export const textStyle = variant({ key: 'textStyles', prop: 'textStyle' })
export const colorStyle = variant({ key: 'colorStyles', prop: 'colors' })
