import React from 'react'
import { graphql } from 'gatsby'
import { Box, Flex, Container, Text, Blockquote, Link, UL, Pre } from '../components'
import Logo from '../Logo'
import Badges from '../badges.md'
import CodeSandbox from '../CodeSandbox'
import GettingStarted from '../../getting-started.md'
import Docs from '../../README.md'
import Footer from '../Footer'
// import Pattern from '../Pattern'
import Hex from '../Hex'

export const query = graphql`
  query Index {
    site {
      siteMetadata {
        title
        description
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
    <Box as='header'
      py={[ 5, 6 ]}
      color='black'
      bg='lavender'>
      <Container>
        <Text as='h1'
          fontSize={[5]}
          mb={4}
          lineHeight='1.125'>
          {meta.title}
        </Text>
        <Hex />
        <Text fontSize={[3, 4, 5]} fontWeight='bold' mt={4}>
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
        <UL>
          {meta.features.map(feature => (
            <li key={feature}>
              <Text
                fontSize={3}
                my={3}
                fontWeight='bold'>
                {feature}
              </Text>
            </li>
          ))}
        </UL>
      </Box>
      <Box py={4}>
        {meta.quotes.map(quote => (
          <Box key={quote.text} my={3}>
            <Blockquote>
              “{quote.text}”
            </Blockquote>
            <Link href={quote.href}>
              – {quote.source}
            </Link>
          </Box>
        ))}
      </Box>
      <CodeSandbox />
      <GettingStarted />
      <Docs />
    </Container>
    <Footer />
  </div>
