import { get, createParser } from '@styled-system/core'

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
