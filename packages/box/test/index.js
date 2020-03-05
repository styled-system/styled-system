import box from '../src'

test('returns box styles', () => {
  const style = box({
    gap: [1,2,3],
    alignItems: 'center',
    placeItems: 'start end',
    placeSelf: 'center stretch',
  })
  expect(style).toEqual({
    gap: 4,
    alignItems: 'center',
    placeItems: 'start end',
    placeSelf: 'center stretch',
    '@media screen and (min-width: 40em)': {
      gap: 8,
    },
    '@media screen and (min-width: 52em)': {
      gap: 16,
    },
  })
})
