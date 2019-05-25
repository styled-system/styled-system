import assign from 'object-assign'
import {
  createStyleFunction,
  createParser,
} from './core'

export const style = ({
  prop,
  cssProperty,
  alias,
  key,
  transformValue,
  scale,
  // new api
  properties,
}) => {
  const config = {}
  config[prop] = createStyleFunction({
    properties,
    property: cssProperty || prop,
    scale: key,
    defaultScale: scale,
    transform: transformValue,
  })
  if (alias) config[alias] = config[prop]
  const parse = createParser(config)

  return parse
}

export const compose = (...parsers) => {
  let config = {}
  parsers.forEach(parser => {
    assign(config, parser.config)
  })
  const parser = createParser(config)

  return parser
}
