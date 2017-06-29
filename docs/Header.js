import React from 'react'
import { hoc } from './styled-components'
import Text from './Text'
import Button from './Button'

const Heading = hoc('h1').extend`
  margin: 0;
`

const Header = props => (
  <header>
    <Heading>styled-system</Heading>
    <Text>
      Design system utilities for styled-components
    </Text>
  </header>
)

export default Header
