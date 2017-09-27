const style = require('./style')

module.exports = props => {
  const width = style({
    prop: 'borderWidth'
  })(props)
  const borderStyle = props.borderWidth ? { borderStyle: 'solid' } : null
  // todo: directional borders

  return Object.assign({}, width, borderStyle)
}
