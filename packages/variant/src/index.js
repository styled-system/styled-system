import { get, createParser } from '@styled-system/core'

export const variant = ({
  scale,
  prop = 'variant',
  // shim for v4 API
  key,
  variants,
}) => {
  const sx = (value, scale) => {
    return get(scale, value, null)
  }
  sx.scale = variants || scale || key
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
