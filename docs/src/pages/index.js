import React from 'react'
import { graphql } from 'gatsby'
import { Styled } from '../system'
import { Header, Container, } from '../layout'
import NavLink from '../nav-link'
import Badges from '../badges.md'
import GettingStarted from '../../getting-started.md'
import Hex from '../logo/hex'
import Button from '../system/button'

export const query = graphql`
  query Index {
    site {
      siteMetadata {
        title
        description
        github
        install
        features
        quotes {
          text
          source
          href
        }
      }
    }
  }
`

const Columns = props =>
  <ul
    {...props}
    p={0}
    css={{
      listStyle: 'none',
      display: 'flex',
      flexWrap: 'wrap',
    }}
  />

const sandbox = (
  <iframe
    title='sandbox'
    src='https://codesandbox.io/embed/github/jxnblk/styled-system/tree/master/examples/basic'
    style={{
      width: '100%',
      height: '500px',
      border: 0,
      borderRadius: '4px',
      overflow: 'hidden'
    }}
    sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
  />
)

export default ({
  data: {
    site: {
      siteMetadata: meta
    }
  }
}) =>
  <div>
    <header>
      <Header sidebar={false} />
      <Container py={5}>
        <Hex />
        <h1
          fontSize={[4, 4, 5]}
          fontWeight='bold'>
          {meta.description}
        </h1>
        <div
          my={4}
          css={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
          <Button href='/getting-started' mr={3}>
            Documentation
          </Button>
          <NavLink
            href='https://github.com/styled-system/styled-system'
            mr={3}>
            GitHub
          </NavLink>
          <pre
            px={0}
            fontFamily='monospace'
            color='inherit'
            backgroundColor='transparent'>
            npm i styled-system
          </pre>
        </div>
      </Container>
    </header>
    <Container py={5}>
      <Badges />
      <div py={4}>
        <Columns mx={-3}>
          {meta.features.map(feature => (
            <li
              key={feature}
              css={{}}
              width={[ '100%', '50%' ]}
              p={3}
              fontSize={3}
              mb={15}
              fontWeight='bold'>
              {feature}
            </li>
          ))}
        </Columns>
      </div>
      <Columns mx={-3} py={4}>
        {meta.quotes.map(quote => (
          <li
            width={[ '100%', '50%' ]}
            p={3}
            key={quote.text} mb={4}>
            <blockquote
              fontSize={4}
              fontWeight='bold'
              m={0}>
              “{quote.text}”
            </blockquote>
            <Styled.a href={quote.href}>
              – {quote.source}
            </Styled.a>
          </li>
        ))}
      </Columns>
      {sandbox}
      <div py={4}>
        <GettingStarted />
      </div>
      <div py={4}>
        Continue on the next page:
        <NavLink
          href='/responsive-styles'
          fontSize={5}
          px={0}
          mb={3}>
          Responsive Styles
        </NavLink>
      </div>
    </Container>
    <footer>
      <Container
        css={{
          display: 'flex',
          alignItems: 'center',
        }}>
        <div
          fontWeight='bold'
          mr={2}>
          MIT License
        </div>
        <NavLink href='https://github.com/jxnblk/styled-system'>
          GitHub
        </NavLink>
      </Container>
    </footer>
  </div>
