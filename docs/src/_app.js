import React from 'react'
import { Provider } from 'rebass'
import theme from './theme'
import routes from './_routes'
import ScrollTop from './components/ScrollTop'

export default class extends React.Component {
  render () {
    const { render } = this.props

    return (
      <Provider theme={theme}>
        {render({ routes })}
        <ScrollTop />
      </Provider>
    )
  }
}
