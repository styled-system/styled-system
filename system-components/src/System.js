import React from 'react'
import { styles, util } from 'styled-system'

const funcNames = Object.keys(styles)
const unique = arr => {
  const seen = {};
  return arr.concat().filter(item => seen.hasOwnProperty(item) ? false : (seen[item] = true));
}
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

const css = props => props.css

const omit = (obj, blacklist) => {
  const next = {}
  for (let key in obj) {
    if (blacklist.indexOf(key) > -1) continue
    next[key] = obj[key]
  }
  return next
}

const tag = React.forwardRef(({
  is: Tag = 'div',
  blacklist = [],
  ...props
}, ref) =>
  <Tag
    ref={ref}
    {...omit(props, blacklist)}
  />
)

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

      const blacklist = [
        'css',
        ...Object.keys(propTypes),
        ...(defaultProps ? defaultProps.blacklist || [] : [])
      ]

      const Base = defaultProps && typeof defaultProps.is === 'function' ? defaultProps.is : tag

      const Component = createComponent(Base)(css, ...funcs)

      const baseProps = util.get(defaultProps, 'is.defaultProps') || {}
      Component.defaultProps = {
        ...baseProps,
        ...defaultProps,
        blacklist: [
          ...blacklist,
          ...(baseProps.blacklist || [])
        ],
      }
      Component.propTypes = propTypes
      Component.systemComponent = true

      return Component
    }

    return this.create
  }
}

export default System
