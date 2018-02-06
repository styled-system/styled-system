import React from 'react'
import styled from 'styled-components'
import system, {
  space,
  color,
  width,
  fontSize,
  fontWeight,
  lineHeight,
  cleanElement,
  propTypes
} from '../core/src'

const tag = type => props => {
  const isEl = typeof type === 'string'
  const Comp = isEl ? (props.is || type) : type
  const next = {...props}
  if (isEl) next.is = undefined

  return <Comp {...next} />
}

export const theme = {
  space: [
    0, 4, 8, 16, 32, 64, 128, 256, 512
  ],
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64, 96, 128
  ],
  colors: {
    blue: '#08d',
    cyan: '#0af',
    magenta: '#c0f',
    gray: '#fafaff',
    gray2: '#dde',
    lighten: `rgba(255, 255, 255, ${1/8})`
  }
}

const div = cleanElement(tag('div'))

div.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.width,
  ...propTypes.fontSize,
  ...propTypes.fontWeight,
}

export const CSS = ({ css }) => (
  <style
    dangerouslySetInnerHTML={{
      __html: css
    }}
  />
)

CSS.defaultProps = {
  css: '*{box-sizing:border-box}body{margin:0}'
}

export const Root = styled(div)`
  font-family: system-ui, sans-serif;
  line-height: 1.25;
`
Root.displayName = 'Root'

export const Box = styled(div)`
  ${space}
  ${width}
  ${color}
`
Box.displayName = 'Box'

export const Container = Box.extend`
  max-width: 1024px;
`
Container.defaultProps = {
  mx: 'auto'
}

export const Text = styled(div)`
  ${space}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
`
Text.displayName = 'Text'

const h2 = cleanElement(tag('h2'))
h2.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.fontSize,
  ...propTypes.fontWeight,
}

export const Heading = styled(h2)`
  ${space}
  ${color}
  ${fontSize}
  ${fontWeight}
`
Heading.displayName = 'Heading'
Heading.defaultProps = {
  m: 0,
  fontSize: 4,
  fontWeight: 700
}

const a = cleanElement(tag('a'))
a.propTypes = {
  ...propTypes.space,
  ...propTypes.fontSize,
  ...propTypes.fontWeight,
  ...propTypes.color,
}

export const Button = styled(a)`
  text-decoration: none;
  ${space}
  ${fontSize}
  ${fontWeight}
  ${color}

  &:hover {
    color: ${system.theme('colors.cyan')};
  }
`
Button.defaultProps = {
  fontSize: 3,
  fontWeight: 700,
  px: 0,
  py: 2,
  color: 'inherit'
}

export const Link = styled(a)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  ${color}
`
Link.defaultProps = {
  color: 'blue'
}

const pre = cleanElement(tag('pre'))
pre.propTypes = {
  ...propTypes.space,
  ...propTypes.fontSize,
  ...propTypes.color,
}

export const Pre = styled(pre)`
  font-family: 'Roboto Mono', Menlo, monospace;
  overflow: auto;
  line-height: 1.5;
  ${space}
  ${fontSize}
  ${color}
`
Pre.defaultProps = {
  px: 3,
  py: 3,
  fontSize: 2,
}

export const Code = styled(cleanElement('code'))`
  font-family: 'Roboto Mono', Menlo, monospace;
  font-size: inherit;
  ${color}
`

export const Title = props =>
  <Heading
    {...props}
    is='h1'
    fontSize={[
      6, 6, 7, 8
    ]}
  />

export const Lead = props =>
  <Text
    {...props}
    fontWeight={700}
    fontSize={[
      6, 6, 7, 8
    ]}
  />

const ul = cleanElement('ul')
ul.propTypes = {
  ...propTypes.space,
  ...propTypes.fontSize
}
export const UL = styled(ul)`
  ${space}
  ${fontSize}
  line-height: 1.6;
  & p {
    font-size: inherit;
    margin: 0;
  }
`
UL.defaultProps = {
  pl: 4,
  mt: 0,
  mb: 3,
}

export const Divider = styled.hr`
  ${space}
  width: 128px;
  border: 0;
  border-bottom: 4px solid ${system.theme('colors.cyan')};
`
Divider.defaultProps = {
  mx: 0,
  my: 4
}

const OverflowAuto = styled.div`
  overflow: auto;
`

export const Table = styled(props => (
  <OverflowAuto>
    <table {...props} />
  </OverflowAuto>
))`
  font-size: 16px;
  border-collapse: separate;
  border-spacing: 0;
  max-width: 100%;
  width: 100%;
  background-color: white;

  & th {
    text-align: left;
  }

  & td {
    vertical-align: middle;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${system.theme('colors.gray2')};
  }
  & th,
  & td {
    padding-left: 0;
    padding-right: 0;
    padding-top: 8px;
    padding-bottom: 8px;
    line-height: inherit;
  }
`

const dots = props => `radial-gradient(${system.theme('colors.' + props.gridColor)(props)} 1px, transparent 1px)`

const dotImage = props => props.disabled ? null : {
  backgroundImage: dots(props)
}

const dotSize = props => ({
  backgroundSize: `${props.size}px ${props.size}px`,
})

const dotPosition = props => ({
  backgroundPosition: `${props.size / 2}px ${props.size / 2}px`,
})

export const DotGrid = styled.div`
  ${dotImage}
  ${dotSize}
  ${dotPosition}
  ${color}
`
DotGrid.defaultProps = {
  size: 16,
  gridColor: 'gray2'
}
