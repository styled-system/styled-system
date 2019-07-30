import React from 'react'
import renderer from 'react-test-renderer'
import serializer, { matchers } from 'jest-emotion'
import styled from '@emotion/styled'
import { space } from '../src'

expect.extend(matchers)
expect.addSnapshotSerializer(serializer)

describe('emotion', () => {
  test('default props can be overridden', () => {
    const Box = styled('div')(space)
    Box.defaultProps = {
      px: 0,
      py: 0
    }
    const json = renderer.create(<Box px={2} py={1} />).toJSON()
    expect(json).toHaveStyleRule('padding-left', '8px')
    expect(json).toHaveStyleRule('padding-right', '8px')
    expect(json).toHaveStyleRule('padding-top', '4px')
    expect(json).toHaveStyleRule('padding-bottom', '4px')
  })
})

