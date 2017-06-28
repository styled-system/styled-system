import React from 'react'
import styled from 'styled-components'
import { connect } from 'funcup'
import { Flex, Box } from 'grid-styled'
import { hoc } from './styled-components'
import { toggleXRay } from './updaters'
import colors from './colors'

const Button = hoc('button').extend`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: .2em;
  padding: 12px;
  border: 0;
  color: ${props => props.active ? colors.blue : '#fff'};
  background-color: transparent;
`

const Btn = Button.withComponent('a').extend`
  text-decoration: none;
`

const Root = styled(Flex)`
  height: 48px;
  align-items: center;
  background-color: #000;
`

const Bar = props => (
  <Root>
    <Button
      onClick={e => props.update(toggleXRay)}
      active={props.xray}
      children='X-Ray'
      m={0}
    />
    <Btn
      ml='auto'
      href='http://jxnblk.com'
      children='Made by Jxnblk'
    />
  </Root>
)

export default connect()(Bar)
