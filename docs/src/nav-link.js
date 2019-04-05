import React from 'react'
import Link from './link'
import { css } from './system'

export default props =>
  <Link
    {...props}
    css={theme => css({
      display: 'block',
      fontWeight: 'bold',
      textDecoration: 'none',
      color: 'inherit',
      px: 3,
      py: 2,
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      }
    })({ ...props, theme })}
  />
