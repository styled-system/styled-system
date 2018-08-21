import * as styles from './styles'
import { merge } from './util'

const omit = (obj, blacklist) => {
  const next = {}
  for (let key in obj) {
    if (blacklist.indexOf(key) > -1) continue
    next[key] = obj[key]
  }
  return next
}

const funcs = Object.keys(styles)
  .map(key => styles[key])
  .filter(fn => typeof fn === 'function')

const blacklist = funcs.reduce((a, fn) => [
  ...a,
  ...Object.keys(fn.propTypes || {})
], [ 'theme' ])


export default props => funcs
  .map(fn => fn(props))
  .reduce(merge, omit(props, blacklist))
