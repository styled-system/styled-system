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

    return (
      <Provider theme={theme}>
        {layout === false ? children : (
          <SidebarLayout
            {...this.props}
            routes={nav}
            logo={<Logo size={32} />}
          />
        )}
        <Scripts />
      </Provider>
    )
  }
}

const Scripts = props =>
  <script
    dangerouslySetInnerHTML={{
      __html: `
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-4603832-6', 'auto'); ga('send', 'pageview');`
    }}
  />
