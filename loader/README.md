
# system-loader

webpack loader for creating [styled-system][system] components from JSON

```sh
npm i system-components system-loader
```

## Usage

Add system-loader to your webpack config.

```js
module.exports = {
  // partial webpack.config.js
  module: {
    rules: [
      {
        test: /\.system\.json$/,
        use: 'system-loader'
      }
    ]
  }
}
```

Create a `system.json` file for configuring UI components.

```json
{
  "components": [
    {
      "name": "Box",
      "styles": [
        "space",
        "width",
        "color",
        "flex"
      ]
    },
    {
      "name": "Heading",
      "type": "h2",
      "props": {
        "m": 0,
        "fontSize": 32,
        "color": "tomato"
      },
      "styles": []
    },
    {
      "name": "Button",
      "type": "button",
      "props": {
        "fontFamily": "inherit",
        "fontSize": "inherit",
        "m": 0,
        "px": 3,
        "py": 2,
        "color": "white",
        "bg": "#07c",
        "borderRadius": 4,
        "border": 0
      },
      "css": "appearance:none;",
      "styles": []
    }
  ]
}
```

Import components from the `system.json` file in your app.

```js
import React from 'react'
import {
  Box,
  Heading,
  Button
} from './system.json'

const App = props => (
  <Box p={3}>
    <Heading>Hello</Heading>
    <Button>Beep</Button>
  </Box>
)

export default App
```

## Configuration

The `system.json` file should include a `components` array of objects
that use the following fields:

- `name`: (string) exported name of the component and its `displayName`
- `type`: (string, optional) HTML tag name
- `props`: (object, optional) default props and default styled-system props
- `styles`: (array, optional) array of string function names to enable styled-system props
- `css`: (string, optional) custom static CSS not handled with styled-system


MIT License

[system]: https://github.com/jxnblk/styled-system
