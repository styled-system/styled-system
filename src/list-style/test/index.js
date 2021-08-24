import listStyle from '..'

test('returns listStyle styles', () => {
  const style = shadow({
    theme: {
      listStyle: 'fill',
    },
  })
  expect(style).toEqual({
    listStyle: 'fill',
  })
})
