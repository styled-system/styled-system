
# system-classnames

Styled system props for utility-based functional CSS libraries

```sh
npm i system-classnames
```

```jsx
// example for use with primer.css and React
import createMapper from 'system-classnames'

const map = createMapper({
  breakpoints: [ null, 'sm', 'md', 'lg', 'xl' ],
  props: [
    'm', 'mt', 'mr', 'mb', 'ml', 'mx', 'my',
    'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py',
    'text', 'bg'
  ],
  getter: ({ breakpoint, prop, value }) => breakpoint
    ? [ prop, breakpoint, value ].join('-')
    : [ prop, value ].join('-')
})

const Box = props =>
  <div {...map(props)} />
```

```jsx
// using the Box component
<Box
  p={[ 2, 3 ]}
  mb={3}
  text='white'
  bg='blue'
/>
```

## Library-specific modules

Mapper modules for Basscss, Tachyons, and Basscss are available to use out-of-the box.

```jsx
import map from 'system-classnames/basscss'

const Box = props =>
  <div {...map(props)} />
```

```jsx
import map from 'system-classnames/tachyons'
```

```jsx
import map from 'system-classnames/primer'
```

### Related

- [Basscss](http://basscss.com)
- [Tachyons](http://tachyons.io)
- [Primer.css](https://primer.github.io)
- [Solid](https://solid.buzzfeed.com)
- [Styled System](https://github.com/jxnblk/styled-system)

---

MIT License
