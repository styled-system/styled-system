import React from 'react'
import { styles } from 'styled-system'
import tag from 'clean-tag'

const funcNames = Object.keys(styles)
const unique = arr => [...new Set(arr)]
const isPOJO = n => typeof n === 'object' && n !== null && !Array.isArray(n)

const dict = Object.keys(styles)
  .map(key => ({
    key,
    propNames: Object.keys(styles[key].propTypes || {})
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
  .map(f => styles[f] || f)
  .reduce((a, f) => Array.isArray(f) ? [ ...a, ...f ] : [ ...a, f ], [])

const getPropTypes = keys => keys
  .filter(key => typeof key === 'string')
  .filter(key => typeof styles[key] === 'function')
  .map(key => styles[key].propTypes || {})
  .reduce((a, propType) => ({ ...a, ...propType }), {})

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

      const blacklist = Object.keys(propTypes)
      if (defaultProps && Array.isArray(defaultProps.blacklist)) {
        blacklist.push(...defaultProps.blacklist)
        delete defaultProps.blacklist
      }

      const div = props => React.createElement(tag, props)
      div.defaultProps = { blacklist }
      div.styledComponentId = 'lol' // Trick styled-components into passing innerRef

      const Component = createComponent(div)(...funcs)

      Component.defaultProps = defaultProps
      Component.propTypes = propTypes

      return Component
    }

    return this.create
  }
}

export default System
