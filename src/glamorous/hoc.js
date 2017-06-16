const glamorous = require('glamorous')
const fontSize = require('../font-size')
const width = require('../width')
const space = require('../space')

module.exports = Component => {
  const SystemComponent = glamorous(Component)(fontSize, width, space)
  return SystemComponent
}
