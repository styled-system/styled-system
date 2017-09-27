const style = require('./style')

module.exports = props => {
  const width = style({
    prop: 'borderWidth'
  })(props)
  const borderStyle = { borderStyle: 'solid' }
  // todo: directional borders

  return props.borderWidth ? Object.assign({}, width, borderStyle) : null
}
