import { system } from '../core'

const config = {
  listStyle: {
    property: 'listStyle',
    scale: 'listStyles',
  },
  listStyleImage: {
    property: 'listStyleImage',
    scale: 'listStyleImages',
  },
  listStylePosition: {
    property: 'listStylePosition',
    scale: 'listStylePositions',
  },
  listStyleType: {
    property: 'listStyleType',
    scale: 'listStyleTypes',
  },
}

export const listStyle = system(config)

export default listStyle
