import React from 'react'
import { styles, util } from 'styled-system'
import styled from 'styled-components'

const css = props => props.css

const omit = (obj, blacklist) => {
  const next = {}
  for (let key in obj) {
    if (blacklist.indexOf(key) > -1) continue
    next[key] = obj[key]
  }
  return next
}

const styleKeys = Object.keys(styles)
  .filter(key => typeof styles[key] === 'function')

const propNames = styleKeys
  .reduce((a, key) => {
    const names = Object.keys(styles[key].propTypes)
    return [ ...a, ...names ]
  }, [])

// private blacklist
const _blacklist = [
  'css',
  'is',
  'tag',
  'extend',
  ...propNames
]

const tag = React.forwardRef(({
  blacklist = [],
  ...props
}, ref) => {
  const Base = props.extend || props.tag || props.is || 'div'
  const next = omit(props, typeof Base === 'string' ? [
    ..._blacklist,
    ...blacklist
  ] : [ 'extend' ])
  return React.createElement(Base, { ...next, ref })
})

const getPropTypes = funcs => funcs
  .filter(fn => typeof fn === 'function' && typeof fn.propTypes === 'object')
  .reduce((a, fn) => ({
    ...a,
    ...fn.propTypes
  }), {})

const system = (props = {}, ...keysOrStyles) => {
  const funcs = keysOrStyles.map(key => styles[key] || key)
  const propTypes = getPropTypes(funcs)

  const Component = styled(tag)([], ...funcs, css)

  const baseProps = util.get(props, 'extend.defaultProps') || {}

  Component.defaultProps = {
    ...baseProps,
    ...props
  }

  Component.propTypes = getPropTypes(funcs)
  Component.systemComponent = true

  return Component
}

export default system
