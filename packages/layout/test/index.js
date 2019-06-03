import layout from '../src'

test('returns layout styles', () => {
  const style = layout({
    width: [ 1, 1/2, 1/4 ],
    minHeight: 32,
    maxWidth: 768,
  })
  expect(style).toEqual({
    width: '100%',
    maxWidth: 768,
    minHeight: 32,
    '@media screen and (min-width: 40em)': {
      width: '50%',
    },
    '@media screen and (min-width: 52em)': {
      width: '25%',
    },
  })
})

test('props can be aliased', () => {
  layout.config.w = layout.config.width
  const style = layout({
    w: [ 1, 1/2 ],
  })
  expect(style).toEqual({
    width: '100%',
    '@media screen and (min-width: 40em)': {
      width: '50%',
    }
  })
})
