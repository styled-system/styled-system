import React from 'react'
import renderer from 'react-test-renderer'
import styled from 'styled-components'
import 'jest-styled-components'
import { space } from '../src'

describe('styled-components', () => {
  test('default props can be overridden', () => {
    const Box = styled('div')(space)
    Box.defaultProps = {
      m: 0,
      px: 0,
      py: 0,
    }
    const json = renderer.create(
      <Box px={2} m={4} />
    ).toJSON()
    expect(json).toHaveStyleRule('padding-left', '8px')
    expect(json).toHaveStyleRule('padding-right', '8px')
    expect(json).toHaveStyleRule('padding-top', '0')
    expect(json).toHaveStyleRule('padding-bottom', '0')
    expect(json).toHaveStyleRule('margin', '32px')
  })
})
