import React from 'react'
import {
  Styleguide,
  metadata as getMetadata
} from '@compositor/styleguide'
import * as ui from './ui'

const App = props =>
  <Styleguide
    Components={ui}
    scope={{ props }}
    {...props}
  />

App.getInitialProps = async props => {
  const metadata = await getMetadata({
    library: 'app'
  })

  return Object.assign({}, props, {
    toc: true,
    styleguide: metadata
  })
}

export default App
