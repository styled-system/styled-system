
# system-components

Create consistent design-system-driven React UI components

Built with [styled-system][sys],
with support for [styled-components][sc] & [emotion][emotion]

[![Build Status][build-badge]][build]

[build-badge]: https://img.shields.io/travis/jxnblk/system-components/master.svg?style=flat-square
[build]: https://travis-ci.org/jxnblk/system-components

```js
import system from 'system-components'

// creates a Box with default props tied to your theme
const Box = system({
  p: 2,
  bg: 'blue'
})
```

Or, to use with [emotion][emotion]:

```js
import system from 'system-components/emotion'
```

## Usage

To create a styled-component with default props that hook into [styled-system][sys] props, pass a plain object as the first argument to the `system` function.

```js
const Card = system({
  px: 2,
  py: 3,
  borderWidth: 1,
  borderColor: 'lightGray',
  borderRadius: 2
})
```

The system function will automatically apply [styled-system][sys] functions
to the underlying styled-component based on the keys of the `defaultProps` object.
System components also add prop type definitions and remove style props from the underlying HTML element.

See the [styled-system docs][sys] for a complete list of the available style functions.

### Add style props without defaultProps

System components can also be created with [styled-system][sys] props without defining `defaultProps`.

```js
const Box = system(
  'space',
  'width',
  'color'
)
```

This allows for style props to be passed to the component instance:

```jsx
<Box
  width={1/2}
  px={3}
  py={4}
  bg='blue'
/>
```

### Using custom functions

Custom style functions can be passed as an argument.

```js
const Box = system(
  props => ({
    height: props.height
  })
)
```

### Changing the underlying HTML element

System components default to using a `<div>` as the HTML element.
To change the HTML element use the `is` prop.

```js
const Heading = system({
  is: 'h2',
  m: 0,
  fontSize: 6
})
```

Since `is` is a prop, it can also be passed to the element when used.
This is useful for one-off changes to ensure semantic markup.

```js
<Heading is='h1'>
  Hello
</Heading>
```

### CSS prop

To add one-off custom CSS to any system-component, use the `css` prop.

```js
<Heading css='opacity:0.75;'>
  Hello
</Heading>
```

### Extending components

System components are styled-components, so any of the
[built-in methods](https://www.styled-components.com/docs/api#styledcomponent)
work as expected, including `.extend`.

```js
const Text = system({
  fontSize: 2,
})

const Bold = Text.extend`
  font-weight: bold;
`
```

## Using with other CSS-in-JS libraries

The base `System` class can be used to create a system-components function for any CSS-in-JS library.

```js
import { System } from 'system-components'
import cxs from 'cxs/component'

const system = new System({
  createComponent: type => (...args) => cxs(type)(...args)
})

export default system
```

---

[MIT License](License.md)

[sys]: https://github.com/jxnblk/styled-system
[sc]: https://github.com/styled-components/styled-components
[emotion]: https://github.com/emotion-js/emotion
