import { get, px } from './util'

export default (pseudoclass, prop) => (keys = {}) => props => {
  const style = props[prop || pseudoclass]
  const numberToPx = keys.numberToPx || {}
  for (let key in style) {
    const toPx = numberToPx[key]

    if (!keys[key] && !toPx) continue
    const themeKey = [ keys[key], style[key] ].join('.')
    style[key] = get(props.theme, themeKey, style[key])

    if (toPx) style[key] = px(style[key])
  }

  return {
    ['&:' + pseudoclass]: style
  }
}
