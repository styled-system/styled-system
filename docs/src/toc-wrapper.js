import React from 'react'
import { Box, Styled } from './system'

const headings = ['h2', 'h3']
const getLinks = children =>
  React.Children.toArray(children).reduce((a, child) => {
    if (!headings.includes(child.props.mdxType)) return a
    const item = {
      text: child.props.children,
      href: '#' + child.props.id,
    }
    const level = headings.indexOf(child.props.mdxType)
    if (level === 0) {
      return [...a, item]
    }
    const previous = a[a.length - 1]
    if (Array.isArray(previous)) {
      return [...a.slice(0, a.length - 1), [...previous, item]]
    }
    return [...a, [item]]
  }, [])

const List = ({ links }) => (
  <Styled.ul
    pl={2}
    css={{
      listStyle: 'none',
    }}
  >
    {links.map((link, i) =>
      Array.isArray(link) ? (
        <List key={i} links={link} />
      ) : (
        <Styled.li key={link.href}>
          <Styled.a href={link.href}>{link.text}</Styled.a>
        </Styled.li>
      )
    )}
  </Styled.ul>
)

const TOC = ({ links }) => (
  <Box
    px={2}
    ml={2}
    fontSize={1}
    css={{
      float: 'right',
    }}
  >
    <List links={links} />
  </Box>
)

export default props => {
  if (!props.toc) return <>{props.children}</>

  const links = getLinks(props.children)
  return (
    <>
      <TOC links={links} />
      {props.children}
    </>
  )
}
