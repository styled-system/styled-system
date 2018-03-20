import React from 'react'
import remark from 'remark'
import remarkSlug from 'remark-slug'
import remarkReact from 'remark-react'
import {
  Text,
  Heading,
  Pre,
  Link,
  Code,
  UL,
  Divider,
  Table,
} from './ui'

const removeIDPrefix = str => str.replace(/^user\-content\-/, '')
const heading = (type, styleProps) => props =>
  <Heading
    is={type}
    {...styleProps}
    {...props}
    id={removeIDPrefix(props.id)}>
    <Link
      href={'#' + removeIDPrefix(props.id)}
      color="inherit">
      {props.children}
    </Link>
  </Heading>

const remarkReactComponents = {
  h1: heading('h2', { fontSize: 6, lineHeight: 4/3, mt: 5, mb: 2 }),
  h2: heading('h2', { fontSize: 6, lineHeight: 4/3, mt: 5, mb: 2 }),
  h3: heading('h3', { fontSize: 5, lineHeight: 1.5, mt: 4, mb: 2 }),
  h4: heading('h4', { fontSize: 4, lineHeight: 4/3, mt: 4, mb: 2 }),
  h5: heading('h5', { fontSize: 4, lineHeight: 4/3, mt: 3, mb: 2 }),
  h6: heading('h6', { fontSize: 4, lineHeight: 4/3, mt: 3, mb: 2 }),
  p: props =>
    <Text
      {...props}
      is='p'
      fontSize={3}
      lineHeight={1.6}
      mt={0}
      mb={3}
    />,
  pre: props =>
    <Pre
      {...props}
      fontSize={1}
      mt={0}
      mb={4}
      color='blue'
      bg='gray'
    />,
  code: props => <Code {...props} color='blue' />,
  a: props => <Link {...props} />,
  ul: props => <UL fontSize={3} {...props} />,
  blockquote: props =>
    <Text
      {...props}
      is='blockquote'
      mx={0}
      my={4}
      px={2}
      fontWeight={700}
      fontSize={3}
    />,
  hr: props => <Divider {...props} />,
  table: props => <Table {...props} />,
}

const getElement = ({ children }) => {
  // const remarkReactComponents = {}
  const text = React.Children.toArray(children)
    .filter(child => typeof child === 'string')
    .join('\n')
  const element = remark()
    .use(remarkSlug)
    .use(remarkReact, {
      remarkReactComponents
    })
    .processSync(text)
    .contents
  return element
}

class Markdown extends React.Component {
  render () {
    const element = getElement(this.props)
    return element
  }
}

export default Markdown
