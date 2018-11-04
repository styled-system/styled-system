import React from 'react'
import { styles } from 'styled-system'
import tags from 'html-tags'

const allPropTypes = Object.keys(styles)
  .filter(key => typeof styles[key] === 'function')
  .reduce((a, key) => Object.assign(a, styles[key].propTypes), {})

const blacklist = [ ...Object.keys(allPropTypes), 'theme' ]

export const omit = (obj, keys) => {
  const next = {}
  for (let key in obj) {
    if (keys.indexOf(key) > -1) continue
    next[key] = obj[key]
  }
  return next
}

export const Tag = React.forwardRef(({
  is: Tag = 'div',
  blacklist = [],
  ...props
}, ref) => React.createElement(Tag, {
  ref,
  ...omit(props, blacklist)
}))

Tag.displayName = 'Clean.div'

Tag.defaultProps = {
  blacklist
}

tags.forEach(tag => {
  Tag[tag] = React.forwardRef((props, ref) => React.createElement(Tag, { ref, is: tag, ...props }))
  Tag[tag].displayName = 'Clean.' + tag
})

export default Tag
