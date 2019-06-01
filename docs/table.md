# Reference Table

Styled System is organized into categories of style props.
Each function provides the following props and maps to scales defined in a theme.

## Space

```js
import { space } from 'styled-system'
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

## Color

```js
import { color } from 'styled-system'
```

| Prop                    | CSS Property       | Theme Field |
| ----------------------- | ------------------ | ----------- |
| `color`                 | `color`            | `colors`    |
| `bg`, `backgroundColor` | `background-color` | `colors`    |

## Typography

```js
import { typography } from 'styled-system'
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

## Flexbox

```js
import { flexbox } from 'styled-system'
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
```

| Prop           | CSS Property                   | Theme Field    |
| -------------- | ------------------------------ | -------------- |
| `border`       | `border`                       | `borders`      |
| `borderWidth`  | `border-width`                 | `borderWidths` |
| `borderStyle`  | `border-style`                 | `borderStyles` |
| `borderColor`  | `border-color`                 | `colors`       |
| `borderRadius` | `border-radius`                | `radii`        |
| `borderTop`    | `border-top`                   | `borders`      |
| `borderRight`  | `border-right`                 | `borders`      |
| `borderBottom` | `border-bottom`                | `borders`      |
| `borderLeft`   | `border-left`                  | `borders`      |
| `borderX`      | `border-left` & `border-right` | `borders`      |
| `borderY`      | `border-top` & `border-bottom` | `borders`      |

## Position

```js
import { position } from 'styled-system'
```

| Function Name | Prop       | CSS Property | Theme Field |
| ------------- | ---------- | ------------ | ----------- |
| `position`    | `position` | `position`   | none        |
| `zIndex`      | `zIndex`   | `z-index`    | `zIndices`  |
| `top`         | `top`      | `top`        | none        |
| `right`       | `right`    | `right`      | none        |
| `bottom`      | `bottom`   | `bottom`     | none        |
| `left`        | `left`     | `left`       | none        |

## Variants

```js
import { textStyle, colorStyle, buttonStyle } from 'styled-system'
```

| Function Name | Prop        | CSS Property | Theme Field   |
| ------------- | ----------- | ------------ | ------------- |
| `textStyle`   | `textStyle` | style object | `textStyles`  |
| `colorStyle`  | `colors`    | style object | `colorStyles` |
| `buttonStyle` | `variant`   | style object | `buttons`     |

---

TODO

| Prop        | CSS Property | Theme Field |
| ----------- | ------------ | ----------- |
| `opacity`   | `opacity`    | none        |
| `overflow`  | `overflow`   | none        |
| `boxShadow` | `box-shadow` | `shadows`   |
