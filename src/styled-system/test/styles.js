import {
  color,
  width,
  layout,
  fontSize,
  size,
  gridGap,
  gridRowGap,
  gridColumnGap,
  borders,
  shadow,
  compose,
} from '..'

const theme = {
  colors: {
    blue: '#07c',
    black: '#111',
  },
}

test('returns color values from theme', () => {
  const a = color({ theme, fill: 'blue', bg: 'black' })
  expect(a).toEqual({ fill: '#07c', backgroundColor: '#111' })
})

test('returns raw color values', () => {
  const a = color({
    theme,
    fill: 'inherit',
    bg: 'tomato',
  })
  expect(a).toEqual({ fill: 'inherit', backgroundColor: 'tomato' })
})

test('backgroundColor prop overrides bg prop', () => {
  const a = color({
    bg: 'blue',
    backgroundColor: 'tomato',
  })
  expect(a).toEqual({ backgroundColor: 'tomato' })
})

test('returns a pixel font-size', () => {
  const a = fontSize({ fontSize: 48 })
  expect(a).toEqual({ fontSize: 48 })
})

test('uses a default font-size scale', () => {
  const a = fontSize({ fontSize: 2 })
  expect(a).toEqual({ fontSize: 16 })
})

test('returns a string font-size', () => {
  const a = fontSize({ fontSize: '2em' })
  expect(a).toEqual({ fontSize: '2em' })
})

test('returns a percentage based width', () => {
  const a = width({ width: 1 / 2 })
  expect(a).toEqual({ width: '50%' })
})

test('returns a pixel based width', () => {
  const a = width({ width: 256 })
  expect(a).toEqual({ width: 256 })
})

test('returns a string width', () => {
  const a = width({ width: 'auto' })
  expect(a).toEqual({ width: 'auto' })
})

test('returns a width based on theme.sizes', () => {
  const a = width({
    theme: {
      sizes: [24, 48],
    },
    width: 1,
  })
  expect(a).toEqual({ width: 48 })
})

test('returns fractional responsive widths', () => {
  const a = width({
    width: [1, 1 / 2, 1 / 4],
  })
  expect(a).toEqual({
    width: '100%',
    '@media screen and (min-width: 40em)': {
      width: '50%',
    },
    '@media screen and (min-width: 52em)': {
      width: '25%',
    },
  })
})

test('size returns width and height', () => {
  const styles = size({
    size: 4,
  })
  expect(styles).toEqual({ width: 4, height: 4 })
})

// grid
test('gridGap returns a scalar style', () => {
  const a = gridGap({
    theme: {
      space: [0, 2, 4, 8],
    },
    gridGap: 3,
  })
  expect(a).toEqual({ gap: 8 })
})

test('gridGap uses the default scale', () => {
  const a = gridGap({
    theme: {},
    gridGap: 2,
  })
  expect(a).toEqual({ gap: 8 })
})

test('gridRowGap returns a scalar style', () => {
  const a = gridRowGap({
    theme: {
      space: [0, 2, 4, 8],
    },
    gridRowGap: 3,
  })
  expect(a).toEqual({ rowGap: 8 })
})

test('gridRowGap uses the default scale', () => {
  const a = gridRowGap({
    theme: {},
    gridRowGap: 2,
  })
  expect(a).toEqual({ rowGap: 8 })
})

test('gridColumnGap returns a scalar style', () => {
  const a = gridColumnGap({
    theme: {
      space: [0, 2, 4, 8],
    },
    gridColumnGap: 3,
  })
  expect(a).toEqual({ columnGap: 8 })
})

test('gridColumnGap uses the default scale', () => {
  const a = gridColumnGap({
    theme: {},
    gridColumnGap: 2,
  })
  expect(a).toEqual({ columnGap: 8 })
})

test('borders prop returns correct sequence', () => {
  const a = borders({
    borderBottom: '1px solid',
    borderWidth: '2px',
    borderStyle: 'dashed',
    borderColor: 'red',
  })
  expect(a).toEqual({
    borderBottom: '1px solid',
    borderWidth: '2px',
    borderStyle: 'dashed',
    borderColor: 'red',
  })
})

test('shadow handles boxShadow and textShadow props', () => {
  const a = shadow({
    textShadow: '0 -1px rgba(255, 255, 255, .25)',
    boxShadow: 'none',
  })
  expect(a).toEqual({
    textShadow: '0 -1px rgba(255, 255, 255, .25)',
    boxShadow: 'none',
  })
})

test('compose maintains media query order', () => {
  const parser = compose(color, layout)
  const a = parser({
    bg: ['tomato', null, 'black'],
    width: ['100%', '50%', '25%'],
  })
  expect(Object.keys(a)).toEqual([
    'backgroundColor',
    '@media screen and (min-width: 40em)',
    '@media screen and (min-width: 52em)',
    'width',
  ])
})
