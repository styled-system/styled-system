import {
  style,
  pseudoStyle,
  responsiveStyle
} from './util'

// util
export {
  style,
  pseudoStyle,
  responsiveStyle
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

export const lineHeight = require('./line-height')
export const fontWeight = require('./font-weight')
export const letterSpacing = require('./letter-spacing')
export const alignItems = require('./align-items')
export const justifyContent = require('./justify-content')
export const flexWrap = require('./flex-wrap')
export const flexDirection = require('./flex-direction')
export const flex = require('./flex')
export const alignSelf = require('./align-self')
export const borderRadius = require('./border-radius')
export const borderColor = require('./border-color')
export const borderWidth = require('./border-width')
export const boxShadow = require('./box-shadow')
export const hover = require('./hover')
export const focus = require('./focus')
export const active = require('./active')
export const disabled = require('./disabled')

// other
export const theme = require('./theme')
export const propTypes = require('./prop-types')
export const cleanElement = require('./clean-element')
export const removeProps = require('./remove-props')
export const util = require('./util')
export const constants = require('./constants')
