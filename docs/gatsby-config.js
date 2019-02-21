module.exports = {
  siteMetadata: {
    title: 'Styled System',
    description: 'Style props for rapid UI development',
    author: '@jxnblk',
    install: 'npm i styled-system',
    github: 'https://github.com/jxnblk/styled-system',
    navigation: [
    //   { text: 'Home', href: '/' },
    //   { text: 'Getting Started', href: '/getting-started' },
    ],
    quotes: [
      {
        text: 'This is honestly my favourite way to build UI components right now',
        source: 'Varun Vachhar',
        href: 'https://varun.ca/styled-system/'
      },
      {
text: 'The future of css-in-js is going to look something like styled-system with its responsive values.',
        source: 'Kye Hohenberger',
        href: 'https://mobile.twitter.com/tkh44/status/90547404372941619'
      },
      {
        text: 'Coming from @tachyons_css, the styled-system utilities from @jxnblk is the missing link I’ve been looking for.',
        source: 'Nathan Young',
        href: 'https://mobile.twitter.com/nathanyoung/status/891353221880360960'
      },
      {
        text: 'If you make websites/apps with React check out Styled System if you haven’t already. You will be amazed at how much faster you can build.',

        source: 'David Yeiser',
        href: 'https://mobile.twitter.com/davidyeiser/status/965920740582285312'
      },
      {
text: 'If you like Tachyons you will love styled-system. If you don’t like Tachyons, you will love styled-system.',
        source: 'Adam Morse',
        href: 'https://mobile.twitter.com/mrmrs_/status/913189805055401984'
      },
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
  __experimentalThemes: [
    {
      resolve: '@rebass/gatsby-theme-docs',
      options: {
        navigation: []
      }
    }
  ],
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-4603832-13'
      }
    },
  ],
}
