# Utilities

## themeGet

<div id='theme' />

The themeGet function is an existential getter function
that can be used in any style declaration to get a value
from your theme, with support for fallback values.
This helps prevent errors from throwing when a theme value is missing,
which can be helpful when unit testing styled-components.

```js
themeGet(objectPath, fallbackValue)
```

```js
import styled from 'styled-components'
import { themeGet } from 'styled-system'

const Box = styled.div`
  border-radius: ${themeGet('radii.small', '4px')};
`
```

## propTypes

Prop type definitions are available for each style function to add to your component's propTypes object.
Each value in `propTypes` is an object which should be assigned (or spread) to the component's `propTypes`.

```jsx
import styled from 'styled-components'
import { width } from 'styled-system'

const Box = styled.div`
  ${width}
`

Box.propTypes = {
  ...width.propTypes
}
```

