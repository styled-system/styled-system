import grid from '../src'

test('returns grid styles', () => {
  const style = grid({
    gridGap: 32,
  })
  expect(style).toEqual({
    gridGap: 32,
  })
})

test('returns gap styles', () => {
  const style = grid({
    gap: 32,
  })
  expect(style).toEqual({
    gap: 32,
  })
})
