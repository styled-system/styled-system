import color from '..'

test('returns colors styles', () => {
  const style = color({
    textColor: 'gold',
    fill: 'red',
    opacity: 1,
  })
  expect(style).toEqual({
    color: 'gold',
    fill: 'red',
    opacity: 1,
  })
})
