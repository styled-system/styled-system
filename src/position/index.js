import { system } from '../core';

const defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};

export const positionConfig = {
  position: true,
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices',
  },
  top: {
    property: 'top',
    scale: 'space',
    defaultScale: defaults.space,
  },
  right: {
    property: 'right',
    scale: 'space',
    defaultScale: defaults.space,
  },
  bottom: {
    property: 'bottom',
    scale: 'space',
    defaultScale: defaults.space,
  },
  left: {
    property: 'left',
    scale: 'space',
    defaultScale: defaults.space,
  },
};

export const position = system(positionConfig);

export default position;
