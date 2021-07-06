import { get, system } from '@styled-system/core'

const defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
}

const isNumber = (n) => typeof n === 'number' && !isNaN(n)

const getPosition = (n, scale) => {
  if (!isNumber(n)) {
    return get(scale, n, n)
  }

  const isNegative = n < 0
  const absolute = Math.abs(n)
  const value = get(scale, absolute, absolute)
  if (!isNumber(value)) {
    return isNegative ? '-' + value : value
  }
  return value * (isNegative ? -1 : 1)
}

const config = {
  position: true,
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices',
  },
  top: {
    property: 'top',
    scale: 'space',
    transform: getPosition,
    defaultScale: defaults.space,
  },
  right: {
    property: 'right',
    scale: 'space',
    transform: getPosition,
    defaultScale: defaults.space,
  },
  bottom: {
    property: 'bottom',
    scale: 'space',
    transform: getPosition,
    defaultScale: defaults.space,
  },
  left: {
    property: 'left',
    scale: 'space',
    transform: getPosition,
    defaultScale: defaults.space,
  },
}

export const position = system(config)

export default position
