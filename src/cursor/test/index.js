import cursor from '..'

test('returns cursor styles', () => {
  const style = shadow({
    theme: {
      cursor: 'pointer',
    },
  })
  expect(style).toEqual({
    cursor: 'pointer',
  })
})
