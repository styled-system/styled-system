import { num, negative } from './util'

const DEFAULT_SPACE = [0, 4, 8, 16, 32, 64, 128, 256, 512]

export const unit = unit => value => (num(value) ? `${value}${unit}` : value)
export const px = unit('px')
export const percent = n => (!num(n) || n > 1 ? px(n) : `${n * 100}%`)

export const scale = (defaultVariants = DEFAULT_SPACE) => (
  transformedValue,
  { rawValue, variants = defaultVariants }
) => {
  if (!num(rawValue)) {
    return variants[rawValue] || rawValue
  }
  const abs = Math.abs(rawValue)
  const neg = negative(rawValue)
  const value = variants[abs] || abs
  if (!num(value)) {
    return neg ? `-${value}` : value
  }
  return value * (neg ? -1 : 1)
}
