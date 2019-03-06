import React from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import {
  compose,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  color,
  maxWidth,
} from 'styled-system'
import pick from 'lodash.pick'
import flatten from 'lodash.flattendeep'
import merge from 'lodash.merge'

export const tagNames = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'a',
  'p',
  'ol',
  'ul',
  'dl',
  'dd',
  'li',
  'blockquote',
  'hr',
  'img',
  'pre',
  'code',
  'samp',
  'kbd',
  'table',
  'tr',
  'th',
  'td',
  'b',
  'strong',
  'em',
  'i',
  'abbr',
]

const defaultStyles = {
  // TODO: add some generally useful resets
  img: {
    maxWidth: '100%',
    height: 'auto',
  }
}

const typography = compose(
  // props => props,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  color
)

const elementStyles = ({
  theme,
  ...props
}) => {
  const styles = {}
  const elements = pick(props, tagNames)
  for (const key in elements) {
    const el = elements[key]
    const rules = typography({ theme, ...el })
    // seems like emotion handles this??
    // const flat = flatten(rules)
    // const style = merge(el, ...flat)

    styles[`& ${key}`] = [ el, ...rules ]
  }
  return styles
}

const Root = styled.div(
  defaultStyles,
  typography,
  maxWidth,
  elementStyles,
  // handle other/nested CSS
  props => props.css
)

// may not need the wrapper
export const Typography = ({ html, ...props }) =>
  <>
    {html && <Global styles={{ html }} />}
    <Root {...props} />
  </>

export default Typography
