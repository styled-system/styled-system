import border from '../src'

test('returns border styles', () => {
  const style = border({ border: '1px solid gold' })
  expect(style).toEqual({ border: '1px solid gold' })
})
