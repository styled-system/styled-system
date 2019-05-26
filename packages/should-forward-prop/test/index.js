import systemProps from 'styled-system/props'
import shouldForwardProp from '../index'

test('returns true for valid HTML attributes', () => {
  const should = shouldForwardProp('href')
  expect(should).toBe(true)
})

systemProps.forEach(prop => {
  test(`returns false for Styled System ${prop} prop`, () => {
    const should = shouldForwardProp(prop)
    expect(should).toBe(false)
  })
})
