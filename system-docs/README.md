
# system-docs

**WIP**

Parses metadata from [system-components][components] for documentation.

```sh
npm i -D system-docs
```

```js
import Button from '../src/Button'
import parse from 'system-docs'

const metadata = parse(Button)
```

Returns a `metadata` object with the following:

- `tagName`: the underlying HTML tag name
- `extensions`: an array of components that the component extends with the `is` prop
- `propTypes`: an object of metadata for each propType with the following:
  - `prop`: name of the prop
  - `themeKey`: key used for value lookups in the `theme` object
  - `styleType`: (string) one of `default`, `responsive`, `complex`, or `pseudo`

The object also includes all static properties of the component,
including `defaultProp` and any other properties added manually, such as `displayName`.

[components]: ../system-components
