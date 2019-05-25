import {
  style,
  get,
  themeGet,
  compose,
  variant,
  fontSize,
} from '../src'

const width = style({
  prop: 'width',
})

const color = style({
  prop: 'color',
  key: 'colors',
})

const backgroundColor = style({
  prop: 'backgroundColor',
  alias: 'bg',
  key: 'colors',
})

const theme = {
  colors: {
    blue: '#07c',
    black: '#111',
  },
}

test('returns a style function', () => {
  const func = style({ prop: 'width' })
  expect(typeof func).toBe('function')
})

test('function returns a style object', () => {
  const style = width({ width: '50%' })
  expect(style).toEqual({
    width: '50%',
  })
})

test('returns values from theme', () => {
  const style = color({ theme, color: 'blue' })
  expect(style).toEqual({
    color: '#07c',
  })
})

test('handles aliased props', () => {
  const style = backgroundColor({
    theme,
    bg: 'blue',
  })
  expect(style).toEqual({
    backgroundColor: '#07c',
  })
})

test('returns 0', () => {
  const style = width({ width: 0 })
  expect(style).toEqual({ width: 0 })
})

test('returns responsive style objects', () => {
  const style = width({
    width: ['100%', '50%'],
  })
  expect(style).toEqual({
    width: '100%',
    '@media screen and (min-width: 40em)': { width: '50%' },
  })
})

test('returns responsive style objects for all breakpoints', () => {
  const style = width({
    width: ['100%', '75%', '50%', '33%', '25%'],
  })
  expect(style).toEqual({
    width: '100%',
    '@media screen and (min-width: 40em)': { width: '75%' },
    '@media screen and (min-width: 52em)': { width: '50%' },
    '@media screen and (min-width: 64em)': { width: '33%' },
  })
})

test('skips undefined responsive values', () => {
  const style = width({
    width: ['100%', , '50%'],
  })
  expect(style).toEqual({
    width: '100%',
    '@media screen and (min-width: 52em)': { width: '50%' },
  })
})

test('parses object values', () => {
  const style = width({
    width: {
      _: '100%',
      2: '50%',
    },
  })
  expect(style).toEqual({
    width: '100%',
    '@media screen and (min-width: 64em)': { width: '50%' },
  })
})

test('themeGet returns values from the theme', () => {
  const a = themeGet('colors.blue')({ theme })
  expect(a).toBe('#07c')
})

test('themeGet does not throw when value doesnt exist', () => {
  const a = themeGet('colors.blue.5')({ theme })
  expect(a).toBe(null)
})

test('themeGet accepts a fallback', () => {
  const a = themeGet('colors.lightblue', '#0cf')({ theme })
  expect(a).toBe('#0cf')
})

test('compose combines style functions', () => {
  const colors = compose(
    color,
    backgroundColor
  )
  const styles = colors({
    color: 'tomato',
    bg: 'black',
  })
  expect(typeof colors).toBe('function')
  expect(styles).toEqual({ color: 'tomato', backgroundColor: 'black' })
})

test('variant returns style objects from theme', () => {
  const buttons = variant({ key: 'buttons' })
  const a = buttons({
    theme: {
      buttons: {
        primary: {
          padding: '32px',
          backgroundColor: 'tomato',
        },
      },
    },
    variant: 'primary',
  })
  expect(a).toEqual({
    padding: '32px',
    backgroundColor: 'tomato',
  })
})

test('variant prop can be customized', () => {
  const buttons = variant({ key: 'buttons', prop: 'type' })
  const a = buttons({
    theme: {
      buttons: {
        primary: {
          padding: '32px',
          backgroundColor: 'tomato',
        },
      },
    },
    type: 'primary',
  })
  expect(a).toEqual({
    padding: '32px',
    backgroundColor: 'tomato',
  })
})

test('array values longer than breakpoints does not reset returned style object', () => {
  const a = width({
    width: ['100%', , , , , '50%', '25%'],
  })
  expect(a).toEqual({ width: '100%' })
})

test('variant can be composed', () => {
  const system = compose(
    variant({ key: 'typography' }),
    fontSize,
    color
  )
  const result = system({
    theme: {
      typography: {
        primary: {
          fontSize: '32px',
          color: '#fff',
        },
      },
    },
    variant: 'primary',
    color: '#111',
  })
  expect(result).toEqual({
    fontSize: '32px',
    color: '#111',
  })
})
