# Props

## Typography

```jsx
// fontFamily
<Text fontFamily='mono' />

// textAlign (responsive)
<Text textAlign='center' />
<Text textAlign={[ 'center', 'left' ]} />

// lineHeight
<Text lineHeight='1.25' />

// fontWeight
<Text fontWeight='bold' />

// letterSpacing
<Text letterSpacing='0.1em' />
```

## Layout

```jsx
// display (responsive)
<Box display='inline-block' />
<Box display={[ 'block', 'inline-block' ]} />

// maxWidth (responsive)
<Box maxWidth={1024} />
<Box maxWidth={[ 768, null, null, 1024 ]} />

// minWidth (responsive)
<Box minWidth={128} />
<Box minWidth={[ 96, 128 ]} />

// height (responsive)
<Box height={64} />
<Box height={[ 48, 64 ]} />

// maxHeight (responsive)
<Box maxHeight={512} />
<Box maxHeight={[ 384, 512 ]} />

// minHeight (responsive)
<Box minHeight={512} />
<Box minHeight={[ 384, 512 ]} />

// size (responsive, width & height)
<Box size={32} />
<Box size={[ 32, 48 ]} />

// ratio (height: 0 & paddingBottom)
<Box ratio={3/4} />
```

## Flexbox

```jsx
// alignItems (responsive)
<Flex alignItems='center' />

// alignContent (responsive)
<Flex alignContent='center' />

// justifyContent (responsive)
<Flex justifyContent='center' />

// flexWrap (responsive)
<Flex flexWrap='wrap' />

// flexDirection (responsive)
<Flex flexDirection='column' />

// flex (responsive)
<Box flex='1 1 auto' />

// alignSelf (responsive)
<Box alignSelf='center' />
```

## Borders

The `borders` utiilty combines `border`, `borderTop`, `borderRight`, `borderBottom` and `borderLeft`, all of which are responsive

```jsx
<Box border='1px solid' />
<Box borderTop='1px solid' />
<Box borderRight='1px solid' />
<Box borderBottom='1px solid' />
<Box borderLeft='1px solid' />
```
```jsx
// borderColor
<Box borderColor='blue' />

// borderRadius
<Box borderRadius={4} />
```

## Position

```jsx
// position (responsive)
<Box position='absolute' />

// zIndex
<Absolute zIndex={2} />

// top, right, bottom, left (responsive)
<Fixed
  top='0'
  right='0'
  bottom='0'
  left='0'
/>
```

## Misc

```jsx
// boxShadow
<Box boxShadow={1} />

// backgroundImage, backgroundSize, backgroundPosition
<Box
  backgroundImage='kitten.png'
  backgroundSize='cover'
  backgroundPosition='center'
/>
```

## Pseudo-classes

Pseudo-class utility props accept style objects that can pick up certain values, such as color, from a theme.

### hover

```jsx
<Box
  hover={{
    textDecoration: 'underline',
    color: 'blue'
  }}
/>
```

### focus

```jsx
<Box focus={{ color: 'blue' }} />
```

### active

```jsx
<Box active={{ color: 'navy' }} />
```

### disabled

```jsx
<Box disabledStyle={{ color: 'gray' }} />
```

## Complex Styles

The complex style utilities allow you to define reusable style objects in your theme for things like text styles and color combinations.

```js
// example theme
const theme = {
  textStyles: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em'
    }
  },
  colorStyles: {
    warning: {
      color: 'black',
      backgroundColor: 'orange'
    },
    error: {
      color: 'white',
      backgroundColor: 'red'
    },
  },
  buttons: {
    primary: {
      color: 'white',
      backgroundColor: 'blue',
      '&:hover': {
        backgroundColor: 'black',
      }
    }
  }
}
```

```jsx
// textStyle
<Text textStyle='caps' />

// colorStyle
<Box colors='warning' />

// buttonStyle
<Button buttonStyle='primary' />
```

Styles can be applied with the utility's prop or by using boolean shorthand props for the key used in the theme.
Be sure to use key values that will be unique for a particular component, and avoid using HTML attributes as keys.

```jsx
<Text caps />
<Box warning />
<Button primary />
```

## Responsive Styles

Often when working on responsive layouts, it's useful to adjust styles across a singular dimension –
such as font-size, margin, padding, and width.
Instead of manually managing media queries and adding nested style objects throughout a code base,
styled-system offers a convenient shorthand syntax for adding responsive styles with a mobile-first approach.
While this syntax can seem odd at first, it can become a powerful way to manage responsive typography and layouts.

Many styled-system utilities provide props that
accept arrays as values for mobile-first responsive styles.

```jsx
<Box
  width={[
    1,    // 100% below the smallest breakpoint
    1/2,  // 50% from the next breakpoint and up
    1/4   // 25% from the next breakpoint and up
  ]}
/>

// responsive font size
<Box fontSize={[ 1, 2, 3, 4 ]} />

// responsive margin
<Box m={[ 1, 2, 3, 4 ]} />

// responsive padding
<Box p={[ 1, 2, 3, 4 ]} />
```

See the [Table of Props](table.md) for a list of props for each utility function.

