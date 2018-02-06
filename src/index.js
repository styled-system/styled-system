import * as util from './util'
import constants from './constants'
import {
  style,
  pseudoStyle,
  responsiveStyle,
  theme
} from './util'

// utils
export {
  style,
  pseudoStyle,
  responsiveStyle,
  theme,
  util
}

// core
export const space = require('./space')
export const width = require('./width')
export const fontSize = require('./font-size')
export const color = require('./color')

// extras
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

export const borderRadius = style({
  prop: 'borderRadius',
  key: 'radii',
  numberToPx: true
})
export const borderColor = style({
  prop: 'borderColor',
  key: 'colors'
})

export const borderWidth = require('./border-width')

export const boxShadow = style({
  prop: 'boxShadow',
  key: 'shadows'
})

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

// other
export const propTypes = require('./prop-types')
export const cleanElement = require('./clean-element')
export const removeProps = require('./remove-props')
