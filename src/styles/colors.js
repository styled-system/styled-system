import { compose } from '../style'

import { backgroundColor } from './backgrounds'
import { textColor } from './typography'

export const color = compose(
  backgroundColor,
  textColor
)
