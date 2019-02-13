import React from 'react'
import { graphql } from 'gatsby'
import { Box, Flex, Container, Text, Blockquote, Link, UL } from '../components'
import Logo from '../Logo'
import Badges from '../badges.md'
import CodeSandbox from '../CodeSandbox'
import GettingStarted from '../../getting-started.md'
import Docs from '../../README.md'
import Footer from '../Footer'
// import Pattern from '../Pattern'

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
      px={4}
      py={[ 5, 6 ]}
      color='black'
      bg='lavender'>
      <Flex>
        <Logo />
        <Logo />
        <Logo />
        <Logo />
      </Flex>
      <Flex mb={5}>
        <Logo />
        <Logo />
        <Logo />
        <Logo />
      </Flex>
      <Text as='h1'
        fontSize={[6]}
        lineHeight='1.125'>
        {meta.title}
      </Text>
      <Text fontSize={[3, 4, 5]} fontWeight='bold'>
        {meta.description}
      </Text>
      <Badges />
    </Box>
    <Container py={5}>
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
