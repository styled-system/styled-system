import propTypes from '../src'
import {
  space,
  color,
} from 'styled-system'

test('includes prop types for all space prop names', () => {
  const types = Object.keys(propTypes.space)
  expect(types).toEqual(space.propNames)
})

test('includes prop types for all color prop names', () => {
  const types = Object.keys(propTypes.color)
  expect(types).toEqual(color.propNames)
})
