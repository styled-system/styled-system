import React from 'react'
import { Provider } from 'rebass'
import { Head } from 'ok-docs'
import theme from './_theme'

export default class extends React.Component {
  static defaultProps = {
    theme,
    title: 'Styled System',
    navOrder: [
      'Home',
      'getting-started',
      'responsive-styles',
      'how-it-works',
      'API',
      'table',
      'custom-props',
      'troubleshooting',
      'Logo',
    ]
  }

  render () {
    const { children } = this.props
    return (
      <React.Fragment>
        <Head>
          <title>Styled System</title>
        </Head>
        {children}
      </React.Fragment>
    )
  }
}
