import React from 'react'
import { graphql } from 'gatsby'
import { Box, Flex, Container, Text, Blockquote, Link, Columns, Pre } from '../components'
import Logo from '../Logo'
import Badges from '../badges.md'
import CodeSandbox from '../CodeSandbox'
import GettingStarted from '../../getting-started.md'
import Footer from '../Footer'
import Hex from '../Hex'

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
      <Flex px={3} py={3}>
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
      </Flex>
      <Container pt={[4, 5]} pb={[5, 6]}>
        <Text as='h1'
          fontSize={[5]}
          lineHeight='1.125'>
          {meta.title}
        </Text>
        <Hex />
        <Text fontSize={[3, 4, 5]} fontWeight='bold'>
          {meta.description}
        </Text>
        <Pre
          px={0}
          color='inherit'
          backgroundColor='transparent'>
          npm i styled-system
        </Pre>
      </Container>
    </Box>
    <Container py={5}>
      <Badges />
      <Box py={4}>
        <Columns>
          {meta.features.map(feature => (
            <li key={feature}>
              <Text
                fontSize={3}
                mb={15}
                fontWeight='bold'>
                {feature}
              </Text>
            </li>
          ))}
        </Columns>
      </Box>
      <Columns py={4}>
        {meta.quotes.map(quote => (
          <Box as='li' key={quote.text} mb={4}>
            <Blockquote>
              “{quote.text}”
            </Blockquote>
            <Link href={quote.href}>
              – {quote.source}
            </Link>
          </Box>
        ))}
      </Columns>
      <CodeSandbox />
      <Box py={4}>
        <GettingStarted />
      </Box>
      <Box py={4}>
        <Text
          as='h2'
          fontSize={6}
          mb={3}
        >
          Docs
        </Text>
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
    <Footer />
  </div>
