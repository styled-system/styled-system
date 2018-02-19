# Extras

- [clean-tag](https://github.com/jxnblk/styled-system/tree/master/clean-tag)
- [clean-element](https://github.com/jxnblk/styled-system/tree/master/clean-element)
- [system-components](https://github.com/jxnblk/styled-system/tree/master/system-components)
- [system-loader](https://github.com/jxnblk/styled-system/tree/master/system-loader)

## system-components

For an even simpler authoring experience when using styled-system with styled-components, see [system-components](https://github.com/jxnblk/styled-system/tree/master/system-components), which is a lightweight wrapper around the two libraries.

```js
import system from 'system-components'

// creates a Box component with default props tied to your theme
const Box = system({
  p: 2,
  bg: 'blue'
})
```

## system-loader

The [system-loader](https://github.com/jxnblk/styled-system/tree/master/loader) package is a webpack loader for creating styled-system components from JSON.

