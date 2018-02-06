import space from './space'
import width from './width'
import fontSize from './font-size'
import color from './color'
import borderWidth from './border-width'
import propTypes from './prop-types'
import cleanElement from './clean-element'
import removeProps from './remove-props'

import * as util from './util'
import * as constants from './constants'

import {
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
  width,
  fontSize,
  color,

  // TODO: Directions option for styles
  borderWidth,

  // other
  propTypes,
  cleanElement,
  removeProps
}

// typography
export const textAlign = responsiveStyle({
  cssProperty: 'textAlign',
  prop: 'align'
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
export const alignItems = responsiveStyle({
  cssProperty: 'alignItems'
})

export const justifyContent = responsiveStyle({
  cssProperty: 'justifyContent',
  prop: 'justifyContent'
})

export const flexWrap = responsiveStyle({
  cssProperty: 'flexWrap',
  prop: 'wrap',
  boolValue: 'wrap'
})

export const flexDirection = responsiveStyle({
  cssProperty: 'flexDirection'
})

export const flex = responsiveStyle({
  cssProperty: 'flex'
})

export const alignSelf = responsiveStyle({
  cssProperty: 'alignSelf',
  prop: 'alignSelf'
})

// borders
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
