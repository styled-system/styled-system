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
    features: [
      'Add style props that pick up values from a global theme',
      'Quickly set responsive font-size, margin, padding, width, and more with props',
      'Inspired by constraint-based design system principles',
      'Use a type scale for consistent typography',
      'Use a spacing scale for margin, padding, and layout consistency',
      'Works with any color palette',
      'Works with most CSS-in-JS libraries, including styled-components and emotion',
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
