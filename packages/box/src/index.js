import { system } from '@styled-system/core'

const defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
}

const config = {
  gap: {
    property: 'gap',
    scale: 'space',
    defaultScale: defaults.space,
  },
  rowGap: {
    property: 'rowGap',
    scale: 'space',
    defaultScale: defaults.space,
  },
  columnGap: {
    property: 'columnGap',
    scale: 'space',
    defaultScale: defaults.space,
  },
  alignItems: true,
  alignContent: true,
  alignSelf: true,
  justifyItems: true,
  justifyContent: true,
  justifySelf: true,
  placeItems: true,
  placeContent: true,
  placeSelf: true,
}

export const box = system(config)

export default box
