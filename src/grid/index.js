import { system } from '../core';

const defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};

export const gridConfig = {
  gridGap: {
    property: 'gap',
    scale: 'space',
    defaultScale: defaults.space,
  },
  gridColumnGap: {
    property: 'columnGap',
    scale: 'space',
    defaultScale: defaults.space,
  },
  gridRowGap: {
    property: 'rowGap',
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
};

export const grid = system(gridConfig);
export default grid;
