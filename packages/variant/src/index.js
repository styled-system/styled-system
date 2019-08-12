import { get, createParser } from '@styled-system/core'
import css from '@styled-system/css'

export const variant = ({
  scale,
  prop = 'variant',
  // shim for v4 API
  key,
}) => {
  const sx = (value, scale) => {
    return get(scale, value, null)
  }
  sx.scale = scale || key
  const config = {
    [prop]: sx,
  }
  const parser = createParser(config)
  return parser
}

export default variant

export const buttonStyle = variant({ key: 'buttons' })
export const textStyle = variant({ key: 'textStyles', prop: 'textStyle' })
export const colorStyle = variant({ key: 'colorStyles', prop: 'colors' })

// new api
export const componentVariant = ({
  prop = 'variant',
  variants = {},
  scale,
}) => {
  /* create parser approach
   * todo: needs access to theme or props
    const sx = (value, scale, props) => {
      return css(get(scale, value, null))(props.theme)
    }
    sx.scale = scale
    sx.defaults = variants
    const config = {
      [prop]: sx
    }
    const parser = createParser(config)
    return parser
  */
  const parser = props => {
    const name = props[prop]
    if (!name) return {}
    const style = get(props.theme, `${scale}.${name}`,
      get(variants, name)
    )
    return css(style)(props.theme)
  }
  return parser
}
