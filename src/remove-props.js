import * as propTypes from './prop-types'

const blacklist = Object.keys(propTypes)
  .reduce((a, key) => [
    ...a,
    ...Object.keys(propTypes[key])
  ], [])

export default props => {
  const next = {}

  for (let key in props) {
    if (blacklist.includes(key)) continue
    next[key] = props[key]
  }

  return next
}
