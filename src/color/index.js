import { system } from '../core'

const config = {
  textColor: {
    property: 'color',
    scale: 'colors',
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },
  opacity: true,
}
config.bg = config.backgroundColor

export const color = system(config)
export default color
