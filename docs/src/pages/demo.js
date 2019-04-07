import React, { useContext } from 'react'
import { EditProvider, EditContext, ThemeControls } from '@styled-system/edit'
import { Global } from '@emotion/core'
import Layout from '../layout'
import { css, SystemProvider, Styled } from '../system'
import GettingStarted from '../../getting-started.md'

const WrappedProvider = props => {
  const context = useContext(EditContext)
  return (
    <SystemProvider
      theme={context.state}>
      <Global
        styles={theme => css({
          body: {
            fontFamily: 'body',
            color: 'text',
            bg: 'background',
          }
        })(theme)}
      />
      {props.children}
    </SystemProvider>
  )
}

export default props =>
  <EditProvider
    ignore={[
      'styles',
      'modes',
      'layout',
    ]}>
      <Layout>
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
          This is a demonstration of some of the theming capabilities in Styled System.
          Use the controls to the right to adjust this page's theme in real-time.
        </Styled.p>
        <Styled.p>
          <em>Demo content below</em>
        </Styled.p>
        <Styled.hr />
        <WrappedProvider>
          <GettingStarted />
        </WrappedProvider>
      </Layout>
  </EditProvider>
