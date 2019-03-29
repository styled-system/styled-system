import React from 'react'
import { graphql } from 'gatsby'
import { Box } from '../system'
import { Container } from '../layout'
import Link from '../Link'
import Badges from '../badges.md'
import GettingStarted from '../../getting-started.md'
import Hex from '../logo/hex'

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
  <Box
    {...props}
    as='ul'
    p={0}
    css={{
      columnWidth: '320px',
      columnGap: '32px',
      listStyle: 'none',
      '& li': {
        breakInside: 'avoid',
      }
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
    <Box
      as='header'
      color='white'
      bg='black'
      css={{
        minHeight: '100vh',
      }}>
      <Box
        px={3}
        py={3}
        css={{
          display: 'flex',
        }}>
        <Box mx='auto' />
        <Link href='/getting-started'
          color='inherit'>
          Docs
        </Link>
        <Link
          href={meta.github}
          ml={3}
          color='inherit'>
          GitHub
        </Link>
      </Box>
      <Container py={5}>
        <Box as='h1'
          fontSize={[5]}
          lineHeight='1.125'>
          {meta.title}
        </Box>
        <Hex />
        <Box fontSize={[3, 4, 5]} fontWeight='bold'>
          {meta.description}
        </Box>
        <Box
          as='pre'
          px={0}
          fontFamily='monospace'
          color='inherit'
          backgroundColor='transparent'>
          npm i styled-system
        </Box>
      </Container>
    </Box>
    <Container py={5}>
      <Badges />
      <Box py={4}>
        <Columns>
          {meta.features.map(feature => (
            <li key={feature}>
              <Box
                fontSize={3}
                mb={15}
                fontWeight='bold'>
                {feature}
              </Box>
            </li>
          ))}
        </Columns>
      </Box>
      <Columns py={4}>
        {meta.quotes.map(quote => (
          <Box as='li' key={quote.text} mb={4}>
            <Box
              as='blockquote'
              fontSize={4}
              fontWeight='bold'
              m={0}>
              “{quote.text}”
            </Box>
            <Link href={quote.href}>
              – {quote.source}
            </Link>
          </Box>
        ))}
      </Columns>
      {sandbox}
      <Box py={4}>
        <GettingStarted />
      </Box>
      <Box py={4}>
        <Box
          as='h2'
          fontSize={6}
          mb={3}
        >
          Docs
        </Box>
        <ul>
          <li>
            <Link href='/responsive-styles'>Responsive Styles</Link>
          </li>
          <li>
            <Link href='/how-it-works'>How it Works</Link>
          </li>
          <li>
            <Link href='/api'>API</Link>
          </li>
          <li>
            <Link href='/table'>Reference Table</Link>
          </li>
          <li>
            <Link href='/custom-props'>Custom Props</Link>
          </li>
        </ul>
      </Box>
    </Container>
    <Box as='footer'>
      <Container>
        <Box fontSize={1} mr={2}>
          <b>
            MIT License
          </b>
        </Box>
        <Link mr={2} href='https://github.com/jxnblk/styled-system'>
          GitHub
        </Link>
      </Container>
    </Box>
  </div>
