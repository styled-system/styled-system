import contrast from '../src'

test('returns constrasting text color styles', () => {
  const style = contrast({
    backgroundColor: '#5e3abd',
  })
  expect(style).toEqual({
    color: 'white',
  })
})
