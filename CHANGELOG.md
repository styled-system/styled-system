# Changelog

## Unreleased

## v4.0.6 2019-03-21

- Changes source order in `borders` #429

## v4.0.5 2019-03-15

- Fix for missing `propTypes` on `space` function

## v4.0.1 2019-02-27

- Fix for props in `textStyles` and `colorStyles`

## v4.0.0 2019-02-23

- Rewritten core for less code duplication
- No longer merges returned style object, but returns arrays instead, which should work with common CSS-in-JS libraries
- `space` function has been rewritten with the core `style` and `compose` utilities
- Adds long-form props for margin and padding (e.g. `marginTop`). Shorthand aliases still work as before.
- Reintroduces the `alias` argument to `style` utility
- Removes the `styles` object export
- Removes the `util` object export
- Removes `merge` utility
- Removes the `mixed` utility since it did not behave as expected
- The theme "scale" is now passed as the second argument to the `transformValue` option in `style` utility
- Removes the `ratio` style function
- The following changes to the `borders` style function
  - The shorthand border props no longer transform numbers to pixel widths with a `solid` `border-style`
  - Adds `borderWidth`, `borderStyle`, `borderColor`, and `borderRadius` props
  - All border props are also available as individual imports
- Removes `styleType` from prop types `meta` fields
- Changes to the `get` utility: now returns the last argument as a fallback
- Rename `bgColor` to `backgroundColor`

## v3.2.1 2019-01-02

- Adds prop types for objects #366

## v3.2.0 2019-01-02

- Allow object syntax for responsive values #341

## v3.1.12 2019-01-02

- Allow nested objects for `theme.space` #352

## v3.1.11 2018-10-11

- Bugfix: remove usage of `in` operator in get utility

## v3.1.10 2018-10-10

- Convert numbers to pixels with keyed space values

## v3.1.9 2018-10-10

- Allow `getTheme` to return falsy values

## v3.1.8 2018-10-10

- Use Babel runtime

## v3.1.7 2018-10-10

- Fix for `breakpoints` numbers not being converted to pixels

## v3.1.6 2018-09-23

- Fix `.npmignore`

## v3.1.5 2018-09-23

- Update docs

## v3.1.4 2018-09-19

- Fix for passing falsy value as first item in array values

## v3.1.3 2018-09-14

- Add `module` field to package.json

## v3.1.2 2018-09-14

- Fix missing `styles` object keys

## v3.1.1 2018-09-14

- Patch to debug broken release

## v3.1.0 2018-09-11

- Upgrade to Babel 7

## v3.0.0

- Performance rewrite
- Simplified API
- Faster
- Smaller

### Added

- `variant`
- `compose`
- `css`

### Changed

- `style` utility is now responsive by default
- All built-in style functions now support responsive array values
- `backgroundImage` no longer wraps values with `url()`
- `buttonStyle` prop has been renamed to `variant`
- The `style` utility `getter` argument has beend renamed to `transformValue`
- `util.get` no longer supports a fallback argument

### Removed

- `propTypes[prop].meta` (temporarily removed)
- `responsiveStyle` use `style` instead
- `complexStyle` use `variant` instead
- `complexStyle` (`variant`) boolean props are no longer supported
- `pseudoStyle`
- `hover`
- `focus`
- `active`
- `disabled`
- `fontSize` and `width` no longer support shorthand props
- `alias` option
- `numberToPx` option (pass `util.px` to the `transformValue` argument instead)
- `util.media`
- `util.neg`
- `util.arr`
- `util.getWidth`
- `util.mq`
- `util.fallbackTheme`
- `util.breaks`
- `util.dec`
- `util.getValue`

## 2.3.0

### Added

- Metadata for supporting system-docs package

## 2.2.0

### Added

- CSS Grid utilities

## 2.1.0

### Changed

- Reorganized code base

## 2.0.0

### Added

- More utilities for CSS properties
- `fontFamily`
- `display`
- `minWidth`
- `height`
- `maxHeight`
- `minHeight`
- `size` (width & height)
- `alignContent`
- `order`
- `borders` utility that normalizes the API with other styled-system utilities
- `backgroundImage`
- `backgroundSize`
- `backgroundPosition`
- `zIndex`
- `top`
- `right`
- `bottom`
- `left`

### Changed

- Uses verbose naming convention for `textAlign`, `alignItems`, `justifyContent`, `flexWrap`, and other CSS properties
- `style`, `responsiveStyle`, and `pseudoStyle` utilities now accept `getter` and `getters` arguments for converting values
- Rewritten with ES module syntax
- DRYer code base for utilities like `fontSize`, `width`, and `color`
- The repo has been reorganized as a monorepo
- The `flexWrap` utility now expects a string value for its prop (previously a boolean)
- The `borderTop`, `borderRight`, `borderBottom`, and `borderLeft` props no longer accept boolean props, but follow the same convention as other utilities
- The default spacing scale has changed to `[ 0, 4, 8, 16, 32, 64, 128, 256, 512 ]` (this only affects usage without a custom `theme.space` provided
- Number values for breakpoints are now converted to px instead of ems to better match the rest of the library
- The `theme` utility has been renamed to `themeGet` (alternative names under consideration)
- The `pseudoStyle` arguments API has changed to more closely align with `style` and `responsiveStyle`

### Removed

- The `cleanElement` utility is now a separate package, removing the `react` dependency from the core library
- The `borderWidth` utility has been replaced with the `borders` utility
- The `theme` utility has been renamed to `themeGet` (alternative names under consideration)
- `removeProps` utility
- `idx` utility
- Legacy `responsiveStyle` arguments API
