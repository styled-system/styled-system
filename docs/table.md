# Reference Table

Styled System is organized into categories of style props.
Each function provides the following props and maps to scales defined in a theme.

## Space

```js
import { space } from 'styled-system'
// or `import space from '@styled-system/space'`
```

| Prop                  | CSS Property                       | Theme Field |
| --------------------- | ---------------------------------- | ----------- |
| `m`, `margin`         | `margin`                           | `space`     |
| `mt`, `marginTop`     | `margin-top`                       | `space`     |
| `mr`, `marginRight`   | `margin-right`                     | `space`     |
| `mb`, `marginBottom`  | `margin-bottom`                    | `space`     |
| `ml`, `marginLeft`    | `margin-left`                      | `space`     |
| `mx`                  | `margin-left` and `margin-right`   | `space`     |
| `my`                  | `margin-top` and `margin-bottom`   | `space`     |
| `p`, `padding`        | `padding`                          | `space`     |
| `pt`, `paddingTop`    | `padding-top`                      | `space`     |
| `pr`, `paddingRight`  | `padding-right`                    | `space`     |
| `pb`, `paddingBottom` | `padding-bottom`                   | `space`     |
| `pl`, `paddingLeft`   | `padding-left`                     | `space`     |
| `px`                  | `padding-left` and `padding-right` | `space`     |
| `py`                  | `padding-top` and `padding-bottom` | `space`     |

Styled System provides subsets of `space` category: `margin` and `padding`.

## Color

```js
import { color } from 'styled-system'
// or `import color from '@styled-system/color'`
```

| Prop                    | CSS Property       | Theme Field |
| ----------------------- | ------------------ | ----------- |
| `color`                 | `color`            | `colors`    |
| `bg`, `backgroundColor` | `background-color` | `colors`    |
| `opacity`               | `opacity`          | none        |

## Typography

```js
import { typography } from 'styled-system'
// or `import typography from '@styled-system/typography'`
```

| Prop            | CSS Property     | Theme Field      |
| --------------- | ---------------- | ---------------- |
| `fontFamily`    | `font-family`    | `fonts`          |
| `fontSize`      | `font-size`      | `fontSizes`      |
| `fontWeight`    | `font-weight`    | `fontWeights`    |
| `lineHeight`    | `line-height`    | `lineHeights`    |
| `letterSpacing` | `letter-spacing` | `letterSpacings` |
| `textAlign`     | `text-align`     | none             |
| `fontStyle`     | `font-style`     | none             |

## Layout

```js
import { layout } from 'styled-system'
// or `import layout from '@styled-system/layout'`
```

| Prop            | CSS Property     | Theme Field |
| --------------- | ---------------- | ----------- |
| `width`         | `width`          | `sizes`     |
| `height`        | `height`         | `sizes`     |
| `minWidth`      | `min-width`      | `sizes`     |
| `maxWidth`      | `max-width`      | `sizes`     |
| `minHeight`     | `min-height`     | `sizes`     |
| `maxHeight`     | `max-height`     | `sizes`     |
| `size`          | `width` `height` | `sizes`     |
| `display`       | `display`        | none        |
| `verticalAlign` | `vertical-align` | none        |
| `overflow`      | `overflow`       | none        |
| `overflowX`     | `overflowX`      | none        |
| `overflowY`     | `overflowY`      | none        |

## Flexbox

```js
import { flexbox } from 'styled-system'
// or `import flexbox from '@styled-system/flexbox'`
```

| Prop             | CSS Property       | Theme Field |
| ---------------- | ------------------ | ----------- |
| `alignItems`     | `align-items`      | none        |
| `alignContent`   | `align-content`    | none        |
| `justifyItems`   | `justify-items`    | none        |
| `justifyContent` | `justify-content`  | none        |
| `flexWrap`       | `flex-wrap`        | none        |
| `flexDirection`  | `flex-direction`   | none        |
| `flex`           | `flex` (shorthand) | none        |
| `flexGrow`       | `flex-grow`        | none        |
| `flexShrink`     | `flex-shrink`      | none        |
| `flexBasis`      | `flex-basis`       | none        |
| `justifySelf`    | `justify-self`     | none        |
| `alignSelf`      | `align-self`       | none        |
| `order`          | `order`            | none        |

## Grid Layout

```js
import { grid } from 'styled-system'
// or `import grid from '@styled-system/grid'`
```

| Prop                  | CSS Property            | Theme Field |
| --------------------- | ----------------------- | ----------- |
| `gridGap`             | `grid-gap`              | `space`     |
| `gridRowGap`          | `grid-row-gap`          | `space`     |
| `gridColumnGap`       | `grid-column-gap`       | `space`     |
| `gridColumn`          | `grid-column`           | none        |
| `gridRow`             | `grid-row`              | none        |
| `gridArea`            | `grid-area`             | none        |
| `gridAutoFlow`        | `grid-auto-flow`        | none        |
| `gridAutoRows`        | `grid-auto-rows`        | none        |
| `gridAutoColumns`     | `grid-auto-columns`     | none        |
| `gridTemplateRows`    | `grid-template-rows`    | none        |
| `gridTemplateColumns` | `grid-template-columns` | none        |
| `gridTemplateAreas`   | `grid-template-areas`   | none        |

## Background

```js
import { background } from 'styled-system'
// or `import background from '@styled-system/background'`
```

| Prop                 | CSS Property          | Theme Field |
| -------------------- | --------------------- | ----------- |
| `background`         | `background`          | none        |
| `backgroundImage`    | `background-image`    | none        |
| `backgroundSize`     | `background-size`     | none        |
| `backgroundPosition` | `background-position` | none        |
| `backgroundRepeat`   | `background-repeat`   | none        |

## Border

```js
import { border } from 'styled-system'
// or `import border from '@styled-system/border'`
```

| Prop                      | CSS Property                   | Theme Field    |
| ------------------------- | ------------------------------ | -------------- |
| `border`                  | `border`                       | `borders`      |
| `borderWidth`             | `border-width`                 | `borderWidths` |
| `borderStyle`             | `border-style`                 | `borderStyles` |
| `borderColor`             | `border-color`                 | `colors`       |
| `borderRadius`            | `border-radius`                | `radii`        |
| `borderTop`               | `border-top`                   | `borders`      |
| `borderTopWidth`          | `border-top-width`             | `borderWidths` |
| `borderTopStyle`          | `border-top-style`             | `borderStyles` |
| `borderTopColor`          | `border-top-color`             | `colors`       |
| `borderTopLeftRadius`     | `border-top-left-radius`       | `radii`        |
| `borderTopRightRadius`    | `border-top-right-radius`      | `radii`        |
| `borderRight`             | `border-right`                 | `borders`      |
| `borderRightWidth`        | `border-right-width`           | `borderWidths` |
| `borderRightStyle`        | `border-right-style`           | `borderStyles` |
| `borderRightColor`        | `border-right-color`           | `colors`       |
| `borderBottom`            | `border-bottom`                | `borders`      |
| `borderBottomWidth`       | `border-bottom-width`          | `borderWidths` |
| `borderBottomStyle`       | `border-bottom-style`          | `borderStyles` |
| `borderBottomColor`       | `border-bottom-color`          | `colors`       |
| `borderBottomLeftRadius`  | `border-bottom-left-radius`    | `radii`        |
| `borderBottomRightRadius` | `border-bottom-right-radius`   | `radii`        |
| `borderLeft`              | `border-left`                  | `borders`      |
| `borderLeftWidth`         | `border-left-width`            | `borderWidths` |
| `borderLeftStyle`         | `border-left-style`            | `borderStyles` |
| `borderLeftColor`         | `border-left-color`            | `colors`       |
| `borderX`                 | `border-left` & `border-right` | `borders`      |
| `borderY`                 | `border-top` & `border-bottom` | `borders`      |

## Position

```js
import { position } from 'styled-system'
// or `import position from '@styled-system/position'`
```

| Prop       | CSS Property | Theme Field |
| ---------- | ------------ | ----------- |
| `position` | `position`   | none        |
| `zIndex`   | `z-index`    | `zIndices`  |
| `top`      | `top`        | `space`     |
| `right`    | `right`      | `space`     |
| `bottom`   | `bottom`     | `space`     |
| `left`     | `left`       | `space`     |

## Shadow

```js
import { shadow } from 'styled-system'
// or `import shadow from '@styled-system/shadow'`
```

| Prop         | CSS Property  | Theme Field |
| ------------ | ------------- | ----------- |
| `textShadow` | `text-shadow` | `shadows`   |
| `boxShadow`  | `box-shadow`  | `shadows`   |

## Variants

```js
import { textStyle, colorStyle, buttonStyle } from 'styled-system'
// or `import { textStyle, colorStyle, buttonStyle } from '@styled-system/variant'`
```

| Function Name | Prop        | Theme Field   |
| ------------- | ----------- | ------------- |
| `textStyle`   | `textStyle` | `textStyles`  |
| `colorStyle`  | `colors`    | `colorStyles` |
| `buttonStyle` | `variant`   | `buttons`     |
