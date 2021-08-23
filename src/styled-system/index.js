import { createStyleFunction, createParser } from '../core'
// v4 api shims
import layout from '../layout'
import color from '../color'
import typography from '../typography'
import flexbox from '../flexbox'
import grid from '../grid'
import border from '../border'
import background from '../background'
import position from '../position'
import animation from '../animation'
import listStyle from '../list-style'

export {
  get,
  createParser,
  createStyleFunction,
  compose,
  system,
} from '../core'

export { margin, padding, space } from '../space'
export { color } from '../color'
export { layout } from '../layout'
export { typography } from '../typography'
export { flexbox } from '../flexbox'
export { border } from '../border'
export { background } from '../background'
export { position } from '../position'
export { grid } from '../grid'
export { shadow } from '../shadow'
export { cursor } from '../cursor'
export { animation } from '../animation'
export { objectFit } from '../object-fit'
export { listStyle } from '../list-style'
export { default as boxShadow, default as textShadow } from '../shadow'

export {
  variant,
  buttonStyle,
  textStyle,
  colorStyle
} from '../variant'

const {
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  size,
  verticalAlign,
  display,
  overflow,
  overflowX,
  overflowY
} = layout
const { opacity } = color
const {
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  textAlign,
  fontStyle,
  letterSpacing,
} = typography

const {
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  justifySelf,
  alignSelf,
  order,
} = flexbox
const {
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
  gridTemplateAreas,
  gridArea,
} = grid
const {
  borderWidth,
  borderStyle,
  borderColor,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderRadius,
} = border
const {
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
} = background
const {
  zIndex,
  top,
  right,
  bottom,
  left,
} = position
const {
  animationName,
  animationDuration,
  animationTimingFunction,
  animationDelay,
  animationDirection,
  animationIterationCount,
  animationFillMode,
  animationPlayState,
} = animation
const {
  listStyleImage,
  listStylePosition,
  listStyleType,
} = listStyle
export { default as borders } from '../border'
export {
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  size,
  verticalAlign,
  display,
  overflow,
  overflowX,
  overflowY,
  // color
  opacity,
  // typography
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  textAlign,
  fontStyle,
  letterSpacing,
  // flexbox
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  flexGrow,
  flexShrink,
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
  gridTemplateAreas,
  gridArea,
  // border
  borderWidth,
  borderStyle,
  borderColor,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderRadius,
  // background
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  // position
  zIndex,
  top,
  right,
  bottom,
  left,
  // animation
  animationName,
  animationDuration,
  animationTimingFunction,
  animationDelay,
  animationDirection,
  animationIterationCount,
  animationFillMode,
  animationPlayState,
  // list style
  listStyleImage,
  listStylePosition,
  listStyleType,
}

// v4 style API shim
export const style = ({
  prop,
  cssProperty,
  alias,
  key,
  transformValue,
  scale,
  // new api
  properties,
}) => {
  const config = {}
  config[prop] = createStyleFunction({
    properties,
    property: cssProperty || prop,
    scale: key,
    defaultScale: scale,
    transform: transformValue,
  })
  if (alias) config[alias] = config[prop]
  const parse = createParser(config)

  return parse
}
