import typography from '..'

test('returns typography styles', () => {
  const style = typography({
    fontSize: 32,
    fontWeight: 'bold',
  })
  expect(style).toEqual({
    fontSize: 32,
    fontWeight: 'bold',
  })
})
