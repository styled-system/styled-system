import React from 'react'
import { propTypes } from 'styled-system'
import tags from 'html-tags'

const allPropTypes = Object.keys(propTypes)
  .reduce((a, key) => Object.assign(a, propTypes[key]), {})

const blacklist = Object.keys(allPropTypes)

export const omit = (obj, keys) => {
  const next = {}
  for (let key in obj) {
    if (keys.indexOf(key) > -1) continue
    next[key] = obj[key]
  }
  return next
}

export class Tag extends React.Component {
  render () {
    const {
      innerRef,
      is,
      blacklist,
      theme,
      ...props
    } = this.props
    const attr = omit(props, blacklist)

    return React.createElement(is, {
      ref: innerRef,
      ...attr
    })
  }
}

Tag.displayName = 'Clean.div'

Tag.defaultProps = {
  is: 'div',
  blacklist
}

// Trick styled-components into passing innerRef
Tag.styledComponentId = 'lol'

tags.forEach(tag => {
  Tag[tag] = props => React.createElement(Tag, { is: tag, ...props })
  Tag[tag].displayName = 'Clean.' + tag
})

export default Tag
