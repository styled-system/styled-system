import { minBreakpoint, minWidth, DEFAULT_BREAKPOINTS } from './media'
import { is, num, string, obj, merge, get, func } from './util'

function callOrReturn(fn, arg) {
  if (!func(fn)) return fn
  const next = fn(arg)
  return callOrReturn(next, arg)
}

function getThemeValue(theme, path, initial) {
  if (!theme) return undefined
  return callOrReturn(get(initial || theme, path), { theme })
}

function getValue(value, variants, theme) {
  if (is(variants)) {
    const valueFromVariants = getThemeValue(theme, value, variants)
    if (is(valueFromVariants)) {
      return valueFromVariants
    }
  }
  return value
}

function styleFromValue(cssProperties, value, theme, key, transformValue) {
  const variants = getThemeValue(theme, key)
  const computedValue = getValue(value, variants, theme)
  if (string(computedValue) || num(computedValue)) {
    const style = {}
    for (let i = 0; i < cssProperties.length; i++) {
      style[cssProperties[i]] = transformValue
        ? transformValue(computedValue, {
            rawValue: value,
            variants,
          })
        : computedValue
    }
    return style
  }
  return null
}

function getBreakpoints(theme) {
  const themeBreakpoints = getThemeValue(theme, 'breakpoints')
  if (is(themeBreakpoints)) {
    return themeBreakpoints
  }
  return DEFAULT_BREAKPOINTS
}

function createStyleGenerator(getStyle, props, generators) {
  const getStyles = props => {
    const theme = props.theme || null
    return getStyle(props, theme)
  }

  getStyles.meta = {
    props,
    getStyle,
    generators,
  }

  return getStyles
}

function styleFromBreakPoint(cssProperties, value, theme, key, transformValue) {
  const breakpoints = getBreakpoints(theme)
  const keys = Object.keys(value)
  let allStyle = {}
  for (let i = 0; i < keys.length; i++) {
    const breakpoint = keys[i]
    const style = styleFromValue(
      cssProperties,
      value[breakpoint],
      theme,
      key,
      transformValue
    )

    if (style !== null) {
      const breakpointValue = minBreakpoint(breakpoints[breakpoint])

      if (breakpointValue === null) {
        allStyle = merge(allStyle, style)
      } else if (breakpointValue) {
        allStyle = merge(allStyle, {
          [minWidth(breakpointValue)]: style,
        })
      }
    }
  }
  return allStyle
}

function getStyleFactory(prop, cssProperties, key, transformValue) {
  return function getStyle(attrs, theme) {
    const value = attrs[prop]
    if (!is(value)) return null

    const style = styleFromValue(
      cssProperties,
      value,
      theme,
      key,
      transformValue
    )

    if (style !== null) {
      return style
    }

    if (obj(value)) {
      return styleFromBreakPoint(
        cssProperties,
        value,
        theme,
        key,
        transformValue
      )
    }

    return null
  }
}

export function style({
  prop,
  cssProperties,
  cssProperty,
  alias,
  key = null,
  transformValue = null,
}) {
  cssProperties = cssProperties || (cssProperty ? [cssProperty] : [prop])
  const getStyle = getStyleFactory(prop, cssProperties, key, transformValue)
  const generator = createStyleGenerator(getStyle, [prop])

  if (!alias) {
    return generator
  }

  return compose(
    generator,
    style({ prop: alias, cssProperties, key, transformValue })
  )
}

function indexGeneratorsByProp(styles) {
  const index = {}
  for (let i = 0; i < styles.length; i++) {
    const style = styles[i]
    if (style && style.meta) {
      const propsKeys = Object.keys(style.meta.props)
      for (let j = 0; j < propsKeys.length; j++) {
        const prop = style.meta.props[propsKeys[j]]
        index[prop] = style
      }
    }
  }
  return index
}

export function compose(...generators) {
  let flatGenerators = []
  generators.forEach(gen => {
    if (gen.meta.generators) {
      flatGenerators = [...flatGenerators, ...gen.meta.generators]
    } else {
      flatGenerators.push(gen)
    }
  })

  const generatorsByProp = indexGeneratorsByProp(flatGenerators)

  function getStyle(attrs, theme) {
    const propKeys = Object.keys(attrs)
    const propCount = propKeys.length
    let allStyle = {}
    for (let i = 0; i < propCount; i++) {
      const propKey = propKeys[i]
      const generator = generatorsByProp[propKey]
      if (generator) {
        allStyle = merge(allStyle, generator.meta.getStyle(attrs, theme))
      }
    }
    return allStyle
  }

  const props = flatGenerators.reduce(
    (keys, generator) => [...keys, ...generator.meta.props],
    []
  )

  return createStyleGenerator(getStyle, props, generators)
}
