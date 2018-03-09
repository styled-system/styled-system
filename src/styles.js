import * as util from './util'
import {
  style,
  pseudoStyle,
  responsiveStyle,
  complexStyle
} from './util'

// core
export { default as space } from './space'

const getWidth = n => !util.num(n) || n > 1 ? util.px(n) : (n * 100) + '%'
export const width = responsiveStyle({
  prop: 'width',
  alias: 'w',
  getter: getWidth
})

export const fontSize = responsiveStyle({
  prop: 'fontSize',
  alias: 'f',
  key: 'fontSizes',
  numberToPx: true
})

export const textColor = responsiveStyle({
  prop: 'color',
  key: 'colors',
})

export const bgColor = responsiveStyle({
  prop: 'bg',
  cssProperty: 'backgroundColor',
  key: 'colors'
})

export const color = props => ({
  ...textColor(props),
  ...bgColor(props)
})
color.propTypes = {
  ...textColor.propTypes,
  ...bgColor.propTypes,
}

// typography
export const fontFamily = style({
  prop: 'fontFamily',
  alias: 'font',
  key: 'fonts'
})

export const textAlign = responsiveStyle({
  prop: 'textAlign',
  // for backwards compatibility - will cause bugs when used with alignItems
  alias: 'align'
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
  numberToPx: true
})

// layout
export const display = responsiveStyle({
  prop: 'display'
})

export const maxWidth = responsiveStyle({
  prop: 'maxWidth',
  key: 'maxWidths',
  numberToPx: true
})

export const minWidth = responsiveStyle({
  prop: 'minWidth',
  key: 'minWidths',
  numberToPx: true
})

export const height = responsiveStyle({
  prop: 'height',
  key: 'heights',
  numberToPx: true
})

export const maxHeight = responsiveStyle({
  prop: 'maxHeight',
  key: 'maxHeights',
  numberToPx: true
})

export const minHeight = responsiveStyle({
  prop: 'minHeight',
  key: 'minHeights',
  numberToPx: true
})

export const sizeWidth = responsiveStyle({
  prop: 'size',
  cssProperty: 'width',
  numberToPx: true
})

export const sizeHeight = responsiveStyle({
  prop: 'size',
  cssProperty: 'height',
  numberToPx: true
})

export const size = props => ({
  ...sizeWidth(props),
  ...sizeHeight(props)
})
size.propTypes = {
  ...sizeWidth.propTypes,
  ...sizeHeight.propTypes,
}

export const ratioPadding = style({
  prop: 'ratio',
  cssProperty: 'paddingBottom',
  getter: n => (n * 100) + '%'
})

export const ratio = props => ({
  height: 0,
  ...ratioPadding(props)
})
ratio.propTypes = {
  ...ratioPadding.propTypes
}

// flexbox
export const alignItems = responsiveStyle({
  prop: 'alignItems',
  // for backwards compatibility - will cause bugs when used with textAlign
  alias: 'align'
})

export const alignContent = responsiveStyle({
  prop: 'alignContent'
})

export const justifyContent = responsiveStyle({
  prop: 'justifyContent',
  // for backwards compatibility
  alias: 'justify'
})

// for backwards compatibility
const flexWrapShim = n => n === true ? 'wrap' : n
export const flexWrap = responsiveStyle({
  prop: 'flexWrap',
  alias: 'wrap',
  getter: flexWrapShim
})

export const flexBasis = responsiveStyle({
  prop: 'flexBasis',
  getter: getWidth
})


export const flexDirection = responsiveStyle({
  prop: 'flexDirection'
})

export const flex = responsiveStyle({
  prop: 'flex'
})

export const justifySelf = responsiveStyle({
  prop: 'justifySelf'
})

export const alignSelf = responsiveStyle({
  prop: 'alignSelf'
})

export const order = responsiveStyle({
  prop: 'order'
})

// grid
export const gridGap = responsiveStyle({
  prop: 'gridGap',
  numberToPx: true,
  key: 'space'
})

export const gridColumnGap = responsiveStyle({
  prop: 'gridColumnGap',
  numberToPx: true,
  key: 'space'
})

export const gridRowGap = responsiveStyle({
  prop: 'gridRowGap',
  numberToPx: true,
  key: 'space'
})

export const gridColumn = responsiveStyle({
  prop: 'gridColumn'
})

export const gridRow = responsiveStyle({
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

export const gridTemplateColumns = responsiveStyle({
  prop: 'gridTemplateColumns'
})

export const gridTemplateRows = responsiveStyle({
  prop: 'gridTemplateRows'
})

// borders
const getBorder = n => util.num(n) && n > 0 ? n + 'px solid' : n

export const border = responsiveStyle({
  prop: 'border',
  key: 'borders',
  getter: getBorder
})

export const borderTop = responsiveStyle({
  prop: 'borderTop',
  key: 'borders',
  getter: getBorder
})

export const borderRight = responsiveStyle({
  prop: 'borderRight',
  key: 'borders',
  getter: getBorder
})

export const borderBottom = responsiveStyle({
  prop: 'borderBottom',
  key: 'borders',
  getter: getBorder
})

export const borderLeft = responsiveStyle({
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
  numberToPx: true
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
  alias: 'bgImage',
  getter: n => `url(${n})`
})

export const backgroundSize = style({
  prop: 'backgroundSize',
  alias: 'bgSize',
})

export const backgroundPosition = style({
  prop: 'backgroundPosition',
  alias: 'bgPosition',
})

export const backgroundRepeat = style({
  prop: 'backgroundRepeat',
  alias: 'bgRepeat',
})

// position
export const position = responsiveStyle({
  prop: 'position'
})

export const zIndex = style({
  prop: 'zIndex'
})

export const top = responsiveStyle({
  prop: 'top',
  numberToPx: true
})

export const right = responsiveStyle({
  prop: 'right',
  numberToPx: true
})

export const bottom = responsiveStyle({
  prop: 'bottom',
  numberToPx: true
})

export const left = responsiveStyle({
  prop: 'left',
  numberToPx: true
})

// pseudos
export const hover = pseudoStyle({
  prop: 'hover',
  pseudoclass: 'hover',
  keys: {
    color: 'colors',
    backgroundColor: 'colors',
    borderColor: 'colors',
    boxShadow: 'shadows'
  }
})

export const focus = pseudoStyle({
  prop: 'focus',
  keys: {
    color: 'colors',
    backgroundColor: 'colors',
    borderColor: 'colors',
    boxShadow: 'shadows'
  }
})

export const active = pseudoStyle({
  prop: 'active',
  keys: {
    color: 'colors',
    backgroundColor: 'colors',
    borderColor: 'colors',
    boxShadow: 'shadows'
  }
})

export const disabled = pseudoStyle({
  prop: 'disabledStyle',
  pseudoclass: 'disabled',
  keys: {
    color: 'colors',
    backgroundColor: 'colors',
    borderColor: 'colors',
    boxShadow: 'shadows'
  }
})

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

// for backwards-compatibility
// these will be removed in v3
const __DEV__ = (process.env.NODE_ENV !== 'production')

export const borderWidth = style({
  prop: 'borderWidth',
  cssProperty: 'border',
  key: 'borderWidths',
  getter: v => {
    if (__DEV__) {
      console.warn('borderWidth is deprecated. Please use the `borders` utility instead')
    }
    return getBorder(v)
  }
})
