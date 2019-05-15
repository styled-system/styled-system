
# @styled-system/should-forward-prop

Utility for filtering Styled System props with Emotion's shouldForwardProp option

```sh
npm i @styled-system/should-forward-prop
```

```js
import styled from '@emotion/styled'
import {
  space,
  color,
  fontSize
} from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'

const Box = styled('div', { shouldForwardProp })(
  space,
  color,
  fontSize
)
```

MIT License
