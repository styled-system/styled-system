import React, { useContext } from 'react'
import { EditProvider, EditContext, ThemeControls } from '@styled-system/edit'
import { Global } from '@emotion/core'
import { css, ThemeProvider, Styled } from 'theme-ui'
import GettingStarted from '../../getting-started.md'

const WrappedProvider = props => {
  const context = useContext(EditContext)
  return (
    <ThemeProvider theme={context.state}>
      <Global
        styles={theme =>
          css({
            body: {
              fontFamily: 'body',
              color: 'text',
              bg: 'background',
            },
          })(theme)
        }
      />
      {props.children}
    </ThemeProvider>
  )
}

export default props => (
  <EditProvider ignore={['styles', 'modes', 'layout']}>
    <ThemeControls
      css={css({
        float: 'right',
        ml: 2,
        bg: 'lightgray',
        maxWidth: 256,
        maxHeight: 'calc(100vh - 96px)',
      })}
    />
    <Styled.h1>Demo</Styled.h1>
    <Styled.p>
      This is a demonstration of some of the theming capabilities in Styled
      System. Use the controls to the right to adjust this page’s theme in
      real-time.
    </Styled.p>
    <Styled.p>
      <em>Demo content below</em>
    </Styled.p>
    <Styled.hr />
    <WrappedProvider>
      <GettingStarted />
    </WrappedProvider>
  </EditProvider>
)
