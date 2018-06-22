import React from 'react'
import { Provider, theme as rebassTheme } from 'rebass'
import { SidebarLayout } from '@compositor/x0/components'
import sortBy from 'lodash.sortby'
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
  'troubleshooting'
]

const createNav = routes => [
  ...sortBy([...routes]
    .map(route => {
      if (route.name !== 'index') return route
      return {
        ...route,
        name: 'Home'
      }
    }), a => {
      const index = navOrder.indexOf(a.name)
      return index < 0 ? Infinity : index
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
    console.log(nav)

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
  }
}
