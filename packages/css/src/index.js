// based on https://github.com/developit/dlv
export const get = (obj, key, def, p, undef) => {
  key = key?.split ? key.split('.') : [key]
  for (p = 0; p < key.length; p++) {
    obj = obj?.[key[p]] || undef
  }
  return obj === undef ? def : obj
}

const assign = (target, ...others) => {
  for (let i = 0; i < others.length; i += 1) {
    const other = others[i];
    const keys = Object.keys(other)
    for (let j = 0; j < keys.length; j += 1) {
      const key = keys[j]
      target[key] = other[key]
    }
  }

  return target
}

const defaultBreakpoints = ['40em', '52em', '64em']

const defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
}

const aliases = {
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginX',
  my: 'marginY',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingX',
  py: 'paddingY',
}

const multiples = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  size: ['width', 'height'],
}

const scales = {
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles',
  borderBottomWidth: 'borderWidths',
  borderBottomColor: 'colors',
  borderBottomStyle: 'borderStyles',
  borderLeftWidth: 'borderWidths',
  borderLeftColor: 'colors',
  borderLeftStyle: 'borderStyles',
  borderRightWidth: 'borderWidths',
  borderRightColor: 'colors',
  borderRightStyle: 'borderStyles',
  outlineColor: 'colors',
  boxShadow: 'shadows',
  textShadow: 'shadows',
  zIndex: 'zIndices',
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  height: 'sizes',
  minHeight: 'sizes',
  maxHeight: 'sizes',
  flexBasis: 'sizes',
  size: 'sizes',
  // svg
  fill: 'colors',
  stroke: 'colors',
}

const positiveOrNegative = (scale, value) => {
  if (typeof value !== 'number' || value >= 0) {
    return get(scale, value, value)
  }
  const absolute = Math.abs(value)
  const n = get(scale, absolute, absolute)
  if (typeof n === 'string') return '-' + n
  return n * -1
}

const transforms = {
  'margin': positiveOrNegative,
  'marginTop': positiveOrNegative,
  'marginRight': positiveOrNegative,
  'marginBottom': positiveOrNegative,
  'marginLeft': positiveOrNegative,
  'marginX': positiveOrNegative,
  'marginY': positiveOrNegative,
  'top': positiveOrNegative,
  'bottom': positiveOrNegative,
  'left': positiveOrNegative,
  'right': positiveOrNegative,
}

export const responsive = styles => theme => {
  const next = {}
  const breakpoints = get(theme, 'breakpoints', defaultBreakpoints)
  const breakpointsLength = breakpoints.length
  const mediaQueries = new Array(breakpointsLength + 1)
  mediaQueries[0] = null

  for (let j = 0; j < breakpointsLength; j += 1) {
    mediaQueries[j + 1] = `@media screen and (min-width: ${breakpoints[j]})`
  }
  if (typeof styles !== 'object' || styles === null) return {}
  const keys = Object.keys(styles)
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i]
    const value =
      typeof styles[key] === 'function' ? styles[key](theme) : styles[key]

    if (value == null) continue
    if (!Array.isArray(value)) {
      next[key] = value
      continue
    }

    const len = Math.min(value.length, mediaQueries.length)
    for (let i = 0; i < len; i += 1) {
      const media = mediaQueries[i]
      if (!media) {
        next[key] = value[i]
        continue
      }
      next[media] = next[media] || {}
      if (value[i] == null) continue
      next[media][key] = value[i]
    }
  }

  return next
}

const css = args => (props = {}) => {
  const theme = assign(Object.create(null), defaultTheme, props.theme || props)
  const result = Object.create(null)
  traverse(args, result)

  function traverse(_args, carry) {
    const obj = typeof _args === 'function' ? _args(theme) : _args
    const styles = responsive(obj)(theme)

    const keys = Object.keys(styles)
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i]
      let val = styles[key]
      val = typeof val === 'function' ? val(theme) : val

      if (key === 'variant') {
        traverse(get(theme, val), carry)
        continue
      }

      if (typeof val === 'object') {
        const child = carry[key] = Object.create(null)
        traverse(val, child)
        continue
      }

      const prop = get(aliases, key, key)
      const scaleName = get(scales, prop)
      const scale = get(theme, scaleName, get(theme, prop, {}))
      const transform = get(transforms, prop, get)
      const value = transform(scale, val, val)

      if (multiples[prop]) {
        const dirs = multiples[prop]

        for (let j = 0; j < dirs.length; j += 1) {
          carry[dirs[j]] = value
        }
      } else {
        carry[prop] = value
      }
    }
  }

  return result
}

export default css