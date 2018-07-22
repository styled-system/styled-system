
# system-components

system-components is an optional, alternative way to use styled-system.
It replaces the `styled` function from styled-components and emotion,
with an API that makes defining components that use styled-system even simpler.

system-components includes built-in helpers for:

- Defining default props
- Referencing styled-system functions without imports
- Removing style props from the HTML output

## Getting Started

To use system-components, install the package:

```sh
npm i system-components
```

Create a component that defines some default props for styled-system:

```js
import system from 'system-components'

const Card = system({
  px: 2,
  py: 3,
  borderWidth: 1,
  borderColor: 'lightGray',
  borderRadius: 2
})

export default Card
```

The example above will create a styled component that includes style props and default props for padding, border, and border-radius.

### Emotion

If you're using emotion in your application, change the import statement to:

```js
import system from 'system-components/emotion'
```

## Including style props without defaults

To add style props without default values, pass the styled-system function name as arguments:

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

## Using custom functions

Custom style functions can be passed as an argument.

```js
const Box = system(
  props => ({
    height: props.height
  })
)
```

## Changing the underlying HTML element

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

## Extending components

To extend another component, set it as the default `is` prop in your component definition, or pass it as a prop to the component instance.

```js
const Text = system({
  fontSize: 2,
})

const Bold = system({
  is: Text,
  fontWeight: 'bold'
})
```

## CSS prop

To add one-off custom CSS to any system-component, use the `css` prop.

```js
<Heading css='opacity:0.75;'>
  Hello
</Heading>
```

## DOM Element Blacklist

To remove style props from the underlying DOM element, pass in a blacklist array with the prop names:

```jsx
const Button = system({
  is: 'button',
  blacklist: ['buttonSize']
})
```

## Using with other CSS-in-JS libraries

The base `System` class can be used to create a system-components function for any CSS-in-JS library.

```js
import { System } from 'system-components'
import styled from 'nano-style'

const system = new System({
  createComponent: type => (...args) => styled(type)(...args)
})

export default system
```
