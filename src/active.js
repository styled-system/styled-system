const pseudoStyle = require('./pseudo-style')
module.exports = pseudoStyle('active')({
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  boxShadow: 'shadows'
})
