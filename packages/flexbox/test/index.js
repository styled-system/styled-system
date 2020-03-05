import flexbox from '../src'

test('returns flexbox styles', () => {
  const style = flexbox({
    gap: [1,2,3],
    alignItems: 'center',
    flex: '1 1 auto',
  flexDirection: 'row'
  })
  expect(style).toEqual({
    gap: 4,
    alignItems: 'center',
    flex: '1 1 auto',
    flexDirection: 'row',
    '@media screen and (min-width: 40em)': {
      gap: 8,
    },
    '@media screen and (min-width: 52em)': {
      gap: 16,
    },
  })
})
