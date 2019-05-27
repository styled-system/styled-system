export {
  get,
  createParser,
  createStyleFunction,
  compose,
} from '@styled-system/core'
export { variant } from '@styled-system/variant'
export { style } from './shim'

export {
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginX,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY,
  space,
} from '@styled-system/space'

// new packages
export { color } from './color'
export { layout } from './layout'
export { typography } from './typography'
export { flexbox } from './flexbox'
export { border } from './border'
export { background } from './background'


// v4 api shims
export {
  default as width,
  default as height,
  default as minWidth,
  default as minHeight,
  default as maxWidth,
  default as maxHeight,
  default as size,
  default as verticalAlign,
  default as display,
} from './layout'
export {
  default as fontSize,
  default as fontFamily,
  default as fontWeight,
  default as lineHeight,
  default as textAlign,
  default as fontStyle,
  default as letterSpacing,
} from './typography'
export {
  default as alignItems,
  default as alignContent,
  default as justifyItems,
  default as justifyContent,
  default as flexWrap,
  default as flexDirection,
  default as flex,
  default as flexGrow,
  default as flexShrink,
  default as flexBasis,
  default as justifySelf,
  default as alignSelf,
  default as order,
} from './flexbox'
export {
  default as gridGap,
  default as gridColumnGap,
  default as gridRowGap,
  default as gridColumn,
  default as gridRow,
  default as gridAutoFlow,
  default as gridAutoColumns,
  default as gridAutoRows,
  default as gridTemplateColumns,
  default as gridTemplateRows,
  default as gridTemplateAreas,
  default as gridArea,
} from './grid'
export {
  default as borderWidth,
  default as borderStyle,
  default as borderColor,
  default as borderTop,
  default as borderRight,
  default as borderBottom,
  default as borderLeft,
  default as borderRadius,
  default as borders,
} from './border'
export {
  default as backgroundImage,
  default as backgroundSize,
  default as backgroundPosition,
  default as backgroundRepeat,
} from './background'
export {
  default as position,
  default as zIndex,
  default as top,
  default as right,
  default as bottom,
  default as left,
} from './position'
export {
  boxShadow,
  opacity,
  overflow,
  buttonStyle,
  textStyle,
  colorStyle,
} from './styles'
