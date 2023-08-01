import { system } from '../core';

const defaults = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
};

export const typographyConfig = {
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts',
  },
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
    defaultScale: defaults.fontSizes,
  },
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights',
  },
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights',
  },
  letterSpacing: {
    property: 'letterSpacing',
    scale: 'letterSpacings',
  },
  textIndent: {
    property: 'textIndent',
    scale: 'space',
  },
  textTransform: true,
  textDecoration: true,
  whiteSpace: true,
  textAlign: true,
  fontStyle: true,
  textOverflow: true,
};

export const typography = system(typographyConfig);
export default typography;
