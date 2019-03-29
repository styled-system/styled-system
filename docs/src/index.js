import React from 'react'
import { RebassMDX } from '@rebass/mdx'
import Root from './Root'
import theme from './theme'
import components from './components'

export const wrapRootElement = ({ element, props }) =>
  <RebassMDX
    components={components}
    theme={theme}>
    {element}
  </RebassMDX>

export const wrapPageElement = ({ element, props }) =>
  <Root>
    {element}
  </Root>
