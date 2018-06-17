import React from 'react'
import { Provider } from 'rebass'
import { Head } from 'ok-docs'
import theme from './_theme'
import { description } from '../package.json'

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
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:site' content='@jxnblk' />
          <meta name='twitter:image' content='https://jxnblk.com/styled-system/logo.png' />
          <meta name='twitter:title' content='Styled System' />
          <meta name='twitter:description' content={description} />
        </Head>
        {children}
      </React.Fragment>
    )
  }
}
