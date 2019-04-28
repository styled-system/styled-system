import { get } from './util'

export const variant = ({ key, prop = 'variant' }) => props =>
  get(props.theme, [key, props[prop]].join('.')) || null
