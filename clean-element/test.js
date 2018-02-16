import test from 'ava'
import React from 'react'
import styled from 'styled-components'
import { renderToString } from 'react-dom/server'
import { textAlign, propTypes } from '../core/src'
import cleanElement from './src'

test('it removes props with prop types', t => {
  const Clean = cleanElement('div')
  Clean.propTypes = {
    ...propTypes.textAlign
  }
  const Box = styled(Clean)`
    ${textAlign}
  `

  const result = renderToString(<Box id='beep' textAlign='center' children='hello' />)

  t.snapshot(result)
})

test('does not remove props without propTypes', t => {
  const Clean = cleanElement('div')
  const Box = styled(Clean)`
    ${textAlign}
  `

  const result = renderToString(<Box id='beep' textAlign='center' children='hello' />)

  t.snapshot(result)
})
