import {
  color,
  width,
  fontSize,
  size,
  gridGap,
  gridRowGap,
  gridColumnGap,
  textStyle,
  colorStyle,
  borders,
} from '../src'

const theme = {
  colors: {
    blue: '#07c',
    black: '#111',
  },
}

test('returns color values from theme', () => {
  const a = color({ theme, color: 'blue', bg: 'black' })
  expect(a).toEqual({ color: '#07c', backgroundColor: '#111' })
})

test('returns raw color values', () => {
  const a = color({
    theme,
    color: 'inherit',
    bg: 'tomato',
  })
  expect(a).toEqual({ color: 'inherit', backgroundColor: 'tomato' })
})

test.skip('backgroundColor prop overrides bg prop', () => {
  const a = color({
    backgroundColor: 'tomato',
    bg: 'blue',
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
  expect(a).toEqual({ gridGap: 8 })
})

test('gridGap uses the default scale', () => {
  const a = gridGap({
    theme: {},
    gridGap: 2,
  })
  expect(a).toEqual({ gridGap: 8 })
})

test('gridRowGap returns a scalar style', () => {
  const a = gridRowGap({
    theme: {
      space: [0, 2, 4, 8],
    },
    gridRowGap: 3,
  })
  expect(a).toEqual({ gridRowGap: 8 })
})

test('gridRowGap uses the default scale', () => {
  const a = gridRowGap({
    theme: {},
    gridRowGap: 2,
  })
  expect(a).toEqual({ gridRowGap: 8 })
})

test('gridColumnGap returns a scalar style', () => {
  const a = gridColumnGap({
    theme: {
      space: [0, 2, 4, 8],
    },
    gridColumnGap: 3,
  })
  expect(a).toEqual({ gridColumnGap: 8 })
})

test('gridColumnGap uses the default scale', () => {
  const a = gridColumnGap({
    theme: {},
    gridColumnGap: 2,
  })
  expect(a).toEqual({ gridColumnGap: 8 })
})

test('textStyle prop returns theme.textStyles object', () => {
  const a = textStyle({
    theme: {
      textStyles: {
        heading: {
          fontWeight: 'bold',
          lineHeight: 1.25,
        },
      },
    },
    textStyle: 'heading',
  })
  expect(a).toEqual({
    fontWeight: 'bold',
    lineHeight: 1.25,
  })
})

test('colors prop returns theme.colorStyles object', () => {
  const a = colorStyle({
    theme: {
      colorStyles: {
        dark: {
          color: '#fff',
          backgroundColor: '#000',
        },
      },
    },
    colors: 'dark',
  })
  expect(a).toEqual({
    color: '#fff',
    backgroundColor: '#000',
  })
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
