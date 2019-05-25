import { get } from './core'

// move to separate package
export const themeGet = (path, fallback = null) => props =>
  get(props.theme, path, fallback)
