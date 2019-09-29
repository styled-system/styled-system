
# @vue-styled-system/prop-types

Add prop types to Vue components built with Styled System

```sh
npm i styled-system @vue-styled-system/prop-types
```

```js
import styled from 'vue-styled-components'
import { space, color } from 'styled-system'
import propTypes from '@vue-styled-system/prop-types'

const boxProps = {
  ...propTypes.space,
  ...propTypes.color,
}

const Box = styled('div', boxProps)(space, color)
```

## Available Type Categories

* `space`
* `color`
* `layout`
* `typography`
* `flexbox`
* `border`
* `background`
* `position`
* `grid`

See props of each category in [the reference table](https://styled-system.com/table).

## Custom Props

```js
import styled from 'vue-styled-components'
import { space, system } from 'styled-system'
import propTypes, { propType } from '@vue-styled-system/prop-types'

const gridGap = system({
  gap: {
    property: 'gridGap',
    scale: 'space',
    defaultScale: [0, 4, 8, 16, 32, 64, 128, 256, 512]
  }
})

const stackProps = {
  ...propTypes.space,
  gap: propType,
}

const Stack = styled('div', stackProps)(
  compose(space, gridGap)
)
```
