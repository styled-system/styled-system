import React from 'react'
import { Provider } from 'rebass'
import { Head } from 'ok-docs'
import theme from './_theme'

export default class extends React.Component {
  static defaultProps = {
    title: 'Styled System',
    navOrder: [
      'Home',
      'getting-started',
      'responsive-styles',
      'how-it-works',
      'api',
      'table',
      'custom-props',
    ]
  }

  render () {
    const { children } = this.props
    return (
      <Provider theme={theme}>
        <Head>
          <title>Styled System</title>
        </Head>
        {children}
      </Provider>
    )
  }
}
