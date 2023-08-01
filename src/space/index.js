import { get, system, compose } from '../core';

const defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};

const isNumber = (n) => typeof n === 'number' && !isNaN(n);

const getMargin = (n, scale) => {
  if (!isNumber(n)) {
    return get(scale, n, n);
  }

  const isNegative = n < 0;
  const absolute = Math.abs(n);
  const value = get(scale, absolute, absolute);
  if (!isNumber(value)) {
    return isNegative ? '-' + value : value;
  }
  return value * (isNegative ? -1 : 1);
};

export const spaceConfig = {};
spaceConfig.margin = {
  margin: {
    property: 'margin',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space,
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space,
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space,
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space,
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space,
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space,
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space,
  },
};
spaceConfig.margin.m = spaceConfig.margin.margin;
spaceConfig.margin.mt = spaceConfig.margin.marginTop;
spaceConfig.margin.mr = spaceConfig.margin.marginRight;
spaceConfig.margin.mb = spaceConfig.margin.marginBottom;
spaceConfig.margin.ml = spaceConfig.margin.marginLeft;
spaceConfig.margin.mx = spaceConfig.margin.marginX;
spaceConfig.margin.my = spaceConfig.margin.marginY;

spaceConfig.padding = {
  padding: {
    property: 'padding',
    scale: 'space',
    defaultScale: defaults.space,
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'space',
    defaultScale: defaults.space,
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'space',
    defaultScale: defaults.space,
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'space',
    defaultScale: defaults.space,
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'space',
    defaultScale: defaults.space,
  },
  paddingX: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'space',
    defaultScale: defaults.space,
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space',
    defaultScale: defaults.space,
  },
};
spaceConfig.padding.p = spaceConfig.padding.padding;
spaceConfig.padding.pt = spaceConfig.padding.paddingTop;
spaceConfig.padding.pr = spaceConfig.padding.paddingRight;
spaceConfig.padding.pb = spaceConfig.padding.paddingBottom;
spaceConfig.padding.pl = spaceConfig.padding.paddingLeft;
spaceConfig.padding.px = spaceConfig.padding.paddingX;
spaceConfig.padding.py = spaceConfig.padding.paddingY;

export const margin = system(spaceConfig.margin);
export const padding = system(spaceConfig.padding);
export const space = compose(margin, padding);

export default space;
