
# Changelog

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


