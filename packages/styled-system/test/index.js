import {
  style,
  get,
  themeGet,
  is,
  num,
  px,
  compose,
  variant,
  cloneFunction,
  mapProps,
  merge,
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

test('long form prop trumps aliased props', () => {
  const style = backgroundColor({
    theme,
    backgroundColor: 'black',
    bg: 'blue',
  })
  expect(style).toEqual({
    backgroundColor: '#111',
  })
})

test('returns null', () => {
  const style = color({})
  expect(style).toBe(null)
})

test('returns 0', () => {
  const style = width({ width: 0 })
  expect(style).toEqual({ width: 0 })
})

test('returns an array of responsive style objects', () => {
  const style = width({
    width: ['100%', '50%'],
  })
  expect(style).toEqual({
    width: '100%',
    '@media screen and (min-width: 40em)': { width: '50%' },
  })
})

test('returns an array of responsive style objects for all breakpoints', () => {
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

test('get returns a value', () => {
  const a = get({ blue: '#0cf' }, 'blue')
  expect(a).toBe('#0cf')
})

test('get returns the last argument if no value is found', () => {
  const a = get(
    {
      blue: '#0cf',
    },
    'green',
    '#0f0'
  )
  expect(a).toBe('#0f0')
})

test('get returns 0', () => {
  const a = get({}, 0)
  const b = get({ space: [0, 4] }, 0)
  expect(a).toBe(0)
  expect(b).toBe(0)
})

test('get returns deeply nested values', () => {
  const a = get(
    {
      hi: {
        hello: {
          beep: 'boop',
        },
      },
    },
    'hi.hello.beep'
  )
  expect(a).toBe('boop')
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

test('num returns true for numbers', () => {
  const isNumber = num(0)
  expect(isNumber).toBe(true)
})

test('num returns false for non-numbers', () => {
  const isNumber = num(null)
  expect(isNumber).toBe(false)
})

test('is returns true for truthy values', () => {
  const isValue = is(0)
  expect(isValue).toBe(true)
})

test('is returns false for falsey values', () => {
  const a = is(null)
  const b = is(undefined)
  expect(a).toBe(false)
  expect(b).toBe(false)
})

test('cloneFunction creates a new function', () => {
  const func = () => 'hi'
  const b = cloneFunction(func)
  expect(func === b).toBe(false)
  expect(b()).toBe('hi')
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

test('mapProps copies propTypes', () => {
  const margin = style({ prop: 'margin' })
  const func = mapProps(props => props)(margin)
  expect(typeof func.propTypes).toBe('object')
})

test('merge deeply merges', () => {
  const result = merge(
    { hello: { hi: 'beep', merge: 'me', and: 'me' } },
    { hello: { hey: 'boop', merge: 'me', and: 'all of us' } }
  )
  expect(result).toEqual({
    hello: {
      hi: 'beep',
      hey: 'boop',
      merge: 'me',
      and: 'all of us',
    },
  })
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
