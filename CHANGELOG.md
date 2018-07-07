
# Changelog

## v3.0.0-0

- Performance rewrite
- Simplified API
- Faster
- Smaller

### Added

- `variant`
- `compose`

### Removed

- `propTypes[prop].meta` (temporarily removed)
- `responsiveStyle` use `style` instead
- `complexStyle` use `variant` instead
- `pseudoStyle`
- `util.break`
- `util.media`
- `numberToPx` option (pass `util.px` to the `getter` argument instead)

### Changed

- `style` utility is now responsive by default
- All built-in style functions now support responsive array values
- `themeGet` is now `get`

