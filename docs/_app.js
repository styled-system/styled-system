import React from 'react'
import { Provider, theme as rebassTheme } from 'rebass'
import { SidebarLayout } from '@compositor/x0/components'
import { description } from '../package.json'
import Logo from './Logo'

const theme = {
  ...rebassTheme,
  space: [
    0, 4, 8, 16, 32, 64, 128, 256
  ]
}

const navOrder = [
  'Home',
  'getting-started',
  'responsive-styles',
  'how-it-works',
  'api',
  'table',
  'custom-props',
  'troubleshooting',
  'Logo',
]

const createNav = routes => [
  ...[...routes]
    .map(route => {
      if (route.name !== 'index') return route
      return {
        ...route,
        name: 'Home'
      }
    })
    .sort((a, b) => {
      const ai = navOrder.indexOf(a.name)
      const bi = navOrder.indexOf(b.name)
      if (ai < 0) return 1
      return ai - bi
    }),
  {
    key: 'github',
    name: 'GitHub',
    path: 'https://github.com/jxnblk/styled-system',
  },
  {
    key: 'jxnblk',
    name: 'Made by Jxnblk',
    path: 'https://jxnblk.com',
  },
]

export default class extends React.Component {
  static defaultProps = {
    title: 'Styled System',
  }

  render () {
    const { route, routes, children } = this.props
    const { layout } = (route && route.props) || {}
    const nav = createNav(routes)

    return (
      <Provider theme={theme}>
        {layout === false ? children : (
          <SidebarLayout
            {...this.props}
            routes={nav}
            logo={<Logo size={32} />}
          />
        )}
      </Provider>
    )

    if (layout === false) return children
    return <SidebarLayout {...this.props} />

    /*
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
    */
  }
}
