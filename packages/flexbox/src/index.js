import { system, compose } from '@styled-system/core'
import box from '@styled-system/box'

const config = {
  flexWrap: true,
  flexDirection: true,
  // item
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  order: true,
}

const flex = system(config)
export const flexbox = compose(flex, box)

export default flexbox
