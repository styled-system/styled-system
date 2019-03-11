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
import {
  elementStyles,
  typography,
  defaultStyles
} from './element-styles'

const rootTypography = ({ theme, root }) => typography({ theme, ...root })
const Root = styled.div(
  defaultStyles,
  rootTypography,
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
