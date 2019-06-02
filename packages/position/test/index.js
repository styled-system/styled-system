import position from '../src'

test('returns position styles', () => {
  const style = position({
    position: 'absolute',
    top: 0,
    right: 0,
  })
  expect(style).toEqual({
    position: 'absolute',
    top: 0,
    right: 0,
  })
})
