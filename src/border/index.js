import { system } from '../core';

export const borderConfig = {
  border: {
    property: 'border',
    scale: 'borders',
  },
  borderWidth: {
    property: 'borderWidth',
    scale: 'borderWidths',
  },
  borderStyle: {
    property: 'borderStyle',
    scale: 'borderStyles',
  },
  borderColor: {
    property: 'borderColor',
    scale: 'colors',
  },
  borderRadius: {
    property: 'borderRadius',
    scale: 'radii',
  },
  borderTop: {
    property: 'borderTop',
    scale: 'borders',
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: 'radii',
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: 'radii',
  },
  borderRight: {
    property: 'borderRight',
    scale: 'borders',
  },
  borderBottom: {
    property: 'borderBottom',
    scale: 'borders',
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: 'radii',
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: 'radii',
  },
  borderLeft: {
    property: 'borderLeft',
    scale: 'borders',
  },
  borderX: {
    properties: ['borderLeft', 'borderRight'],
    scale: 'borders',
  },
  borderY: {
    properties: ['borderTop', 'borderBottom'],
    scale: 'borders',
  },
};

borderConfig.borderTopWidth = {
  property: 'borderTopWidth',
  scale: 'borderWidths',
};

borderConfig.borderTopColor = {
  property: 'borderTopColor',
  scale: 'colors',
};
borderConfig.borderTopStyle = {
  property: 'borderTopStyle',
  scale: 'borderStyles',
};
borderConfig.borderTopLeftRadius = {
  property: 'borderTopLeftRadius',
  scale: 'radii',
};
borderConfig.borderTopRightRadius = {
  property: 'borderTopRightRadius',
  scale: 'radii',
};
borderConfig.borderBottomWidth = {
  property: 'borderBottomWidth',
  scale: 'borderWidths',
};
borderConfig.borderBottomColor = {
  property: 'borderBottomColor',
  scale: 'colors',
};
borderConfig.borderBottomStyle = {
  property: 'borderBottomStyle',
  scale: 'borderStyles',
};
borderConfig.borderBottomLeftRadius = {
  property: 'borderBottomLeftRadius',
  scale: 'radii',
};
borderConfig.borderBottomRightRadius = {
  property: 'borderBottomRightRadius',
  scale: 'radii',
};
borderConfig.borderLeftWidth = {
  property: 'borderLeftWidth',
  scale: 'borderWidths',
};
borderConfig.borderLeftColor = {
  property: 'borderLeftColor',
  scale: 'colors',
};
borderConfig.borderLeftStyle = {
  property: 'borderLeftStyle',
  scale: 'borderStyles',
};
borderConfig.borderRightWidth = {
  property: 'borderRightWidth',
  scale: 'borderWidths',
};
borderConfig.borderRightColor = {
  property: 'borderRightColor',
  scale: 'colors',
};
borderConfig.borderRightStyle = {
  property: 'borderRightStyle',
  scale: 'borderStyles',
};

export const border = system(borderConfig);

export default border;
