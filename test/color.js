import test from 'ava'
import { color } from '../src'

const theme = {
  colors: {
    blue: '#07c',
    black: '#111',
  }
}

test('returns color values from theme', t => {
  const a = color({ theme, color: 'blue', bg: 'black' })
  t.deepEqual(a, [
    { color: '#07c' },
    { backgroundColor: '#111' },
  ])
})

test('returns raw color values', t => {
  const a = color({
    theme,
    color: 'inherit',
    bg: 'tomato'
  })
  t.deepEqual(a, [
    { color: 'inherit' },
    { backgroundColor: 'tomato' },
  ])
})

test('backgroundColor prop overrides bg prop', t => {
  const a = color({
    backgroundColor: 'tomato',
    bg: 'blue',
  })
  t.deepEqual(a, [
    { backgroundColor: 'tomato' }
  ])
})
