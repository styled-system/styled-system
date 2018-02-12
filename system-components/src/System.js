import React from 'react'
import system from 'styled-system'

const funcNames = Object.keys(system)
const unique = arr => [...new Set(arr)]
const isPOJO = n => typeof n === 'object' && n !== null && !Array.isArray(n)

const dict = Object.keys(system.propTypes)
  .map(key => ({
    key,
    propNames: Object.keys(system.propTypes[key])
  }))
  .reduce((acc, b) => {
    const vals = b.propNames.reduce((a, name) => ({
      ...a,
      [name]: b.key
    }), {})
    return { ...acc, ...vals }
  }, {})

const getPropKeys = defaultProps => Object.keys(defaultProps || {})
  .map(key => dict[key])
  .filter(key => !!key)

const getFuncs = keys => keys
  .map(f => system[f] || f)
  .reduce((a, f) => Array.isArray(f) ? [ ...a, ...f ] : [ ...a, f ], [])

const getPropTypes = keys => keys
  .filter(key => typeof key === 'string')
  .map(key => system.propTypes[key] || {})
  .reduce((a, propType) => ({ ...a, ...propType }), {})

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
      ...props
    } = this.props
    const attr = omit(props, blacklist)

    return React.createElement(is, {
      ref: innerRef,
      ...attr
    })
  }
}

Tag.defaultProps = {
  is: 'div',
  blacklist: []
}

// Trick styled-components into passing innerRef
Tag.styledComponentId = 'lol'

class System {
  constructor (opts) {
    const {
      createComponent, // c(type)(...args)
    } = opts

    this.create = (...args) => {
      const [ first, ...rest ] = args

      const defaultProps = isPOJO(first) ? first : null
      const propKeys = getPropKeys(defaultProps)
      const funcsOrKeys = defaultProps ? rest : args
      const combined = unique([ ...propKeys, ...funcsOrKeys ])
      const funcs = getFuncs(combined)
      const propTypes = getPropTypes(combined)

      const div = props => React.createElement(Tag, props)
      div.defaultProps = {
        blacklist: Object.keys(propTypes)
      }

      const Component = createComponent(div)(...funcs)

      Component.defaultProps = defaultProps
      Component.propTypes = propTypes

      return Component
    }

    return this.create
  }
}

export default System
