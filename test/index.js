import test from 'ava'
import {
  style,
  get,
  themeGet,
  is,
  num,
  px,
  compose,
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
  }
}

test('returns a style function', t => {
  const func = style({ prop: 'width' })
  t.is(typeof func, 'function')
})

test('function returns a style object', t => {
  const style = width({ width: '50%' })
  t.deepEqual(style, {
    width: '50%'
  })
})

test('returns values from theme', t => {
  const style = color({ theme, color: 'blue' })
  t.deepEqual(style, {
    color: '#07c'
  })
})

test('handles aliased props', t => {
  const style = backgroundColor({
    theme,
    bg: 'blue'
  })
  t.deepEqual(style, {
    backgroundColor: '#07c',
  })
})

test('returns null', t => {
  const style = color({})
  t.is(style, null)
})

test('returns an array of responsive style objects', t => {
  const style = width({
    width: ['100%', '50%']
  })
  t.deepEqual(style, [
    { width: '100%' },
    { '@media screen and (min-width: 40em)': { width: '50%' } }
  ])
})

test('skips undefined responsive values', t => {
  const style = width({
    width: ['100%',, '50%']
  })
  t.deepEqual(style, [
    { width: '100%' },
    { '@media screen and (min-width: 52em)': { width: '50%' } }
  ])
})

test('parses object values', t => {
  const style = width({
    width: {
      _: '100%',
      2: '50%',
    }
  })
  t.deepEqual(style, [
    { width: '100%' },
    { '@media screen and (min-width: 64em)': { width: '50%' } }
  ])
})

test.todo('get returns a value')
test.todo('get returns the last argument if no value is found')
test.todo('get returns 0')
test.todo('themeGet returns values from the theme')
test.todo('themeGet does not throw when value doesnt exist')
test.todo('compose combines style functions')
test.todo('num returns true for numbers')
test.todo('num returns false for non-numbers')
test.todo('is returns true for truthy values')
test.todo('is returns false for falsey values')
