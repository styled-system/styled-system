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

import * as themes from './themes'
export { reset } from './reset'
export { themes }

export const tagNames = [
  'body',
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

export const typographyStyles = compose(
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  color
)

const getScopedSelector = key => {
  return key.split(',').map(k => '& ' + key).join(', ')
}

export const typography = props => {
  // handle emotion's Global and css props
  const theme = props.theme || props
  theme.typography = theme.typography || {}
  const styles = {}
  const scoped = theme.typography.scoped
  const elements = pick(theme.typography, tagNames)
  for (const key in elements) {
    const el = elements[key]
    const rules = typographyStyles({ theme, ...el })
    // flatten & merge??
    if (scoped && key === 'body') {
      styles['&'] = [ el, ...rules ]
      continue
    }
    const selector = scoped ? getScopedSelector(key) : key
    styles[selector] = [ el, ...rules ]
  }

  return styles
}

export default typography
