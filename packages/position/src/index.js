import { system } from '@styled-system/core'

const config = {
  position: true,
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices',
  },
  top: true,
  right: true,
  bottom: true,
  left: true,
}

export const position = system(config)

export default position
