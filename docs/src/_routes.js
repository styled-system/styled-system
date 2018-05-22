const path = require('path')

const req = require.context('..', false, /\.md$/)

const docs = req.keys().map(key => {
  const name = path.basename(key, path.extname(key))
  return {
    key,
    name,
    path: '/' + name,
    require: () => req(key).default
  }
})

const pages = [
  'getting-started',
  'responsive-styles',
  'how-it-works',
  'api',
  'table',
  'custom-props',
]

const routes = [
  {
    key: '/',
    path: '/',
    name: 'styled-system',
  },
  ...docs
    .filter(doc => pages.includes(doc.name))
    .sort((a, b) =>
      pages.indexOf(a.name) - pages.indexOf(b.name)
    )
]

export default routes
