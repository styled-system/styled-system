
<img src='docs/logo.svg' width='128' height='128' />

# styled-system

Design system utilities for [styled-components][sc] and other css-in-js libraries

[![Build Status][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][npm]
[![Version][version-badge]][npm]

[build-badge]: https://img.shields.io/travis/jxnblk/styled-system/master.svg?style=flat-square
[build]: https://travis-ci.org/jxnblk/styled-system
[coverage-badge]: https://img.shields.io/codecov/c/github/jxnblk/styled-system.svg?style=flat-square
[coverage]: https://codecov.io/github/jxnblk/styled-system

[downloads-badge]: https://img.shields.io/npm/dw/styled-system.svg?style=flat-square
[version-badge]: https://img.shields.io/npm/v/styled-system.svg?style=flat-square
[npm]: https://npmjs.com/package/styled-system

```sh
npm i styled-system
```

## Features

- Add style props that hook into your own theme
- Responsive prop values for quickly setting responsive font-size, margin, padding, width, and more
- Influenced by constraint-based design system principles
- Typographic scale
- Spacing scale for margin and padding
- Default 8px grid
- Works with any color palette
- Works with most css-in-js libraries, including [styled-components][sc], [glamorous][glamorous], [emotion][emotion], [fela][fela], and [cxs][cxs]
- Used in [Rebass](http://jxnblk.com/rebass), [Grid Styled](http://jxnblk.com/grid-styled/), and the [Priceline Design System](https://github.com/pricelinelabs/design-system)

> "This is honestly my favourite way to build UI components right now ![party parrot][party-parrot]"
>
> – [Varun Vachhar][varun-post]

[party-parrot]: https://github.com/jmhobbs/cultofthepartyparrot.com/raw/master/parrots/parrot.gif

<!--
> "Fantastic set of tools that offer the ease and API of tachyons/functional CSS but, are way more customisable."
>
> – [Varun Vachhar](https://mobile.twitter.com/winkerVSbecks/status/955619873463431168)
-->

> "The future of css-in-js is going to look something like styled-system with its responsive values."<br/>
>
> – [Kye Hohenberger](https://mobile.twitter.com/tkh44/status/905474043729416192)

> "Coming from @tachyons_css, the styled-system utilities from @jxnblk is the missing link I’ve been looking for."<br/>
>
> – [Nathan Young](https://mobile.twitter.com/nathanyoung/status/891353221880360960)

> "If you make websites/apps with React check out Styled System if you haven't already. You will be amazed at how much faster you can build."
>
> – [David Yeiser][david-tweet]

### Table of Contents

- [Usage](#usage)
- [Getting Started](#getting-started)
- [Docs](#docs)
- [Optional Packages](#optional-packages)
- [Related](#related)

## Usage

```jsx
// Example uses styled-components, but styled-system works with most other css-in-js libraries as well
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system'

// Add styled-system functions to your component
const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`
```

Each style function exposes its own set of component props
that handle styles based on values defined in a theme.

```jsx
// width: 50%
<Box width={1/2} />

// font-size: 20px (theme.fontSizes[4])
<Box fontSize={4} />

// margin: 16px (theme.space[2])
<Box m={2} />

// padding: 32px (theme.space[3])
<Box p={3} />

// color
<Box color='tomato' />

// color: #333 (theme.colors.gray[0])
<Box color='grays.0' />

// background color
<Box bg='tomato' />
```

## Responsive Style Props

Set responsive width, margin, padding, font-size, and other properties with a shorthand array syntax.
[Read more](docs/responsive-styles.md)

```jsx
// responsive width
<Box width={[ 1, 1/2, 1/4 ]} />

// responsive font-size
<Box fontSize={[ 2, 3, 4 ]} />

// responsive margin
<Box m={[ 1, 2, 3 ]} />

// responsive padding
<Box p={[ 1, 2, 3 ]} />
```

To learn more, see the [Getting Started](docs/getting-started.md) guide or read the docs.

<!-- link shims for previous readme -->
<a name='getting-started'></a>
<a name='how-it-works'></a>
<a name='responsive-styles'></a>
<a name='api'></a>
<a name='system-components'></a>
<a name='default-theme'></a>
<a name='troubleshooting'></a>
<a name='cleanelement'></a>

## Docs


- [Getting Started](docs/getting-started.md)
- [Responsive Styles](docs/responsive-styles.md)
- [How it Works](docs/how-it-works.md)
- [API](docs/api.md)
  - [Core](docs/api.md#core)
    - [space](docs/api.md#space-responsive) (margins & paddings)
    - [width](docs/api.md#width-responsive)
    - [fontSize](docs/api.md#fontsize-responsive)
    - [color](docs/api.md#color-responsive) (and background-color)
  - [Typography](docs/api.md#typography)
  - [Layout](docs/api.md#layout)
  - [Flexbox](docs/api.md#flexbox)
  - [Borders](docs/api.md#borders)
  - [Position](docs/api.md#position)
  - [Misc](docs/api.md#misc)
  - [Pseudo-classes](docs/api.md#pseudo-classes)
  - [Complex styles](docs/api.md#complex-styles)
  - [Utilities](docs/api.md#utilities)
    - [themeGet](docs/api.md#themeget)
    - [propTypes](docs/api.md#proptypes)
  - [Customize](docs/api.md#customize)
    - [style](docs/api.md#style)
    - [responsiveStyle](docs/api.md#responsivestyle)
    - [pseudoStyle](docs/api.md#pseudostyle)
    - [complexStyle](docs/api.md#complexstyle)
  - [Default Theme](docs/api.md#default-theme)
- [Table of Style Functions](docs/table.md)
- [Custom Props](docs/custom-props.md)
- [Troubleshooting](docs/troubleshooting.md)

## Optional Packages

- [clean-tag](clean-tag)
- [system-components](system-components)
- [system-loader](system-loader)
- [system-classnames](system-classnames)
- [clean-element](clean-element)

---

## Further Reading

- [Component Based Design System With Styled-System][varun-post]


## Related

- [system-components](https://github.com/jxnblk/system-components)
- [grid-styled](https://github.com/jxnblk/grid-styled)
- [Rebass](http://jxnblk.com/rebass)
- [Compositor Lab](https://compositor.io/lab)
- [styled-components][sc]
- [glamorous][glamorous]
- [emotion][emotion]
- [fela][fela]
- [nano-style][nano-style]
- [cxs][cxs]

[sc]: https://github.com/styled-components/styled-components
[glamorous]: https://github.com/paypal/glamorous
[emotion]: https://github.com/emotion-js/emotion
[fela]: https://github.com/rofrischmann/fela
[nano-style]: https://github.com/jxnblk/nano-style
[cxs]: https://github.com/jxnblk/cxs
[varun-post]: https://varun.ca/styled-system/
[david-tweet]: https://mobile.twitter.com/davidyeiser/status/965920740582285312

<!-- new links -->
[cole-tweet]: https://mobile.twitter.com/colebemis/status/996565848138526721
[mrmrs-elements]: https://github.com/mrmrs/elements
[broccs-react-starter]: https://github.com/broccolini/react-website-starter
[dalgleish]: https://mobile.twitter.com/markdalgleish/status/913191186944241665

[MIT License](LICENSE.md)
