import React from 'react'
import {
  Root,
  Sidebar
} from '@rebass/gatsby-theme-docs'
import Readme from '@styled-system/css/README.md'

export default props => {
  return (
    <Root>
      <Sidebar>
        <Readme />
      </Sidebar>
    </Root>
  )
}
