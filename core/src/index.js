import space from './space'
import propTypes from './prop-types'

import * as util from './util'
import * as constants from './constants'

import {
  removeProps,
  style,
  pseudoStyle,
  responsiveStyle,
  theme
} from './util'

export {
  // utils
  style,
  pseudoStyle,
  responsiveStyle,
  theme,
  util,

  //core
  space,

  // other
  propTypes,
  removeProps
}

// core
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

export const color = props => Object.assign({},
  textColor(props),
  bgColor(props)
)

// typography
export const fontFamily = responsiveStyle({
  prop: 'fontFamily',
  alias: 'font',
  key: 'fonts'
})

export const textAlign = responsiveStyle({
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
  prop: 'width',
  numberToPx: true
})

export const sizeHeight = responsiveStyle({
  prop: 'height',
  numberToPx: true
})

export const size = props => Object.assign({},
  sizeWidth(props),
  sizeHeight(props)
)

// export const ratio = props => null

// flexbox
export const alignItems = responsiveStyle({
  prop: 'alignItems'
})

export const justifyContent = responsiveStyle({
  prop: 'justifyContent'
})

export const flexWrap = responsiveStyle({
  prop: 'flexWrap',
  alias: 'wrap'
})

export const flexDirection = responsiveStyle({
  prop: 'flexDirection'
})

export const flex = responsiveStyle({
  prop: 'flex'
})

export const alignSelf = responsiveStyle({
  prop: 'alignSelf'
})

// borders
export const getBorder = n => util.num(n) && n > 0 ? n + 'px solid' : n

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

export const borders = props => Object.assign({},
  border(props),
  borderTop(props),
  borderRight(props),
  borderBottom(props),
  borderLeft(props)
)

export const borderRadius = style({
  prop: 'borderRadius',
  key: 'radii',
  numberToPx: true
})

export const borderColor = style({
  prop: 'borderColor',
  key: 'colors'
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

// pseudos
export const hover = pseudoStyle('hover')({
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  boxShadow: 'shadows'
})

export const focus = pseudoStyle('focus')({
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  boxShadow: 'shadows'
})

export const active = pseudoStyle('active')({
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  boxShadow: 'shadows'
})

export const disabled = pseudoStyle('disabled', 'disabledStyle')({
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  boxShadow: 'shadows'
})
