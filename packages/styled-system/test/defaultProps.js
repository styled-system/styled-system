import React from 'react'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'
import styled from '@emotion/styled'
import { space } from 'styled-system'

expect.addSnapshotSerializer(serializer)

const Comp = styled('div', { shouldForwardProp: () => true })(space)
Comp.defaultProps = { p: 0 }

describe('application of default props should not affect order of styles', () => {
  test('default props not provided to instance', () => {
    const tree = renderer.create(<Comp px={2} py={1} />)
    const props = Object.entries(tree.toJSON().props)

    expect(tree).toMatchSnapshot()
    expect(props).toEqual([
      ['px', 2],
      ['py', 1],
      ['p', 0],
      ['className', 'css-1fhifp9'],
    ])
  })

  test('default props provided to instance', () => {
    const tree = renderer.create(<Comp {...Comp.defaultProps} px={2} py={1} />)
    const props = Object.entries(tree.toJSON().props)

    expect(tree).toMatchSnapshot()
    expect(props).toEqual([
      ['p', 0],
      ['px', 2],
      ['py', 1],
      ['className', 'css-sl57if'],
    ])
  })
})
