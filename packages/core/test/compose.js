import { style, compose } from '../src'

const color = style({
  prop: 'color',
  key: 'colors',
})

const backgroundColor = style({
  prop: 'backgroundColor',
  alias: 'bg',
  key: 'colors',
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
