import { compose } from '../style'
import { backgrounds } from './backgrounds'
import { basics } from './basics'
import { borders } from './borders'
import { dimensions } from './dimensions'
import { flexboxes } from './flexboxes'
import { grids } from './grids'
import { positions } from './positions'
import { space } from './space'
import { typography } from './typography'

export * from './backgrounds'
export * from './basics'
export * from './borders'
export * from './colors'
export * from './dimensions'
export * from './flexboxes'
export * from './grids'
export * from './positions'
export * from './space'
export * from './typography'

export const system = compose(
  backgrounds,
  basics,
  borders,
  dimensions,
  flexboxes,
  grids,
  positions,
  space,
  typography
)
