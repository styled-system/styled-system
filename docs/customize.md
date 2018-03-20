# Customize

To create custom utilities for other CSS properties,
use the following low-level utility functions.

- [style](#style)
- [responsiveStyle](#responsivestyle)
- [pseudoStyle](#pseudostyle)
- [complexStyle](#complexstyle)

## style

Create a non-responsive style utility.

```js
import styled from 'styled-components'
import { style } from 'styled-system'

const textShadow = style({
  // React prop name
  prop: 'shadow',
  // The corresponding CSS property (defaults to prop argument)
  cssProperty: 'textShadow',
  // key for theme values
  key: 'shadows',
  // convert number values to pixels
  numberToPx: false,
  // accessor function for transforming the value
  getter: n => n,
  // shorthand alias React prop name
  alias: 'sh'
})

const ShadowText = styled(Text)`
  ${textShadow}
`

// with a `theme.shadows` array
const App = props => (
  <ShadowText shadow={0}>
    Shady
  </ShadowText>
)
```

## responsiveStyle

Create a responsive style utility that accepts array-based responsive prop values.

```js
import styled from 'styled-components'
import { responsiveStyle } from 'styled-system'

const borderRadius = responsiveStyle({
  // React prop name
  prop: 'borderRadius',
  // corresponding CSS property (defaults to prop argument)
  cssProperty: 'borderRadius',
  // key for theme values
  key: 'radii',
  // convert number values to pixels
  numberToPx: true,
  // accessor function for transforming the value
  getter: n => n,
  // shorthand alias React prop name
  alias: 'radius'
})

const RoundedBox = styled.div`
  ${borderRadius}
`

const App = props => (
  <RoundedBox borderRadius={[ 0, 2 ]} />
)
```

## pseudoStyle

Create a pseudo-class style utility that accepts a style object prop value.

```js
import styled from 'styled-components'
import { pseudoStyle } from 'styled-system'

const checkedStyle = pseudoStyle({
  prop: 'checkedStyle',
  pseudoclass: 'checked',
  keys: {
    // keys for theme-based values
    color: 'colors',
    backgroundColor: 'colors',
  }
})

const FancyCheckbox = styled.input`
  /* ...base styles */
  ${checkedStyle}
`
FancyCheckbox.defaultProps = {
  type: 'checkbox'
}

// <FancyCheckbox checkedStyle={{ backgroundColor: 'blue' }} />
```

## complexStyle

Create a complex style utility that maps props to style objects in a theme.

```js
import styled from 'styled-components'
import { complexStyle } from 'styled-system'

const cardStyles = complexStyle({
  prop: 'cardStyle',
  key: 'cards'
})

const Card = styled.div`
  ${cardStyle}
`
Card.defaultProps = {
  cardStyle: 'normal'
}
// <Card cardStyle='large' />
```

