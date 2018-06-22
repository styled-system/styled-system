import React from 'react'
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  ButtonOutline,
} from 'rebass'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const stops = [
  // 90, 80, 70, 60
  30,
  25,
  20,
  15
].map(s => `calc(100% - ${s}%)`)
const colors = [
  1/16,
  1/8,
  1/4,
  3/8,
].map(n => `rgba(255, 0, 255, ${n})`)
const gradient = `linear-gradient(150deg,
  transparent ${stops[0]},
  ${colors.map((color, i) => `${color} ${stops[i]}, ${color} ${stops[i + 1] || ''}`).join(', ')}
)`

const Hero = styled(Box)([], {
  backgroundSize: '100vw 100vh',
  backgroundImage: gradient
})

export default class extends React.Component {
  static defaultProps = {
    layout: false
  }

  render () {
    return (
      <React.Fragment>
        <Hero color='white' bg='black'>
          <Flex
            style={{ minHeight: '100vh' }}
            py={[ 5, 6, 7 ]}
            alignItems='center'
            justifyContent='center'>
            <Flex
              flexWrap='wrap'
              alignItems='center'>
              <Logo blend='screen' />
              <Box px={3} py={4}>
                <Heading
                  is='h1'
                  mb={2}
                  fontSize={[ 4, 5, 6, 7 ]}>
                  Styled System
                </Heading>
                <Text
                  mb={5}
                  fontSize={[ 3, 4 ]}
                  fontWeight='bold'>
                  Design system utilities for CSS-in-JS
                </Text>
                <Button
                  is={Link}
                  to='/getting-started'
                  px={3}
                  py={3}
                  mr={3}
                  color='white'
                  bg='magenta'>
                  Documentation
                </Button>
                <Button
                  is='a'
                  href='https://github.com/jxnblk/styled-system'
                  px={3}
                  py={3}
                  color='white'
                  bg='rgba(255, 0, 255, 0.5)'
                >
                  GitHub
                </Button>
              </Box>
            </Flex>
          </Flex>
        </Hero>
      </React.Fragment>
    )
  }
}
