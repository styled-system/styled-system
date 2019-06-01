import React from 'react'
import { graphql } from 'gatsby'
import { Box, Styled, css } from 'theme-ui'
import Layout from '../layout'
import { Header, Container } from '../layout'
import NavLink from '../nav-link'
import Badges from '../badges.md'
import Example from '../example.mdx'
import Logos from '../logos.mdx'
import GettingStarted from '../../getting-started.md'
import Hex from '../logo/hex'
import Button from '../button'

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

const Columns = props => (
  <Box
    {...props}
    as="ul"
    p={0}
    css={{
      listStyle: 'none',
      display: 'flex',
      flexWrap: 'wrap',
    }}
  />
)

const Banner = ({ meta }) => (
  <>
    <Container py={5}>
      <Hex />
      <Box as="h1" fontSize={[4, 4, 5]} fontWeight="bold">
        {meta.description}
      </Box>
      <Box
        my={4}
        css={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Button href="#getting-started" mr={3}>
          Documentation
        </Button>
        <NavLink href="https://github.com/styled-system/styled-system" mr={3}>
          GitHub
        </NavLink>
        <Styled.pre
          px={0}
          css={css({
            color: 'inherit',
            bg: 'transparent',
          })}>
          npm i styled-system
        </Styled.pre>
      </Box>
    </Container>
    <Container>
      <Badges />
      <Box py={4}>
        <Columns mx={-2}>
          {meta.features.map(feature => (
            <Box
              key={feature}
              as="li"
              width={[1, 1 / 2]}
              css={css({
                p: 3,
                fontSize: 3,
                fontWeight: 'bold',
              })}>
              {feature}
            </Box>
          ))}
        </Columns>
      </Box>
      <Box py={4}>
        <Example />
      </Box>
      <Columns mx={-3} py={4}>
        {meta.quotes.map(quote => (
          <Box as="li" width={[1, 1 / 2]} p={3} key={quote.text} mb={0}>
            <Box as="blockquote"
              css={css({
                fontSize: 3,
                fontWeight: 'bold',
                m: 0,
              })}>
              “{quote.text}”
            </Box>
            <Styled.a href={quote.href}>– {quote.source}</Styled.a>
          </Box>
        ))}
      </Columns>
      <Box py={4}>
        <Logos />
      </Box>
    </Container>
  </>
)

export default ({
  data: {
    site: { siteMetadata: meta },
  },
}) => (
  <Layout banner={<Banner meta={meta} />}>
    <Box id="getting-started" py={4}>
      <GettingStarted />
    </Box>
  </Layout>
)
