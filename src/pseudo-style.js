const { get } = require('dot-prop')

module.exports = pseudoclass => (keys = {}) => props => {
  const style = props[pseudoclass]
  for (let key in style) {
    if (!keys[key]) continue
    const themeKey = [ keys[key], style[key] ].join('.')
    style[key] = get(props.theme, themeKey, style[key])
  }

  return {
    ['&:' + pseudoclass]: style
  }
}
