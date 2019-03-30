import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import isAbsoluteURL from 'is-absolute-url'
import { Box } from './system'

const isHash = str => /^#/.test(str)

export const Link = ({ href, ...props }) => (isHash(href) || isAbsoluteURL(href))
  ? <Box as='a' {...props} href={href} />
  : <Box as={GatsbyLink} {...props} to={href} />

export default Link

