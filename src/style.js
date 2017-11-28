import { get, is, px } from './util'

export default ({
  key,          // key for theme object
  prop,         // react prop
  cssProperty,  // css property
  numberToPx
}) => props => {
  const n = props[prop]
  if (!is(n)) return null
  const val = get(props, [ 'theme', key, n ].join('.'), n)
  const value = numberToPx ? px(val) : val

  return { [cssProperty || prop]: value }
}
