// Baskerville Typography Theme
import React from 'react'
import Typography from './index'
import merge from 'lodash.merge'
import { baskerville } from './themes'

export const Baskerville = props =>
  <Typography
    {...merge(baskerville, props)}
  />

Baskerville.defaultProps = {
  theme: {
    colors: {
      link: 'tomato',
      muted: '#f6f6fc',
    },
  },
}

export default Baskerville
