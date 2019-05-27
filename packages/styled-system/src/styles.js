import { get, system, compose } from '@styled-system/core'
import { variant } from '@styled-system/variant'
import { style } from './shim'

const defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
}


const configs = {}

// move to @styled-system/color package
configs.color = {
  color: {
    property: 'color',
    scale: 'colors',
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
  }
}
configs.color.bg = configs.color.backgroundColor

export const color = system(configs.color)

// width
// move to @styled-system/layout
const isNumber = n => typeof n === 'number' && !isNaN(n)
const getWidth = (n, scale) => get(scale, n, (!isNumber(n) || n > 1 ? n : n * 100 + '%'))

configs.layout = {
  width: {
    property: 'width',
    scale: 'sizes',
    transform: getWidth
  },
  height: {
    property: 'height',
    scale: 'sizes',
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes',
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes',
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes',
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes',
  },
  display: true,
  size: {
    properties: [
      'width',
      'height',
    ],
    scale: 'sizes'
  },
}

export const layout = system(configs.layout)

// legacy api
export const width = style({
  prop: 'width',
  key: 'widths',
  transformValue: getWidth,
})

// typography
// move to @styled-system/typography (replace published package)
configs.typography = {
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
    defaultScale: defaults.fontSizes,
  },
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights',
  },
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights',
  },
  letterSpacing: {
    property: 'letterSpacing',
    scale: 'letterSpacings',
  },
  fontStyle: true,
  textAlign: true,
}

export const typography = system(configs.typography)

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
// @styled-system/flexbox
export const flexbox = system({
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  // item
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true,
})

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
// @styled-system/grid
export const grid = system({
})
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
