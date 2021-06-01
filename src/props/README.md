# ../props

Utilities for using Styled System props

```sh
npm i ../props
```

```js
import { pick, omit } from '../props'

const attr = omit({
  id: 'keep-this',
  color: 'primary',
})
// { id: 'keep-this' }

const props = pick({
  className: 'hello',
  color: 'secondary',
})
// { color: 'secondary' }
```

MIT License
