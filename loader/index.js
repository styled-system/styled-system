const { getOptions } = require('loader-utils')

const stringify = str => `'${str}'`

const createModule = ({
  name,
  type,
  props = {},
  css,
  styles = []
}) => (`
export const ${name} = sys(
  ${JSON.stringify(
    Object.assign({}, props, type ? { is: type } : null),
    null, 2)},
  ${css ? `${stringify(css)},` : ''}
  ${styles.map(stringify).join(',\n')}
)
${name}.displayName = '${name}'
`)

module.exports = function (src) {
  const callback = this.async()
  const opts = getOptions(this)

  const config = JSON.parse(src)

  const names = config.components.map(c => c.name)
  const modules = config.components.map(createModule)

  const code = `
  import sys from 'system-components'

  ${modules.join('\n\n')}

  export default {
    ${names.join(',\n')}
  }`

  callback(null, code)
}
