import React from 'react'
import { render } from 'react-dom'
import { Global, ThemeContext } from '@emotion/core'

const theme = {
  space: [
    0, 4, 8, 16, 32, 64, 128, 256
  ],
  colors: {
    primary: '#33e',
    secondary: '#609',
  },
  fontSizes: [
    12, 14, 16, 20, 32, 48, 64, 72, 96
  ]
}

const styles = (
  <Global
    styles={{
      '*': { boxSizing: 'border-box' },
      body: { margin: 0 }
    }}
  />
)

const App = props => {
  return (
    <ThemeContext.Provider value={theme}>
      {styles}
      <div fontFamily='system-ui, sans-serif'>
        <div
          p={[ 4, 5, 6 ]}
          color='white'
          bg='secondary'
        >
          <h1
            fontSize={[ 4, 5, 6 ]}>
            Hello
          </h1>
          <p fontSize={3}>
            This example is using the <code>@styled-system/babel-plugin</code> to add styles based on props.
          </p>
        </div>
        <div
          px={[ 4, 5, 6 ]}
          py={5}>
          <p fontSize={3}>
            These style props work on <i>any</i> JSX element and don't require the use of custom styled components.
          </p>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

render(
  <App />,
  document.getElementById('root')
)
