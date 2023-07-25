import {
  compose,
  space,
  typography,
  color,
  layout,
  flexbox,
  border,
  background,
  position,
  grid,
  shadow,
  buttonStyle,
  textStyle,
  colorStyle,
  cursor,
  animation,
  objectFit,
  listStyle,
} from '../styled-system';

const all = compose(
  space,
  typography,
  color,
  layout,
  flexbox,
  border,
  background,
  position,
  grid,
  shadow,
  buttonStyle,
  textStyle,
  colorStyle,
  cursor,
  animation,
  objectFit,
  listStyle,
);

const propNames = all.propNames.reduce((acc, current) => {
  acc[current] = true;
  return acc;
}, {});

export const omit = (props) => {
  return Object.keys(props).reduce((acc, key) => {
    if (!propNames[key]) {
      acc[key] = props[key];
    }
  }, {});
};

export const pick = (props) => {
  return Object.keys(props).reduce((acc, key) => {
    if (propNames[key]) {
      acc[key?.[0] !== '$' ? `$${key}` : key] = props[key];
    }
  }, {});
};
