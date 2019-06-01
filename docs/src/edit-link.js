import React from 'react'
import { Location } from '@reach/router'
import { css } from 'theme-ui'

const base = 'https://github.com/styled-system/styled-system/edit/master/docs'

const getHREF = location => {
  if (location.pathname === '/') return base + '/getting-started.md'
  return base + location.pathname + '.md'
}

export default () => (
  <Location>
    {({ location }) => (
      <a
        href={getHREF(location)}
        css={css({
          display: 'inline-block',
          color: 'inherit',
          fontSize: 1,
          my: 4,
        })}
      >
        Edit this page on GitHub
      </a>
    )}
  </Location>
)
