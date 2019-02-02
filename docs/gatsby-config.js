module.exports = {
  siteMetadata: {
    title: 'Styled System',
    description: 'Style props for rapid UI development',
    author: '@jxnblk',
    install: 'npm i styled-system',
    github: 'https://github.com/jxnblk/styled-system',
    navigation: [
      { text: 'Home', href: '/' },
      { text: 'Getting Started', href: '/getting-started' },
    ],
    quotes: [
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-4603832-13'
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-layout',
    { resolve: 'gatsby-mdx',
      options: {
        extensions: [ '.mdx', '.md' ],
        // defaultLayouts: {
        //   default: require.resolve('./src/layouts/sidebar.js')
        // }
      }
    }
  ],
}
