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

test('returns theme values', () => {
  const style = position({ top: 1, right: 2, bottom: 3, left: 4 })
  expect(style).toEqual({ top: 4, right: 8, bottom: 16, left: 32 })
})

test('returns theme values using inset', () => {
  const style = position({ inset: 4 })
  expect(style).toEqual({ top: 32, right: 32, bottom: 32, left: 32 })
})

test('returns pixel values', () => {
  const style = position({
    top: '1px',
    right: '2px',
    bottom: '3px',
    left: '4px',
  })
  expect(style).toEqual({
    top: '1px',
    right: '2px',
    bottom: '3px',
    left: '4px',
  })
})

test('returns percent values using inset', () => {
  const style = position({ inset: '25%' })
  expect(style).toEqual({
    top: '25%',
    right: '25%',
    bottom: '25%',
    left: '25%',
  })
})
