import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import isAbsoluteURL from 'is-absolute-url'
import { Box } from './system'

export const Link = ({ href, ...props }) => isAbsoluteURL(href)
  ? <Box as='a' {...props} href={href} />
  : <Box as={GatsbyLink} {...props} to={href} />

export default Link

