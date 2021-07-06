import { system, compose } from '@styled-system/core'
import box from '@styled-system/box'

const defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
}

const config = {
  gridGap: {
    property: 'gridGap',
    scale: 'space',
    defaultScale: defaults.space,
  },
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
    defaultScale: defaults.space,
  },
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
    defaultScale: defaults.space,
  },
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridAutoRows: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true,
}

const gridConfig = system(config)
export const grid = compose(gridConfig, box)

export default grid
