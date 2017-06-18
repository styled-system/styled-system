const styled = require('styled-components').default
const fontSize = require('../font-size')
const width = require('../width')
const space = require('../space')
const color = require('../color')

module.exports = Component => {
  const SystemComponent = styled(Component)`
    ${fontSize}
    ${width}
    ${space}
    ${color}
  `

  return SystemComponent
}
