
# Table of Style Functions

## Core

Function Name | Prop       | CSS Property    | Theme Field  | Responsive
--------------|------------|-----------------|--------------|-----------
`space`       | `m`        | `margin`        | `space`      | yes
`space`       | `mt`       | `margin-top`    | `space`      | yes
`space`       | `mr`       | `margin-right`  | `space`      | yes
`space`       | `mb`       | `margin-bottom` | `space`      | yes
`space`       | `ml`       | `margin-left`   | `space`      | yes
`space`       | `p`        | `padding`       | `space`      | yes
`space`       | `pt`       | `padding-top`   | `space`      | yes
`space`       | `pr`       | `padding-right` | `space`      | yes
`space`       | `pb`       | `padding-bottom` | `space`     | yes
`space`       | `pl`       | `padding-left`  | `space`      | yes
`width`       | `width`    | `width`         | none         | yes
`fontSize`    | `fontSize` |`font-size`      |`fontSizes`   | yes
`color`       | `color`    | `color`         | `colors`     | yes
`color`       | `bg`       | `background-color`| `colors`   | yes

## Typography

Function Name | Prop       | CSS Property    | Theme Field  | Responsive
--------------|------------|-----------------|--------------|-----------
`fontFamily` | `fontFamily` | `font-family` | `fonts` | no
`textAlign`   | `textAlign`    | `text-align`   | none         | yes
`lineHeight`  | `lineHeight` | `line-height` | `lineHeights` | no
`fontWeight`  | `fontWeight` | `font-weight` | `fontWeights` | no
`letterSpacing` | `letterSpacing` | `letter-spacing` | `letterSpacings` | no

## Layout

Function Name | Prop       | CSS Property    | Theme Field  | Responsive
--------------|------------|-----------------|--------------|-----------
`display` | `display` | `display` | none | yes
`maxWidth` | `maxWidth` | `max-width` | `maxWidths` | yes
`minWidth` | `minWidth` | `min-width` | `minWidths` | yes
`height` | `height` | `height` | `heights` | yes
`maxHeight` | `maxHeight` | `max-height` | `maxHeights` | yes
`minHeight` | `minHeight` | `min-height` | `minHeights` | yes
`size` | `size` | `width` `height` | none | yes
`ratio` | `ratio` | `height` `padding-bottom` | none | no

## Flexbox

Function Name | Prop       | CSS Property    | Theme Field  | Responsive
--------------|------------|-----------------|--------------|-----------
`alignItems`  | `alignItems` | `align-items` | none | yes
`justifyContent` | `justifyContent` | `justify-content` | none | yes
`flexWrap` | `flexWrap` | `flex-wrap` | none | yes
`flexDirection` | `flexDirection` | `flex-direction` | none | yes
`flex` | `flex` | `flex` (shorthand) | none | yes
`alignContent`  | `alignContent` | `align-content` | none | yes
`justifySelf` | `justifySelf` | `justify-self` | none | yes
`alignSelf` | `alignSelf` | `align-self` | none | yes
`order` | `order` | `order` | none | yes
`flexWrap` | `flexWrap` | `flex-wrap` | none | yes
`flexBasis` | `flexBasis` | `flex-basis` | none | yes

## Grid Layout

Function Name | Prop       | CSS Property    | Theme Field  | Responsive
--------------|------------|-----------------|--------------|-----------
`gridGap`  | `gridGap` | `grid-gap` | `space` | yes
`gridRowGap` | `gridRowGap` | `grid-row-gap` | `space` | yes
`gridColumnGap` | `gridColumnGap` | `grid-column-gap` | `space` | yes
`gridColumn` | `gridColumn` | `grid-column` | none | yes
`gridRow` | `gridRow` | `grid-row` | none | yes
`gridAutoFlow` | `gridAutoFlow` | `grid-auto-flow` | none | no
`gridAutoRows` | `gridAutoRows` | `grid-auto-rows` | none | no
`gridAutoColumns` | `gridAutoColumns` | `grid-auto-columns` | none | no
`gridTemplateRows` | `gridTemplateRows` | `grid-template-rows` | none | yes
`gridTemplateColumns` | `gridTemplateColumns` | `grid-template-columns` | none | yes

## Misc

Function Name | Prop       | CSS Property    | Theme Field  | Responsive
--------------|------------|-----------------|--------------|-----------
`borderRadius` | `borderRadius` | `border-radius` | `radii` | no
`borderColor` | `borderColor` | `border-color` | `colors` | no
`borders` | `border` | `border` | `borders` | yes
`borders` | `borderTop` | `border-top` | `borders` | yes
`borders` | `borderRight` | `border-right` | `borders` | yes
`borders` | `borderBottom` | `border-bottom` | `borders` | yes
`borders` | `borderLeft` | `border-left` | `borders` | yes
`boxShadow` | `boxShadow` | `box-shadow` | `shadows` | no

## Position

Function Name | Prop       | CSS Property    | Theme Field  | Responsive
--------------|------------|-----------------|--------------|-----------
`position` | `position` | `position` | none | yes
`zIndex` | `zIndex` | `z-index` | none | no
`top` | `top` | `top` | none | yes
`right` | `right` | `right` | none | yes
`bottom` | `bottom` | `bottom` | none | yes
`left` | `left` | `left` | none | yes

## Pseudo-classes

Function Name | Prop       | CSS Property    | Theme Field  | Responsive
--------------|------------|-----------------|--------------|-----------
`hover` | `hover` | style object | -- | no
`focus` | `focus` | style object | -- | no
`active` | `active` | style object | -- | no
`disabled` | `disabledStyle` | style object | -- | no

## Complex Styles

Function Name | Prop       | CSS Property    | Theme Field  | Responsive
--------------|------------|-----------------|--------------|-----------
`textStyle` | `textStyle` | style object | `textStyles` | no
`colorStyle` | `colors` | style object | `colorStyles` | no
`buttonStyle` | `buttonStyle` | style object | `buttons` | no

