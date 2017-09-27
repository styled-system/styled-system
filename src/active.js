const pseudoStyle = require('./pseudo-style')
module.exports = pseudoStyle('active', 'activeStyle')({
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  boxShadow: 'shadows'
})
