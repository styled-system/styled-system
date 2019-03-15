
# Table of Style Functions

## Core

Function Name | Prop                  | CSS Property    | Theme Field
--------------|-----------------------|-----------------|--------------
`space`       | `m`, `margin`         | `margin`        | `space`
`space`       | `mt`, `marginTop`     | `margin-top`    | `space`
`space`       | `mr`, `marginRight`   | `margin-right`  | `space`
`space`       | `mb`, `marginBottom`  | `margin-bottom` | `space`
`space`       | `ml`, `marginLeft`    | `margin-left`   | `space`
`space`       | `mx`                  | `margin-left` and `margin-right`   | `space`
`space`       | `my`                  | `margin-top` and `margin-bottom`   | `space`
`space`       | `p`, `padding`        | `padding`       | `space`
`space`       | `pt`, `paddingTop`    | `padding-top`   | `space`
`space`       | `pr`, `paddingRight`  | `padding-right` | `space`
`space`       | `pb`, `paddingBottom` | `padding-bottom` | `space`
`space`       | `pl`, `paddingLeft`   | `padding-left`  | `space`
`space`       | `px`                  | `padding-left` and `padding-right`   | `space`
`space`       | `py`                  | `padding-top` and `padding-bottom`   | `space`
`width`       | `width`               | `width`         | none
`fontSize`    | `fontSize`            |`font-size`      |`fontSizes`
`color`       | `color`               | `color`         | `colors`
`color`       | `bg`, `backgroundColor` | `background-color`| `colors`

## Typography

Function Name   | Prop          | CSS Property    | Theme Field
----------------|---------------|-----------------|--------------
`fontFamily`    | `fontFamily`  | `font-family`   | `fonts`
`textAlign`     | `textAlign`   | `text-align`    | none
`lineHeight`    | `lineHeight`  | `line-height`   | `lineHeights`
`fontWeight`    | `fontWeight`  | `font-weight`   | `fontWeights`
`fontStyle`     | `fontStyle`   | `font-style`    | none
`letterSpacing` | `letterSpacing` | `letter-spacing` | `letterSpacings`

## Layout

Function Name | Prop       | CSS Property    | Theme Field
--------------|------------|-----------------|--------------
`display` | `display` | `display` | none
`maxWidth` | `maxWidth` | `max-width` | `maxWidths`
`minWidth` | `minWidth` | `min-width` | `minWidths`
`height` | `height` | `height` | `heights`
`maxHeight` | `maxHeight` | `max-height` | `maxHeights`
`minHeight` | `minHeight` | `min-height` | `minHeights`
`size` | `size` | `width` `height` | none
`verticalAlign` | `verticalAlign` | `vertical-align` | none

## Flexbox

Function Name | Prop       | CSS Property    | Theme Field
--------------|------------|-----------------|--------------
`alignItems`  | `alignItems` | `align-items` | none
`justifyContent` | `justifyContent` | `justify-content` | none
`flexWrap` | `flexWrap` | `flex-wrap` | none
`flexDirection` | `flexDirection` | `flex-direction` | none
`flex` | `flex` | `flex` (shorthand) | none
`alignContent`  | `alignContent` | `align-content` | none
`justifyItems`  | `justifyItems` | `justify-items` | none
`justifySelf` | `justifySelf` | `justify-self` | none
`alignSelf` | `alignSelf` | `align-self` | none
`order` | `order` | `order` | none
`flexBasis` | `flexBasis` | `flex-basis` | none

## Grid Layout

Function Name | Prop       | CSS Property    | Theme Field
--------------|------------|-----------------|--------------
`gridGap`  | `gridGap` | `grid-gap` | `space`
`gridRowGap` | `gridRowGap` | `grid-row-gap` | `space`
`gridColumnGap` | `gridColumnGap` | `grid-column-gap` | `space`
`gridColumn` | `gridColumn` | `grid-column` | none
`gridRow` | `gridRow` | `grid-row` | none
`gridArea` | `gridArea` | `grid-area` | none
`gridAutoFlow` | `gridAutoFlow` | `grid-auto-flow` | none
`gridAutoRows` | `gridAutoRows` | `grid-auto-rows` | none
`gridAutoColumns` | `gridAutoColumns` | `grid-auto-columns` | none
`gridTemplateRows` | `gridTemplateRows` | `grid-template-rows` | none
`gridTemplateColumns` | `gridTemplateColumns` | `grid-template-columns` | none
`gridTemplateAreas` | `gridTemplateAreas` | `grid-template-areas` | none

## Background

Function Name | Prop       | CSS Property    | Theme Field
--------------|------------|-----------------|--------------
`background`  | `background` | `background`  | none
`backgroundImage` | `backgroundImage` | `background-image` | none
`backgroundSize` | `backgroundSize` | `background-size` | none
`backgroundPosition` | `backgroundPosition` | `background-position` | none
`backgroundRepeat` | `backgroundRepeat` | `background-repeat` | none

## Misc

Function Name | Prop            | CSS Property    | Theme Field
--------------|-----------------|-----------------|--------------
`border`      | `border`        | `border`        | `borders`
`borderTop`   | `borderTop`     | `border-top`    | `borders`
`borderRight` | `borderRight`   | `border-right`  | `borders`
`borderBottom`| `borderBottom`  | `border-bottom` | `borders`
`borderLeft`  | `borderLeft`    | `border-left`   | `borders`
`borderWidth` | `borderWidth` | `border-width` | `borderWidths`
`borderStyle` | `borderStyle` | `border-style` | `borderStyles`
`borderColor` | `borderColor` | `border-color` | `colors`
`borderRadius`| `borderRadius` | `border-radius` | `radii`
`boxShadow` | `boxShadow` | `box-shadow` | `shadows`
`opacity`   | `opacity` | `opacity`  | none
`overflow` | `overflow` | `overflow` | none

The `borders` function composes multiple border props together.

Function Name | Prop | CSS Property | Theme Field
---|---|---|---
`borders` | `border` | `border` | `borders`
`borders` | `borderTop` | `border-top`        | `borders`
`borders` | `borderRight` | `border-right`    | `borders`
`borders` | `borderBottom` | `border-bottom`  | `borders`
`borders` | `borderLeft` | `border-left`      | `borders`
`borders` | `borderWidth` | `border-width`    | `borderWidths`
`borders` | `borderStyle` | `border-style`    | `borderStyles`
`borders` | `borderColor` | `border-color`    | `colors`
`borders` | `borderRadius` | `border-radius`  | `radii`

## Position

Function Name | Prop       | CSS Property    | Theme Field
--------------|------------|-----------------|--------------
`position` | `position` | `position` | none
`zIndex` | `zIndex` | `z-index` | `zIndices`
`top` | `top` | `top` | none
`right` | `right` | `right` | none
`bottom` | `bottom` | `bottom` | none
`left` | `left` | `left` | none


## Variant Styles

Function Name | Prop       | CSS Property    | Theme Field
--------------|------------|-----------------|--------------
`textStyle` | `textStyle` | style object | `textStyles`
`colorStyle` | `colors` | style object | `colorStyles`
`buttonStyle` | `variant` | style object | `buttons`

