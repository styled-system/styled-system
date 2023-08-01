import { system } from '../core';

export const colorConfig = {
  textColor: {
    property: 'color',
    scale: 'colors',
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },
  fill: {
    property: 'fill',
    scale: 'colors',
  },
  opacity: true,
};
colorConfig.bg = colorConfig.backgroundColor;

export const color = system(colorConfig);
export default color;
