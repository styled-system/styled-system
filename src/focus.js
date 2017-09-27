const pseudoStyle = require('./pseudo-style')
module.exports = pseudoStyle('focus')({
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  boxShadow: 'shadows'
})
