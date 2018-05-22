
# Extras

Styled System includes several optional packages

## system-components

```sh
npm i system-components
```

For an even simpler authoring experience when using styled-system with styled-components, see [system-components](https://github.com/jxnblk/styled-system/tree/master/system-components), which is a lightweight wrapper around the two libraries.

```js
import system from 'system-components'

// creates a Box component with default props tied to your theme
const Box = system({
  p: 2,
  bg: 'blue'
})
```

[Read More](../system-components)

## system-loader

```sh
npm i system-loader
```

The [system-loader](../system-loader) package is a webpack loader for creating styled-system components from JSON.

[Read More](../system-loader)

## clean-tag

```sh
npm i clean-tag
```

Removes unwanted style props from the underlying HTML element when using styled-components.

If you see React warnings when using styled-components, this can help.

[Read More](../clean-tag)

## clean-element

```sh
npm i clean-element
```

[Read More](../clean-element)

## system-classnames

```sh
npm i system-classnames
```

Styled system props for utility-based functional CSS libraries

[Read More](../system-classnames)
