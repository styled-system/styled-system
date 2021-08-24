import { system } from '../core';

const defaults = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
};

const config = {
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
  textTransform: {
    property: 'textTransform',
    scale: 'textTransforms',
  },
  textDecoration: {
    property: 'textDecoration',
    scale: 'textDecorations',
  },
  whiteSpace: {
    property: 'whiteSpace',
    scale: 'whiteSpaces',
  },
  textIndent: true,
  textAlign: true,
  fontStyle: true,
};

export const typography = system(config);
export default typography;
