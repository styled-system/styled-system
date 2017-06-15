const styled = require('styled-components').default
const fontSize = require('./font-size')
const width = require('./width')
const space = require('./space')

module.exports = Component => {
  const SystemComponent = styled(Component)`
    ${fontSize}
    ${width}
    ${space}
  `

  return SystemComponent
}
