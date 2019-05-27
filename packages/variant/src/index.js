import { get, createParser } from '@styled-system/core'

export const variant = ({
  key,
  prop = 'variant'
}) => {
  const sx = (value, scale) => {
    return get(scale, value, null)
  }
  sx.scale = key
  const config = {
    [prop]: sx
  }
  const parser = createParser(config)
  return parser
}

export default variant
