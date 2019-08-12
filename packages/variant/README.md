
# @styled-system/variant

Read the docs: https://styled-system.com/variants

## Usage

```js
import styled from 'styled-components'
import variant from '@styled-system/variant'

const Button = styled('button')(
  variant({
    prop: 'variant',
    scale: 'buttons', // key for `theme.buttons`
  })
)

// <Button variant='primary' />
// <Button variant='secondary' />
```

## Component Variants

```js
import styled from 'styled-components'
import { componentVariant } from '@styled-system/variant'

const Button = styled('button')(
  componentVariant({
    prop: 'variant',
    variants: {
      primary: {
        color: 'white',
        bg: 'primary',
        ':hover': {
          bg: 'black',
        }
      },
      secondary: {
        color: 'white',
        bg: 'secondary',
        ':hover': {
          bg: 'black',
        }
      }
    }
  })
)

// <Button variant='primary' />
```

