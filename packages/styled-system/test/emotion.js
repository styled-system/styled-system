import React from 'react'
import renderer from 'react-test-renderer'
import serializer, { matchers } from 'jest-emotion'
import styled from '@emotion/styled'
import { space } from '../src'

expect.extend(matchers)
expect.addSnapshotSerializer(serializer)

const render = el => renderer.create(el).toJSON()

describe('emotion', () => {
  test('default props can be overridden', () => {
    const Box = styled('div')(space)
    Box.defaultProps = {
      px: 0,
      py: 0
    }
    const json = render(<Box px={2} py={1} />)
    expect(json).toHaveStyleRule('padding-left', '8px')
    expect(json).toHaveStyleRule('padding-right', '8px')
    expect(json).toHaveStyleRule('padding-top', '4px')
    expect(json).toHaveStyleRule('padding-bottom', '4px')
  })

  test('responsive styles are rendered in the correct order', () => {
    const Box = styled('div')(space)
    const json = render(
      <Box
        m={[1, null, 3]}
        p={[1, 2, 3]}
      />
    )
    expect(json).toMatchSnapshot()
  })
})

