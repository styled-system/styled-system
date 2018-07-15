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
  is: Box,
}, { display: 'flex' },
  'alignItems',
  'justifyContent',
)

export default class extends React.Component {
  render () {
    return (
      <Box
        p={4} bg='cyan' className='Box'>
        system-components
        <Flex
          hello='hi'
          is='header'
          p={4}
          bg='magenta'
          alignItems='center'>
          <Box
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
// ref={ref => { console.log('ref', ref) }}
// innerRef={ref => { console.log('innerRef', ref) }}
