import { system } from '@styled-system/core'
import color from '../src'

test('returns colors styles', () => {
  const style = color({
    color: 'gold',
    bg: 'tomato',
  })
  expect(style).toEqual({
    color: 'gold',
    backgroundColor: 'tomato',
  })
})

test('color.config can be used for extension', () => {
  const custom = system(color.config)
  const style = custom({ bg: 'tomato' })
  expect(style).toEqual({
    backgroundColor: 'tomato',
  })
})
