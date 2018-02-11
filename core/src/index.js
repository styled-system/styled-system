import space from './space'
import width from './width'
import color from './color'
import borderWidth from './border-width'
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
  width,
  color,

  // TODO: Directions option for styles
  borderWidth,

  // other
  propTypes,
  removeProps
}

// core

// typography
export const textAlign = responsiveStyle({
  prop: 'textAlign'
})

export const lineHeight = style({
  prop: 'lineHeight',
  key: 'lineHeights'
})

export const fontSize = responsiveStyle({
  prop: 'fontSize',
  alias: 'f',
  key: 'fontSizes',
  numberToPx: true
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
  prop: 'alignItems'
})

export const justifyContent = responsiveStyle({
  prop: 'justifyContent'
})

export const flexWrap = responsiveStyle({
  prop: 'flexWrap',
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
