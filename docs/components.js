import React from 'react'
import { Head } from 'mdx-go'
import {
  Layout,
  NavLinks,
  NavLink,
  Pagination,
  ScrollTop,
  StyleProvider,
} from 'mdx-go/styled-components'
import { Box } from 'rebass'
import sortBy from 'lodash.sortby'
import { description } from '../package.json'
import Logo from './Logo'

const nav = [
  'Home',
  'Getting Started',
  'Responsive Styles',
  'How it Works',
  'API',
  'Table',
  'Custom Props',
]

const filter = route => nav.indexOf(route.name) > -1

export const Root = props => {
  const { routes, children } = props
  const fullWidth = ['/'].includes(props.location.pathname)

  return (
    <React.Fragment>
      <Head>
        <title>Styled System</title>
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@jxnblk' />
        <meta name='twitter:image' content='https://jxnblk.com/styled-system/logo.png' />
        <meta name='twitter:title' content='Styled System' />
        <meta name='twitter:description' content='Design system utilities for styled-components, glamorous, and other CSS-in-JS libraries' />
        <meta name='description' content='Design system utilities for styled-components, glamorous, and other CSS-in-JS libraries' />
      </Head>
      <StyleProvider>
        {fullWidth ? children : (
          <Layout>
            <Layout.MenuToggle m={2} />
            <Layout.Sidebar>
              <Logo size={64} />
              <NavLinks
                {...props}
                order={nav}
                filter={filter}
              />
              <Box my={3} />
              <NavLink
                href='https://github.com/jxnblk/styled-system'
                children='GitHub'
              />
              <NavLink
                href='https://jxnblk.com'
                children='Made by Jxnblk'
              />
            </Layout.Sidebar>
            <Layout.Main>
              {props.children}
              <Pagination
                {...props}
                order={nav}
                filter={filter}
              />
            </Layout.Main>
          </Layout>
        )}
      </StyleProvider>
      <ScrollTop />
      <Scripts />
    </React.Fragment>
  )
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
