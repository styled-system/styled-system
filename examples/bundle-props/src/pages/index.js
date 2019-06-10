import React from 'react'
import { ThemeContext } from '@emotion/core'
import styled from '@emotion/styled'
import { get, createParser } from '@styled-system/core'

const getSize = (n, scale) => get(scale, n)
getSize.scale = 'typeSizes'

const Box = styled('div')(
  createParser({
    size: getSize
  })
)

const theme = {
  typeSizes: {
    small: {
      fontSize: 16,
      lineHeight: 1.5,
    },
    medium: {
      fontSize: 24,
      lineHeight: 1.25,
    },
  }
}

export default props =>
  <ThemeContext.Provider value={theme}>
    <div>
      <Box size={[ 'small', 'medium' ]}>
        Bundle-style variants
      </Box>
    </div>
  </ThemeContext.Provider>
