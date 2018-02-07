import propTypes from './prop-types'

const blacklist = Object.keys(propTypes)
  .reduce((a, key) => [
    ...a,
    ...Object.keys(propTypes[key])
  ], [])

export default props => {
  if (process.env.NODE_ENV === 'development') {
    console.log('remove-props is deprecated and will be removed in v3 of styled-system')
  }

  const next = {}

  for (let key in props) {
    if (blacklist.includes(key)) continue
    next[key] = props[key]
  }

  return next
}
