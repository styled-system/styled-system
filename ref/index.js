import * as styles from './styles'

export * as styles from './styles'
export {
  space,
  width,
  fontSize,
  textColor,
  bgColor,
  color,
  // typography
  fontFamily,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
  // layout
  display,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  size,
  ratio,
  // flexbox
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
  // grid
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  // borders
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borders,
  borderColor,
  borderRadius,
  // misc
  boxShadow,
  background,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  // position
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  // psuedoclasses
  hover,
  focus,
  active,
  disabled,
  // complex
  textStyle,
  colorStyle,
  buttonStyle,
  // deprecated
  borderWidth,
} from './styles'

export {
  style,
  pseudoStyle,
  responsiveStyle,
  complexStyle,
  themeGet,
  themeGet as theme
} from './util'

export * as util from './util'

export const propTypes = {}

Object.keys(styles).forEach(key => {
  propTypes[key] = styles[key].propTypes
})

styles.propTypes = propTypes

export default styles
