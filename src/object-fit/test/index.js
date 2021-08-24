import objectFit from '..'

test('returns objectFit styles', () => {
  const style = shadow({
    theme: {
      objectFit: 'fill',
    },
  })
  expect(style).toEqual({
    objectFit: 'fill',
  })
})
