import { get } from '@styled-system/core'

export const themeGet = (path, fallback = null) => props =>
  get(props.theme, path, fallback)
export default themeGet
