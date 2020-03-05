import grid from '../src'

test('returns grid styles', () => {
  const style = grid({
    gap: [1,2,3],
    alignItems: 'center',
    gridGap: 32,
  })
  expect(style).toEqual({
    gap: 4,
    alignItems: 'center',
    gridGap: 32,
    '@media screen and (min-width: 40em)': {
      gap: 8,
    },
    '@media screen and (min-width: 52em)': {
      gap: 16,
    },
  })
})
