
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
import styled from 'styled-components'
import { space, style } from 'styled-system'
import propTypes, { propType } from '@styled-system/prop-types'

const gap = style({
	prop: 'gap',
	cssProperty: 'gridGap',
	key: 'space',
	scale: DEFAULT_SCALE,
});

const Stack = styled('div')(space, gap);

Stack.propTypes = {
  ...propTypes.space,
  gap: propType,
}
```
