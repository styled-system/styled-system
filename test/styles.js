import test from 'ava'
import {
  // space,
  width,
  fontSize,
  color,
  textAlign,
  fontFamily,
  lineHeight,
  fontWeight,
  letterSpacing,
  display,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  size,
  ratio,
  verticalAlign,
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  justifySelf,
  alignSelf,
  order,
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  borderRadius,
  borderColor,
  borders,
  boxShadow,
  opacity,
  background,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
} from '../src/styles'

// fixtures
const theme = {
  breakpoints: [32, 48, 64].map(n => n + 'em'),
  space: [0, 6, 12, 18, 24],
  fontSizes: [12, 16, 18, 24, 36, 72],
  radii: [2, 4],
  colors: {
    blue: '#07c',
    green: '#1c0',
    gray: ['#ccc', '#555'],
  },
}

// aliases
theme.space.big = 64
theme.fontSizes.big = 128

test('exports width, and fontSize', t => {
  t.is(typeof width, 'function')
  t.is(typeof fontSize, 'function')
})

// width
test('width returns percentage widths', t => {
  const a = width({ width: 1 / 2 })
  t.deepEqual(a, { width: '50%' })
})

test('width returns pixel values', t => {
  const a = width({ width: 256 })
  t.deepEqual(a, { width: '256px' })
})

test('width returns string values', t => {
  const a = width({ width: 'auto' })
  t.deepEqual(a, { width: 'auto' })
})

test('width returns responsive values', t => {
  const a = width({ width: [1, 1 / 2] })
  t.deepEqual(a, {
    width: '100%',
    '@media screen and (min-width: 40em)': { width: '50%' },
  })
})

test('width returns responsive values for object', t => {
  const a = width({ width: { 0: 1, 2: 1 / 2 } })

  t.deepEqual(a, {
    '@media screen and (min-width: 40em)': {
      width: '100%',
    },
    '@media screen and (min-width: 64em)': {
      width: '50%',
    },
  })
})

test('width returns responsive pixel values', t => {
  const a = width({ width: [128, 256] })
  t.deepEqual(a, {
    width: '128px',
    '@media screen and (min-width: 40em)': { width: '256px' },
  })
})

test('width returns 0 value', t => {
  const a = width({ width: 0 })
  t.deepEqual(a, { width: '0%' })
})

test('width returns null ', t => {
  const a = width({})
  t.is(a, null)
})

// fontSize
test('fontSize returns scale values', t => {
  const a = fontSize({ fontSize: 0, theme: {} })
  const b = fontSize({ fontSize: 1, theme: {} })
  const c = fontSize({ fontSize: 2 })
  t.deepEqual(a, { fontSize: '12px' })
  t.deepEqual(b, { fontSize: '14px' })
  t.deepEqual(c, { fontSize: '16px' })
})

test('fontSize returns keyed values', t => {
  const a = fontSize({
    theme,
    fontSize: 'big',
  })
  t.is(a.fontSize, theme.fontSizes.big + 'px')
})

test('fontSize returns pixel values', t => {
  const a = fontSize({ fontSize: 24 })
  t.deepEqual(a, { fontSize: '24px' })
})

test('fontSize returns string values', t => {
  const a = fontSize({ fontSize: '2em' })
  t.deepEqual(a, { fontSize: '2em' })
})

test('fontSize returns responsive values', t => {
  const a = fontSize({ fontSize: [1, 2] })
  t.deepEqual(a, {
    fontSize: '14px',
    '@media screen and (min-width: 40em)': {
      fontSize: '16px',
    },
  })
})

test('fontSize can be configured with a theme', t => {
  const a = fontSize({ theme, fontSize: 0 })
  const b = fontSize({ theme, fontSize: 1 })
  const c = fontSize({ theme, fontSize: 2 })
  const d = fontSize({ theme, fontSize: 3 })
  const e = fontSize({ theme, fontSize: 4 })
  const f = fontSize({ theme, fontSize: 5 })
  t.deepEqual(a, { fontSize: '12px' })
  t.deepEqual(b, { fontSize: '16px' })
  t.deepEqual(c, { fontSize: '18px' })
  t.deepEqual(d, { fontSize: '24px' })
  t.deepEqual(e, { fontSize: '36px' })
  t.deepEqual(f, { fontSize: '72px' })
})

test('fontSize returns null', t => {
  const a = fontSize({})
  t.is(a, null)
})

// color
test('color returns color and backgroundColor styles', t => {
  const a = color({ color: 'tomato' })
  const b = color({ bg: 'tomato' })
  t.deepEqual(a, { color: 'tomato' })
  t.deepEqual(b, { backgroundColor: 'tomato' })
})

test('color returns theme.colors values', t => {
  const a = color({ theme, color: 'blue' })
  const b = color({ theme, bg: 'green' })
  t.deepEqual(a, { color: theme.colors.blue })
  t.deepEqual(b, { backgroundColor: theme.colors.green })
})

test('color returns responsive values', t => {
  const a = color({ theme, color: ['blue', 'green'] })
  t.deepEqual(a, {
    color: theme.colors.blue,
    '@media screen and (min-width: 32em)': {
      color: theme.colors.green,
    },
  })
})

test('color works with array theme.colors', t => {
  const a = color({
    theme: {
      colors: ['tomato', 'plum'],
    },
    color: 0,
  })
  t.is(a.color, 'tomato')
})

test('color keys support dot notation', t => {
  const a = color({
    theme: {
      colors: {
        gray: ['#333', '#666', '#999'],
      },
    },
    color: 'gray.2',
  })
  t.is(a.color, '#999')
})

// textAlign
test('textAlign returns text-align', t => {
  const a = textAlign({ textAlign: 'center' })
  t.deepEqual(a, { textAlign: 'center' })
})

test('textAlign returns responsive text-align', t => {
  const a = textAlign({ textAlign: ['center', 'left'] })
  t.deepEqual(a, {
    textAlign: 'center',
    '@media screen and (min-width: 40em)': {
      textAlign: 'left',
    },
  })
})

test('fontFamily returns font-family', t => {
  const a = fontFamily({ fontFamily: 'system-ui' })
  t.is(a.fontFamily, 'system-ui')
})

// lineHeight
test('lineHeight returns line-height', t => {
  const a = lineHeight({ lineHeight: 1.23 })
  t.deepEqual(a, { lineHeight: 1.23 })
})

test('lineHeight returns a scalar style', t => {
  const a = lineHeight({
    theme: {
      lineHeights: [1, 2, 3],
    },
    lineHeight: 1,
  })

  t.deepEqual(a, { lineHeight: 2 })
})

test('lineHeight returns responsive line-height', t => {
  const a = lineHeight({
    theme: {
      lineHeights: [1, 2, 3],
    },
    lineHeight: [1, 2],
  })

  t.deepEqual(a, {
    lineHeight: 2,
    '@media screen and (min-width: 40em)': {
      lineHeight: 3,
    },
  })
})

// fontWeight
test('fontWeight returns fontWeight', t => {
  const a = fontWeight({ fontWeight: 'bold' })
  t.deepEqual(a, { fontWeight: 'bold' })
})

test('fontWeight returns a scalar style', t => {
  const a = fontWeight({
    theme: {
      fontWeights: [400, 600, 800],
    },
    fontWeight: 2,
  })
  t.deepEqual(a, { fontWeight: 800 })
})

// letterSpacing
test('letterSpacing returns letterSpacing', t => {
  const a = letterSpacing({ letterSpacing: 2 })
  t.deepEqual(a, { letterSpacing: '2px' })
})

test('letterSpacing returns a scalar style', t => {
  const a = letterSpacing({
    theme: {
      letterSpacings: [1, 2, 3],
    },
    letterSpacing: 2,
  })
  t.deepEqual(a, { letterSpacing: '3px' })
})

test('display returns display', t => {
  const a = display({ display: 'inline-block' })
  t.is(a.display, 'inline-block')
})

test('minWidth returns minWidth', t => {
  const a = minWidth({ minWidth: 256 })
  t.is(a.minWidth, '256px')
})

test('maxWidth returns width styles', t => {
  const a = maxWidth({ maxWidth: 234 })
  t.deepEqual(a, { maxWidth: '234px' })
})

test('maxWidth returns null when blank', t => {
  const a = maxWidth({ maxWidth: null })
  t.is(a, null)
})

test('maxWidth returns scalar styles', t => {
  const a = maxWidth({
    theme: {
      maxWidths: [123, 456, 789],
    },
    maxWidth: 1,
  })
  t.deepEqual(a, { maxWidth: '456px' })
})

test('height returns height', t => {
  const a = height({ height: 256 })
  t.is(a.height, '256px')
})

test('minHeight returns minHeight', t => {
  const a = minHeight({ minHeight: 256 })
  t.is(a.minHeight, '256px')
})

test('maxHeight returns maxHeight', t => {
  const a = maxHeight({ maxHeight: 256 })
  t.is(a.maxHeight, '256px')
})

test('size returns width and height', t => {
  const a = size({ size: 256 })
  t.is(a.width, '256px')
  t.is(a.height, '256px')
})

test('ratio returns height and paddingBottom', t => {
  const a = ratio({ ratio: 1 / 2 })
  t.is(a.height, 0)
  t.is(a.paddingBottom, '50%')
})

test('ratio returns null when undefined', t => {
  const a = ratio({})
  t.is(a, null)
})

test('verticalAlign returns verticalAlign', t => {
  const a = verticalAlign({ verticalAlign: 'middle' })
  t.deepEqual(a, {
    verticalAlign: 'middle',
  })
})

test('alignItems returns a style', t => {
  const a = alignItems({ alignItems: 'center' })
  t.deepEqual(a, { alignItems: 'center' })
})

test('alignContent returns a style', t => {
  const a = alignContent({ alignContent: 'center' })
  t.deepEqual(a, { alignContent: 'center' })
})

test('justifyContent returns a style', t => {
  const a = justifyContent({ justifyContent: 'center' })
  t.deepEqual(a, { justifyContent: 'center' })
})

test('flexWrap returns a style', t => {
  const a = flexWrap({ flexWrap: 'wrap' })
  t.deepEqual(a, { flexWrap: 'wrap' })
})

test('flexDirection returns a style', t => {
  const a = flexDirection({ flexDirection: 'column' })
  t.deepEqual(a, { flexDirection: 'column' })
})

test('flex returns a style', t => {
  const a = flex({ flex: 'none' })
  t.deepEqual(a, { flex: 'none' })
})

test('justifySelf returns a style', t => {
  const a = justifySelf({ justifySelf: 'center' })
  t.deepEqual(a, { justifySelf: 'center' })
})

test('alignSelf returns a style', t => {
  const a = alignSelf({ alignSelf: 'center' })
  t.deepEqual(a, { alignSelf: 'center' })
})

test('order returns a style', t => {
  const a = order({ order: 2 })
  t.deepEqual(a, { order: 2 })
})

test('gridGap returns a scalar style', t => {
  const a = gridGap({
    theme: {
      space: [0, 2, 4, 8],
    },
    gridGap: 3,
  })

  t.deepEqual(a, { gridGap: '8px' })
})

test('gridRowGap returns a scalar style', t => {
  const a = gridRowGap({
    theme: {
      space: [0, 2, 4, 8],
    },
    gridRowGap: 3,
  })

  t.deepEqual(a, { gridRowGap: '8px' })
})

test('gridColumnGap returns a scalar style', t => {
  const a = gridColumnGap({
    theme: {
      space: [0, 2, 4, 8],
    },
    gridColumnGap: 3,
  })

  t.deepEqual(a, { gridColumnGap: '8px' })
})

test('gridAutoFlow returns a style', t => {
  const a = gridAutoFlow({ gridAutoFlow: 'row dense' })
  t.deepEqual(a, { gridAutoFlow: 'row dense' })
})

test('gridAutoRows returns a style', t => {
  const a = gridAutoRows({ gridAutoRows: 'auto' })
  t.deepEqual(a, { gridAutoRows: 'auto' })
})

test('gridAutoColumns returns a style', t => {
  const a = gridAutoColumns({ gridAutoColumns: 'auto' })
  t.deepEqual(a, { gridAutoColumns: 'auto' })
})

test('gridTemplateColumns returns a style', t => {
  const a = gridTemplateColumns({ gridTemplateColumns: '1fr 1fr' })
  t.deepEqual(a, { gridTemplateColumns: '1fr 1fr' })
})

test('gridTemplateRows returns a style', t => {
  const a = gridTemplateRows({ gridTemplateRows: '1fr 1fr' })
  t.deepEqual(a, { gridTemplateRows: '1fr 1fr' })
})

test('gridColumn returns a style', t => {
  const a = gridColumn({ gridColumn: 'span 2' })
  t.deepEqual(a, { gridColumn: 'span 2' })
})

test('gridRow returns a style', t => {
  const a = gridRow({ gridRow: 'span 2' })
  t.deepEqual(a, { gridRow: 'span 2' })
})

test('borderRadius returns borderRadius', t => {
  const a = borderRadius({ borderRadius: '4px' })
  t.deepEqual(a, { borderRadius: '4px' })
})

test('borderRadius returns a pixel value', t => {
  const a = borderRadius({ borderRadius: 4 })
  t.deepEqual(a, { borderRadius: '4px' })
})

test('borderRadius returns a pixel value from theme', t => {
  const a = borderRadius({
    theme,
    borderRadius: 0,
  })
  t.deepEqual(a, { borderRadius: '2px' })
})

test('borderColor returns borderColor', t => {
  const a = borderColor({ borderColor: 'blue' })
  t.deepEqual(a, { borderColor: 'blue' })
})

test('borderColor returns nested borderColor', t => {
  const a = borderColor({ theme, borderColor: 'gray.0' })
  t.deepEqual(a, { borderColor: theme.colors.gray[0] })
})

test('borders returns a border shorthand style', t => {
  const a = borders({ border: '1px solid' })
  t.is(a.border, '1px solid')
})

test('borders converts numbers to a border shorthand style', t => {
  const a = borders({ border: 1 })
  t.is(a.border, '1px solid')
})

test('borders handles responsive styles', t => {
  const a = borders({ border: [0, 1] })
  t.is(a.border, 0)
  t.is(a['@media screen and (min-width: 40em)'].border, '1px solid')
})

test('borders converts borderTop shorthand styles', t => {
  const a = borders({ borderTop: '1px solid' })
  t.is(a.borderTop, '1px solid')
})

test('borders converts borderTop number shorthand styles', t => {
  const a = borders({ borderTop: 1 })
  t.is(a.borderTop, '1px solid')
})

test('borders converts borderRight shorthand styles', t => {
  const a = borders({ borderRight: '1px solid' })
  t.is(a.borderRight, '1px solid')
})

test('borders converts borderRight number shorthand styles', t => {
  const a = borders({ borderRight: 1 })
  t.is(a.borderRight, '1px solid')
})

test('borders converts borderBottom shorthand styles', t => {
  const a = borders({ borderBottom: '1px solid' })
  t.is(a.borderBottom, '1px solid')
})

test('borders converts borderBottom number shorthand styles', t => {
  const a = borders({ borderBottom: 1 })
  t.is(a.borderBottom, '1px solid')
})

test('borders converts borderLeft shorthand styles', t => {
  const a = borders({ borderLeft: '1px solid' })
  t.is(a.borderLeft, '1px solid')
})

test('borders converts borderLeft number shorthand styles', t => {
  const a = borders({ borderLeft: 1 })
  t.is(a.borderLeft, '1px solid')
})

test('borders combines multiple border styles', t => {
  const a = borders({
    borderTop: 1,
    borderBottom: 2,
  })
  t.is(a.borderTop, '1px solid')
  t.is(a.borderBottom, '2px solid')
})

test('borders combines multiple responsive styles', t => {
  const a = borders({
    borderTop: ['1px solid', '2px solid'],
    borderBottom: ['none', '2px solid'],
  })
  t.deepEqual(a, {
    borderTop: '1px solid',
    borderBottom: 'none',
    '@media screen and (min-width: 40em)': {
      borderTop: '2px solid',
      borderBottom: '2px solid',
    },
  })
})

test('boxShadow returns box-shadow styles', t => {
  const a = boxShadow({ boxShadow: '0 0 8px rgba(0, 0, 0, .125)' })
  t.deepEqual(a, { boxShadow: '0 0 8px rgba(0, 0, 0, .125)' })
})

test('boxShadow returns theme value', t => {
  const a = boxShadow({
    theme: {
      shadows: ['0 0 4px rgba(0, 0, 0, .125)', '0 0 8px rgba(0, 0, 0, .125)'],
    },
    boxShadow: 1,
  })
  t.deepEqual(a, { boxShadow: '0 0 8px rgba(0, 0, 0, .125)' })
})

test('opacity returns opacity styles', t => {
  const a = opacity({ opacity: 0.5 })
  t.deepEqual(a, { opacity: 0.5 })
})

test('background returns background', t => {
  const a = background({ background: 'tomato' })
  t.is(a.background, 'tomato')
})

test('backgroundImage returns backgroundImage', t => {
  const a = backgroundImage({ backgroundImage: 'url(kitten.png)' })
  t.is(a.backgroundImage, 'url(kitten.png)')
})

test('backgroundSize returns backgroundSize', t => {
  const a = backgroundSize({ backgroundSize: 'cover' })
  t.is(a.backgroundSize, 'cover')
})

test('backgroundPosition returns backgroundPosition', t => {
  const a = backgroundPosition({ backgroundPosition: 'center' })
  t.is(a.backgroundPosition, 'center')
})

test('backgroundRepeat returns backgroundRepeat', t => {
  const a = backgroundRepeat({ backgroundRepeat: 'repeat' })
  t.is(a.backgroundRepeat, 'repeat')
})

test('position returns position', t => {
  const a = position({ position: 'absolute' })
  t.is(a.position, 'absolute')
})

test('zIndex returns zIndex', t => {
  const a = zIndex({ zIndex: 2 })
  t.is(a.zIndex, 2)
})

test('top returns top', t => {
  const a = top({ top: 2 })
  t.is(a.top, '2px')
})

test('right returns right', t => {
  const a = right({ right: 2 })
  t.is(a.right, '2px')
})

test('bottom returns bottom', t => {
  const a = bottom({ bottom: 2 })
  t.is(a.bottom, '2px')
})

test('left returns left', t => {
  const a = left({ left: 2 })
  t.is(a.left, '2px')
})

