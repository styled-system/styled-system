import React from 'react'
import Link from '../link'
import { Box, css } from './index'

export default props =>
  <Link
    {...props}
    css={css({
      display: 'inline-block',
      textDecoration: 'none',
      fontWeight: 'bold',
      px: 3,
      py: 3,
      borderRadius: 6,
      color: 'background',
      bg: 'text',
      '&:hover': {
        bg: 'primary',
      }
    })}
  />
