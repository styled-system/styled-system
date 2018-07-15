import React from 'react'
import system from '../src'

// demo for manually testing
// - ref
// - innerRef
// - is
// - extending

const Box = system({
}, 'space', 'color', 'fontSize')

const Flex = system({
  is: Box
}, { display: 'flex' },
  'alignItems',
  'justifyContent',
)

export default class extends React.Component {
  render () {
    return (
      <Box p={4} bg='cyan'>
        system-components
        <Flex
          ref={ref => {
            console.log('Flex ref', ref)
          }}
          innerRef={ref => {
            console.log('Flex innerRef', ref)
          }}
          p={4}
          bg='magenta'
          is='footer'
          alignItems='center'>
          <Box
            ref={ref => {
              console.log('Box ref', ref)
            }}
            innerRef={ref => {
              console.log('Box innerRef', ref)
            }}
            is='h2'
            p={4}
            bg='black'
            color='white'>
            Hello
          </Box>
          <Box>Box</Box>
        </Flex>
      </Box>
    )
  }
}
