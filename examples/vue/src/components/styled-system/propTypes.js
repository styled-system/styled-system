const layout = {
  width: [Object, Number, String, Array],
  height: [Object, Number, String, Array],
  minWidth: [Object, Number, String, Array],
  minHeight: [Object, Number, String, Array],
  maxWidth: [Object, Number, String, Array],
  maxHeight: [Object, Number, String, Array],
  size: String,
  display: String,
  verticalAlign: String,
  overflow: String,
  overflowX: String,
  overflowY: String
}

const space = {
  margin: [Object, Number, String, Array],
  m: [Object, Number, String, Array],
  marginTop: [Object, Number, String, Array],
  mt: [Object, Number, String, Array],
  marginRight: [Object, Number, String, Array],
  mr: [Object, Number, String, Array],
  marginBottom: [Object, Number, String, Array],
  mb: [Object, Number, String, Array],
  marginLeft: [Object, Number, String, Array],
  ml: [Object, Number, String, Array],
  marginX: [Object, Number, String, Array],
  mx: [Object, Number, String, Array],
  marginY: [Object, Number, String, Array],
  my: [Object, Number, String, Array],
  padding: [Object, Number, String, Array],
  p: [Object, Number, String, Array],
  paddingTop: [Object, Number, String, Array],
  pt: [Object, Number, String, Array],
  paddingRight: [Object, Number, String, Array],
  pr: [Object, Number, String, Array],
  paddingBottom: [Object, Number, String, Array],
  pb: [Object, Number, String, Array],
  paddingLeft: [Object, Number, String, Array],
  pl: [Object, Number, String, Array],
  paddingX: [Object, Number, String, Array],
  px: [Object, Number, String, Array],
  paddingY: [Object, Number, String, Array],
  py: [Object, Number, String, Array]
}

const color = {
  color: [Object, String, Array],
  bg: [Object, String, Array],
  backgroundColor: [Object, String, Array],
  opacity: [Object, Number, Array]
}

const typography = {
  fontFamily: String,
  fontSize: [Object, String, Array],
  fontWeight: [Object, String, Number, Array],
  lineHeight: [Object, String, Array],
  letterSpacing: [Object, String, Array],
  textAlign: [Object, String, Array],
  fontStyle: [Object, String, Array]
}

const flexbox = {
  alignItems: [Object, String, Array],
  alignContent: [Object, String, Array],
  justifyItems: [Object, String, Array],
  justifyContent: [Object, String, Array],
  flexWrap: [Object, String, Array],
  flexDirection: [Object, String, Array],
  flex: [Object, String, Array],
  flexGrow: [Object, String, Array],
  flexShrink: [Object, Number, String, Array],
  flexBasis: [Object, Number, String, Array],
  justifySelf: [Object, String, Array],
  alignSelf: [Object, String, Array],
  order: [Object, Number, Array]
}

const grid = {}

const background = {
  backgroundImage: [Object, Array, String],
  backgroundSize: [Object, Array, String],
  backgroundPosition: [Object, Array, String],
  backgroundRepeat: [Object, Array, String]
}

const border = {
  border: [Object, Array, String],
  borderWidth: [Object, Array, String],
  borderStyle: [Object, Array, String],
  borderColor: [Object, Array, String],
  borderRadius: [Object, Array, String],
  borderTop: [Object, Array, String],
  borderTopWidth: [Object, Array, String],
  borderTopStyle: [Object, Array, String],
  borderTopColor: [Object, Array, String],
  borderTopLeftRadius: [Object, Array, String],
  borderTopRightRadius: [Object, Array, String],
  borderRight: [Object, Array, String],
  borderRightWidth: [Object, Array, String],
  borderRightStyle: [Object, Array, String],
  borderRightColor: [Object, Array, String],
  borderBottom: [Object, Array, String],
  borderBottomWidth: [Object, Array, String],
  borderBottomStyle: [Object, Array, String],
  borderBottomColor: [Object, Array, String],
  borderBottomLeftRadius: [Object, Array, String],
  borderBottomRightRadius: [Object, Array, String],
  borderLeft: [Object, Array, String],
  borderLeftWidth: [Object, Array, String],
  borderLeftStyle: [Object, Array, String],
  borderLeftColor: [Object, Array, String],
  borderX: [Object, Array, String],
  borderY: [Object, Array, String]
}

const position = {
  position: [Object, String, Array],
  zIndex: [Object, Number, Array],
  top: [Object, String, Number, Array],
  right: [Object, String, Number, Array],
  bottom: [Object, String, Number, Array],
  left: [Object, String, Number, Array]
}

const shadow = {
  textShadow: [Object, String, Array],
  boxShadow: [Object, String, Array]
}

export default {
  layout,
  space,
  color,
  typography,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow
}
