import { createStyleFunction, createParser, system } from '@styled-system/core'
import { variant } from '@styled-system/variant'

export {
  get,
  createParser,
  createStyleFunction,
  compose,
} from '@styled-system/core'
export { variant } from '@styled-system/variant'
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
export { color } from '@styled-system/color'
export { default as opacity } from '@styled-system/color'
export { layout } from '@styled-system/layout'
export { typography } from '@styled-system/typography'
export { flexbox } from '@styled-system/flexbox'
export { border } from '@styled-system/border'
export { background } from '@styled-system/background'
export { position } from '@styled-system/position'
export { grid } from '@styled-system/grid'

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
  default as overflow,
} from '@styled-system/layout'
export {
  default as fontSize,
  default as fontFamily,
  default as fontWeight,
  default as lineHeight,
  default as textAlign,
  default as fontStyle,
  default as letterSpacing,
} from '@styled-system/typography'
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
} from '@styled-system/flexbox'
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
} from '@styled-system/grid'
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
} from '@styled-system/border'
export {
  default as backgroundImage,
  default as backgroundSize,
  default as backgroundPosition,
  default as backgroundRepeat,
} from '@styled-system/background'
export {
  default as zIndex,
  default as top,
  default as right,
  default as bottom,
  default as left,
} from '@styled-system/position'
export {
  boxShadow,
  textShadow,
} from '@styled-system/shadow'

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

// variants
export const buttonStyle = variant({ key: 'buttons' })
export const textStyle = variant({ key: 'textStyles', prop: 'textStyle' })
export const colorStyle = variant({ key: 'colorStyles', prop: 'colors' })
