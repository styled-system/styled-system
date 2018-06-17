import React from 'react'
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  ButtonOutline,
} from 'rebass'
import { Link } from 'react-router-dom'
import Logo from './Logo'


export default class extends React.Component {
  static defaultProps = {
    layout: './_home-layout.js'
  }

  render () {
    return (
      <React.Fragment>
        <Box py={[ 5, 6, 7 ]} color='white' bg='black'>
          <Flex alignItems='center' justifyContent='center'>
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
                  color='black'
                  bg='white'>
                  Documentation
                </Button>
                <Button
                  is='a'
                  href='https://github.com/jxnblk/styled-system'
                  px={3}
                  py={3}
                  color='white'>
                  GitHub
                </Button>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </React.Fragment>
    )
  }
}
