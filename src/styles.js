import {
  style,
  num,
  px,
  compose
} from './util'

// - [x] remove alias
// - [ ] remove numberToPx

const getWidth = n => !num(n) || n > 1 ? px(n) : (n * 100) + '%'

// core
export { default as space } from './space'


export const width = style({
  prop: 'width',
  getter: getWidth
})

export const fontSize = style({
  prop: 'fontSize',
  key: 'fontSizes',
  getter: px,
  numberToPx: true
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
  getter: px,
  numberToPx: true
})

// layout
export const display = style({
  prop: 'display'
})

export const maxWidth = style({
  prop: 'maxWidth',
  key: 'maxWidths',
  numberToPx: true,
  getter: px
})

export const minWidth = style({
  prop: 'minWidth',
  key: 'minWidths',
  numberToPx: true,
  getter: px
})

export const height = style({
  prop: 'height',
  key: 'heights',
  numberToPx: true,
  getter: px
})

export const maxHeight = style({
  prop: 'maxHeight',
  key: 'maxHeights',
  numberToPx: true,
  getter: px
})

export const minHeight = style({
  prop: 'minHeight',
  key: 'minHeights',
  numberToPx: true,
  getter: px
})

export const sizeWidth = style({
  prop: 'size',
  cssProperty: 'width',
  numberToPx: true,
  getter: px
})

export const sizeHeight = style({
  prop: 'size',
  cssProperty: 'height',
  numberToPx: true,
  getter: px
})

export const size = compose(
  sizeHeight,
  sizeWidth
)

export const ratioPadding = style({
  prop: 'ratio',
  cssProperty: 'paddingBottom',
  getter: n => (n * 100) + '%'
})

export const ratio = props => props.ratio ? ({
  height: 0,
  ...ratioPadding(props)
}) : null
ratio.propTypes = {
  ...ratioPadding.propTypes
}

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

// for backwards compatibility
const flexWrapShim = n => n === true ? 'wrap' : n
export const flexWrap = style({
  prop: 'flexWrap',
  getter: flexWrapShim
})

export const flexBasis = style({
  prop: 'flexBasis',
  getter: getWidth
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
  numberToPx: true,
  getter: px,
  key: 'space'
})

export const gridColumnGap = style({
  prop: 'gridColumnGap',
  numberToPx: true,
  getter: px,
  key: 'space'
})

export const gridRowGap = style({
  prop: 'gridRowGap',
  numberToPx: true,
  getter: px,
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
  getter: getBorder
})

export const borderTop = style({
  prop: 'borderTop',
  key: 'borders',
  getter: getBorder
})

export const borderRight = style({
  prop: 'borderRight',
  key: 'borders',
  getter: getBorder
})

export const borderBottom = style({
  prop: 'borderBottom',
  key: 'borders',
  getter: getBorder
})

export const borderLeft = style({
  prop: 'borderLeft',
  key: 'borders',
  getter: getBorder
})

export const borders = props => ({
  ...border(props),
  ...borderTop(props),
  ...borderRight(props),
  ...borderBottom(props),
  ...borderLeft(props)
})
borders.propTypes = {
  ...border.propTypes,
  ...borderTop.propTypes,
  ...borderRight.propTypes,
  ...borderBottom.propTypes,
  ...borderLeft.propTypes,
}

export const borderColor = style({
  prop: 'borderColor',
  key: 'colors'
})

export const borderRadius = style({
  prop: 'borderRadius',
  key: 'radii',
  numberToPx: true,
  getter: px,
})

export const boxShadow = style({
  prop: 'boxShadow',
  key: 'shadows'
})

// backgrounds
export const background = style({
  prop: 'background'
})

export const backgroundImage = style({
  prop: 'backgroundImage',
  getter: n => `url(${n})`
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
  numberToPx: true,
  getter: px
})

export const right = style({
  prop: 'right',
  numberToPx: true,
  getter: px
})

export const bottom = style({
  prop: 'bottom',
  numberToPx: true,
  getter: px
})

export const left = style({
  prop: 'left',
  numberToPx: true,
  getter: px
})


/* todo: handle with variant
export const textStyle = complexStyle({
  prop: 'textStyle',
  key: 'textStyles'
})

export const colorStyle = complexStyle({
  prop: 'colors',
  key: 'colorStyles',
})

export const buttonStyle = complexStyle({
  prop: 'buttonStyle',
  key: 'buttons'
})
*/
