import {
  style,
  num,
  px,
  compose
} from './util'
import variant from './variant'

const getWidth = n => !num(n) || n > 1 ? px(n) : (n * 100) + '%'

export { default as space } from './space'

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
