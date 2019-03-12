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

// only parses specific typographic elements
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

// todo: add some generally useful resets
export const defaultStyles = {
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
  'h1 a, h2 a, h3 a, h4 a, h5 a, h6 a': {
    color: 'inherit',
  },
}

export const typography = compose(
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  color
)

export const globalStyles = (themeOrProps) => {
  const theme = themeOrProps.theme || themeOrProps
  console.log(theme)
  return {}
}

export const elementStyles = ({
  theme,
  ...props
}) => {
  const styles = {}
  const elements = pick(props, tagNames)
  for (const key in elements) {
    const el = elements[key]
    const rules = typography({ theme, ...el })
    styles[`& ${key}`] = [ el, ...rules ]
  }
  return styles
}

export default elementStyles
