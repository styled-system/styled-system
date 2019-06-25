import { get, createParser } from '@styled-system/core'
import css from '@styled-system/css'

export const variant = ({
  scale,
  prop = 'variant',
  // shim for v4 API
  key,
}) => {
  const sx = (value, scale, props) => {
    return css(get(scale, value, null))(props.theme)
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
