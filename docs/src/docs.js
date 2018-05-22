import React from 'react'
import {
  Flex,
  Box,
  Container,
  Heading,
  Link
} from 'rebass'
import { Link as RouterLink } from 'react-router-dom'
import titleCase from 'title-case'
import routes from './_routes'
import scope from './_scope'
import Nav from './components/Nav'

export default class extends React.Component {
  static getInitialProps = async () => {
    return {
      routes,
      path: '/:name'
    }
  }

  render () {
    const { params } = this.props.match

    if (!params.name) {
      return <pre>not found</pre>
    }

    const route = routes.find(route => route.name === params.name)
    if (!route) return <pre>not found</pre>
    const Component = route.require()

    return (
      <React.Fragment>
        <Flex
          style={{ minHeight: '100vh' }}
          flexDirection={[ 'column', 'row' ]}>
          <Box width={1} style={{ minWidth: 0 }}>
            <Container maxWidth={768} py={4}>
              <Flex mb={4}>
                <Link is={RouterLink} to='/'>Home</Link>
                <Box mx={1}>
                  /
                </Box>
                {titleCase(params.name)}
              </Flex>
              <Component scope={scope} />
            </Container>
          </Box>
          <Box
            px={[ 2, 3 ]}
            py={4}
            color='white'
            bg='black'
            width={[ 1, 256 ]}
            flex='none'
            order={[ null, -1 ]}>
            <Nav routes={routes} />
          </Box>
        </Flex>
      </React.Fragment>
    )
  }
}
