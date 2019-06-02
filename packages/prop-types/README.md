
# @styled-system/prop-types

Add prop types to components built with Styled System

```sh
npm i styled-system @styled-system/prop-types
```

```js
import styled from 'styled-components'
import { space, color } from 'styled-system'
import propTypes from '@styled-system/prop-types'

const Box = styled('div')(space, color)

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
}
```
