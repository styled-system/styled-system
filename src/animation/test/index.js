import animation from '..'

test('returns animation styles', () => {
  const style = animation({
    animation: '3s linear 1s slidein',
    animationDelay: '3s',
  })
  expect(style).toEqual({
    animation: '3s linear 1s slidein',
    animationDelay: '3s',
  })
})
