
# Theme Specification

The Styled System theme object is intended to be a general purpose format for storing design system style values and scales.
The object itself is not coupled to Styled System's implementation and can be used in other similar libraries where using common style values in multiple parts of a code base is desirable.

## Scale Objects

Many CSS style properties accept open-ended values like lengths, colors, and font names.
In order to create a consistent styling system, the theme object is centered around the idea of scales, such as a typographic (font-size) scale, a spacing scale for margin and padding, and a color object. Scales must be JSON serializable - this way can be used in JS and CSS but possibly even cross platform.

These scales can be defined after their correspective CSS property names when possible and use arrays for variants or ordinal values like font sizes. Short hand values are expressed as nested objects. Special categories can be defined to describe multiple CSS properties whichmust be listed in the `aliases` part of the object.

Each scale must contain exactly 7 variants, where the first one is the base value.
(not sure what is the best way to define base + variants values though - maybe your idea of singular and plural is much better).

The idea is to mirror the HTML heading scale h1-6 + a base value - 6 variants are normally good enough. I might be wrong though, is 10 or Pantone-style better?

```js
// example font scale as an array
font: {
  size: [ // font-size or fontSize
    16, // base
    12, 14, 18, 20, 24, 32
  ],
  family: {
    sansSerif: 'Open Sans, Arial',
    serif: 'times',
    monospace: 'monospace'
  },
  weight: [
    300, // base
    100, 200, 400, 500, 600, 700
  ]
}
```

```js
color: {
  blue: [
    '#07c', // base
    '#004170',
    '#006fbe',
    '#2d8fd5',
    '#5aa7de',
    '#aaa',
    '#bbb',
    '#ccc'
  ]
}
```

### ~~Scale Aliases~~

~~For typically ordinal values like font sizes that are stored in arrays, it can be helpful to create aliases by adding named properties to the object.~~

I think that these kind of aliases must be done in user land with ad-hoc maps otherwise they won't be universal or portable e.g. i create a `foo` alias and use it in my codebase, then I import your theme which doesn't define it or calls it `bar` and things won't work.

See https://github.com/giuseppeg/dss/blob/master/website/theme/index.js for an example of map.

Instead aliases should be for things like `space` (probably automated) and only top level keys:

```js
{
  font: {
    size: [ // font-size or fontSize
      16, // base
      12, 14, 18, 20, 24, 32
    ]
  },
  space: [
    2, 4, 8, 16, 32, 64
  ],
  aliases: {
    margin: 'space',
    padding: 'space',
  }
}
```
So that a tool can do:

```js
function propName(prop) {
  return theme.aliases[prop] && theme[theme.aliases[prop]] || theme[prop]
}

<Box margin="0" />

// vvvv

propName('margin')[0]
```

### Excluded Values

Some CSS properties accept only a small, finite number of valid CSS values and should *not* be included as a scale object.
For example, the `text-align` property accepts the following values:
`left`, `right`, `center`, `justify`, `justify-all`, `start`, `end`, or `match-parent`.
Other properties that are intentionally excluded from this specification include: `float`, `clear`, `display`, `overflow`, `position`, `vertical-align`, `align-items`, `justify-content`, and `flex-direction`.

## Keys

The keys in the theme object should typically correspond with the CSS properties they are used for.
For example, the CSS property `font-size` is expected to use values from the `font.size` scale, and the `color` property uses values from the `color.someColorName` scale.

Some keys can be used for multiple CSS properties, where the data type is the same. The `color` object is intended to be used with any property that accepts a CSS color value, such as `background-color` or `border-color`.


### Space

The `space` key is a specially-named scale intended for use with margin, padding, and other layout-related CSS properties.
A space scale must be defined as an array.
This is an intentional constraint that makes it difficult to add *"one-off"* or *"in-between"* sizes that could lead to unwanted and rippling affects to layout.

When defining space scales as an array, it is conventional to use the value `0` as the first value so that `space[0] === 0`.

```js
// GOOD: example space scale
space: [
  0, 4, 8, 16, 32, 64
]
```

```js
// BAD not standard and opinionated naming
space: {
  small: 4,
  medium: 8,
  large: 16,
}
```

### Breakpoints

Breakpoints are CSS lengths intended for use in media queries.
In Styled System the breakpoints scale is used to create mobile-first responsive media queries based on array values.

For example, using a margin value of `[ 0, 1, 2 ]` creates styles with multiple mobile-first min-width media queries.

```js
// given this breakpoints scale:
breakpoints: [ '40em', '52em', '64em' ]
```

```js
// and this margin prop value
m: [ 0, 1, 2 ]
```

```js
// Styled System outputs this style object
{
  margin: 0,
  '@media screen and (min-width: 40em)': {
    margin: '4px',
  },
  '@media screen and (min-width: 52em)': {
    margin: '8px',
  }
}
```

### Key Reference / aliases

The following is a list of theme object keys and their corresponding CSS properties.
This list may be non-exhaustive.

Theme Key         | CSS Properties
------------------|--------------
`space`           | `margin`, `margin-top`, `margin-right`, `margin-bottom`, `margin-left`, `padding`, `padding-top`, `padding-right`, `padding-bottom`, `padding-left`, `grid-gap`, `grid-column-gap`, `grid-row-gap`
`font.size`       | `font-size`
`font.family`     | `font-family`
`font.weight`     | `font-weight`
`lineHeight`      | `line-height`
`color`           | `color`, `background-color`, `border-color`
`letterSpacing`   | `letter-spacing`
`maxWidth`        | `max-width`
`minWidth`        | `min-widths`
`width`           | `width`
`maxHeight`       | `max-height`
`minHeight `      | `min-height`
`height`          | `height`
`border`          | `border`, `border-top`, `border-right`, `border-bottom`, `border-left`
`border.width`    | `border-width`
`radii`           | `border-radius`
`boxShadow`       | `box-shadow`, `text-shadow`
`zIndex`          | `z-index`

*Note:* Styled System does *not* current support the `widths` scale due to its fractional value transformation.

### Element Variants

These are implemented in user land.

Styled System includes the ability to define style object variants for particular element types.
For example, button variants can be defined with the `button` key, which a Button component can then switch between on a per-instance basis.

```js
// example button variants
buttons: {
  primary: {
    color: color.white[0],
    backgroundColor: color.blue[0],
  },
  secondary: {
    color: color.white[0],
    backgroundColor: color.green[0],
  },
  danger: {
    color: color.white[0],
    backgroundColor: color.red[0],
  },
}

// using a button variant
<Button variant='primary' />
```

Which elements or components use these variant styles is left to the end-user and not restricted in any way.
Common style variants include: `textStyles`, `colorStyles`, and `buttons`.
