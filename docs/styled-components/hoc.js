const styled = require('styled-components').default
const fontSize = require('../../dist/font-size')
const width = require('../../dist/width')
const space = require('../../dist/space')
const color = require('../../dist/color')

module.exports = Component => {
  const SystemComponent = styled(Component)`
    ${fontSize}
    ${width}
    ${space}
    ${color}
  `

  return SystemComponent
}
