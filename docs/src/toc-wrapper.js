import React from 'react'

const headings = ['h2', 'h3']
const getLinks = children => React.Children.toArray(children)
  .reduce((a, child) => {
    if (!headings.includes(child.props.mdxType)) return a
    return [
      ...a,
      {
        level: headings.indexOf(child.props.mdxType),
        text: child.props.children,
        href: '#' + child.props.id
      }
    ]
  }, [])


export default props => {
  const links = getLinks(props.children)
  // console.log(links)
  return (
    <>
      {props.children}
    </>
  )
}
