
# Changelog

## v3.0.0-0

- Performance rewrite
- Simplified API
- Faster
- Smaller

### Added

- `variant`
- `compose`

### Changed

- `style` utility is now responsive by default
- All built-in style functions now support responsive array values
- `themeGet` is now `get`
- `backgroundImage` no longer wraps values with `url()`

### Removed

- `propTypes[prop].meta` (temporarily removed)
- `responsiveStyle` use `style` instead
- `complexStyle` use `variant` instead
- `complexStyle` (`variant`) boolean props are no longer supported
- `pseudoStyle`
- `util.break`
- `util.media`
- `numberToPx` option (pass `util.px` to the `getter` argument instead)
