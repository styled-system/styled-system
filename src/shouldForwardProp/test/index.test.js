// Generated by CodiumAI

import { shouldForwardProp } from '..';

describe('shouldForwardProp_function', () => {
  // Tests that a valid prop name returns false
  it('valid prop name returns false', () => {
    const propName = 'color';
    const result = shouldForwardProp(propName);
    expect(result).toBe(false);
  });

  // Tests that an invalid prop name returns true
  it('invalid prop name returns true', () => {
    expect(shouldForwardProp('invalidPropName')).toBe(true);
  });

  it('invalid prop name returns true', () => {
    expect(shouldForwardProp('overflowY')).toBe(false);
  });

  it('invalid prop name returns true', () => {
    expect(shouldForwardProp('zIndex')).toBe(false);
  });

  it('invalid prop name returns true', () => {
    expect(shouldForwardProp('objectFit')).toBe(false);
  });

  it('invalid prop name returns true', () => {
    expect(shouldForwardProp('textShadow')).toBe(false);
  });

  it('invalid prop name returns true', () => {
    expect(shouldForwardProp('colors')).toBe(false);
  });

  it('invalid prop name returns true', () => {
    expect(shouldForwardProp('textStyle')).toBe(false);
  });

  it('invalid prop name returns true', () => {
    expect(shouldForwardProp('variant')).toBe(false);
  });

  it('invalid prop name returns true', () => {
    expect(shouldForwardProp('size')).toBe(false);
  });

  it('invalid prop name returns true', () => {
    expect(shouldForwardProp('typography')).toBe(false);
  });

  it('invalid prop name returns true', () => {
    expect(shouldForwardProp('type')).toBe(false);
  });

  it('invalid prop name returns true', () => {
    expect(shouldForwardProp('cursor')).toBe(false);
  });
  it('invalid prop name returns true', () => {
    expect(shouldForwardProp('gridColumnGap')).toBe(false);
  });
  it('invalid prop name returns true', () => {
    expect(shouldForwardProp('listStylePosition')).toBe(false);
  });

  // Tests that an empty string passed to shouldForwardProp returns true
  it('empty string returns true', () => {
    expect(shouldForwardProp('')).toBe(true);
  });

  // Tests that shouldForwardProp returns true when passed a null value
  it('null value returns true', () => {
    expect(shouldForwardProp(null)).toBe(true);
  });
  it('borderRadius value returns false', () => {
    expect(shouldForwardProp('borderRadius')).toBe(false);
  });

  // Tests that a number returns true
  it('number returns true', () => {
    const result = shouldForwardProp(123);
    expect(result).toBe(true);
  });

  // Tests that shouldForwardProp returns true for unknown props
  it('should return true for unknown props', () => {
    const propName = 'unknownProp';
    const result = shouldForwardProp(propName);
    expect(result).toBe(true);
  });

  // Tests that a prop name from backgroundConfig returns false
  it('backgroundConfig prop returns false', () => {
    const propName = 'background';
    const result = shouldForwardProp(propName);
    expect(result).toBe(false);
  });

  // Tests that a prop name from animationConfig returns false
  it('animationConfig prop returns false', () => {
    const propName = 'animationName';
    const result = shouldForwardProp(propName);
    expect(result).toBe(false);
  });

  // Tests that a prop name from borderConfig returns false
  it('borderConfig prop returns false', () => {
    const propName = 'border';
    const result = shouldForwardProp(propName);
    expect(result).toBe(false);
  });

  // Tests that a prop name from colorConfig returns false when passed to shouldForwardProp function
  it('colorConfig prop name returns false', () => {
    const propName = 'color';
    const result = shouldForwardProp(propName);
    expect(result).toBe(false);
  });

  // Tests that a prop name from flexBoxConfig returns false
  it('flexBoxConfig prop returns false', () => {
    const propName = 'alignItems';
    const result = shouldForwardProp(propName);
    expect(result).toBe(false);
  });
});