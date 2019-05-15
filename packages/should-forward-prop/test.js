import test from 'ava'
import shouldForwardProp from './index'
import systemProps from 'styled-system/props'

test('returns true for valid HTML attributes', t => {
  const should = shouldForwardProp('href')
  t.is(should, true)
})

systemProps.forEach(prop => {
  test(`returns false for Styled System ${prop} prop`, t => {
    const should = shouldForwardProp(prop)
    t.is(should, false)
  })
})
