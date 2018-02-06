import test from 'ava'
import React from 'react'
import styled from 'styled-components'
import { renderToString } from 'react-dom/server'
import { textAlign, propTypes } from '../src'
import cleanElement from './src'

const CleanDiv = cleanElement('div')

CleanDiv.propTypes = {
  ...propTypes.textAlign
}

const Box = styled(CleanDiv)`
  ${textAlign}
`

test('it removes props', t => {
  const result = renderToString(<Box textAlign='center' />)

  t.snapshot(result)
})
