import React from 'react'
import { mount } from 'enzyme'
import styled from 'styled-components'
import * as styles from './index'

describe('styles', () => {
  describe.each([
    [
      'fontFamily',
      {
        styleRule: 'font-family',
        theme: {
          fonts: {
            primary: 'serif',
            secondary: 'sans-serif',
          },
        },
        expectations: [['arial', 'arial'], ['primary', 'serif']],
      },
    ],
    [
      'fontSize',
      {
        styleRule: 'font-size',
        theme: {
          fontSizes: [10, 15, 40],
        },
        expectations: [[0, '10px'], [1, '15px'], [20, '20px'], ['3em', '3em']],
      },
    ],
    [
      'lineHeight',
      {
        styleRule: 'line-height',
        theme: {
          lineHeights: [1.2, 1.5, 2],
        },
        expectations: [[0, 1.2], [1, 1.5], [3, 3], ['3em', '3em']],
      },
    ],
    [
      'fontWeight',
      {
        styleRule: 'font-weight',
        theme: {
          fontWeights: [400, 500, 800],
        },
        expectations: [[0, 400], [1, 500], [800, 800], ['medium', 'medium']],
      },
    ],
    [
      'textAlign',
      {
        styleRule: 'text-align',
        expectations: [['center', 'center'], ['justify', 'justify']],
      },
    ],
    [
      'letterSpacing',
      {
        styleRule: 'letter-spacing',
        theme: {
          letterSpacings: [1.2, 2],
        },
        expectations: [
          [0, '1.2px'],
          [1, '2px'],
          [1.1, '1.1px'],
          ['2rem', '2rem'],
        ],
      },
    ],
    [
      'color',
      {
        styleRule: 'color',
        theme: {
          colors: {
            primary: 'red',
          },
        },
        expectations: [
          ['primary', 'red'],
          ['#fff', '#fff'],
          ['rgba(0,0,0,0)', 'rgba(0,0,0,0)'],
        ],
      },
    ],
    [
      'width',
      {
        styleRule: 'width',
        theme: {
          widths: {
            large: 400,
          },
        },
        expectations: [[0.5, '50%'], ['large', '400px'], [50, '50px']],
      },
    ],
    [
      'height',
      {
        styleRule: 'height',
        theme: {
          heights: {
            large: 400,
          },
        },
        expectations: [[0.5, '50%'], ['large', '400px'], [50, '50px']],
      },
    ],
    [
      'maxWidth',
      {
        styleRule: 'max-width',
        theme: {
          widths: {
            large: 400,
          },
        },
        expectations: [[0.5, '50%'], ['large', '400px'], [50, '50px']],
      },
    ],
    [
      'maxHeight',
      {
        styleRule: 'max-height',
        theme: {
          heights: {
            large: 400,
          },
        },
        expectations: [[0.5, '50%'], ['large', '400px'], [50, '50px']],
      },
    ],
    [
      'minWidth',
      {
        styleRule: 'min-width',
        theme: {
          widths: {
            large: 400,
          },
        },
        expectations: [[0.5, '50%'], ['large', '400px'], [50, '50px']],
      },
    ],
    [
      'minHeight',
      {
        styleRule: 'min-height',
        theme: {
          heights: {
            large: 400,
          },
        },
        expectations: [[0.5, '50%'], ['large', '400px'], [50, '50px']],
      },
    ],
    [
      'display',
      {
        styleRule: 'display',
        expectations: [['flex', 'flex'], ['block', 'block']],
      },
    ],
    [
      'alignItems',
      {
        styleRule: 'align-items',
        expectations: [['flex-start', 'flex-start'], ['center', 'center']],
      },
    ],
    [
      'alignContent',
      {
        styleRule: 'align-content',
        expectations: [['flex-start', 'flex-start'], ['center', 'center']],
      },
    ],
    [
      'justifyContent',
      {
        styleRule: 'justify-content',
        expectations: [['flex-start', 'flex-start'], ['center', 'center']],
      },
    ],
    [
      'flexWrap',
      {
        styleRule: 'flex-wrap',
        expectations: [['wrap', 'wrap'], ['nowrap', 'nowrap']],
      },
    ],
    [
      'flexBasis',
      {
        styleRule: 'flex-basis',
        expectations: [[0.5, '50%'], [50, '50px']],
      },
    ],
    [
      'flexDirection',
      {
        styleRule: 'flex-direction',
        expectations: [['row', 'row'], ['column', 'column']],
      },
    ],
    [
      'flex',
      {
        styleRule: 'flex',
        expectations: [[1, '1'], ['1 0 auto', '1 0 auto']],
      },
    ],
    [
      'justifySelf',
      {
        styleRule: 'justify-self',
        expectations: [['flex-start', 'flex-start'], ['center', 'center']],
      },
    ],
    [
      'alignSelf',
      {
        styleRule: 'align-self',
        expectations: [['flex-start', 'flex-start'], ['center', 'center']],
      },
    ],
    [
      'order',
      {
        styleRule: 'order',
        expectations: [[1, '1'], [10, '10']],
      },
    ],
    [
      'background',
      {
        styleRule: 'background',
        expectations: [['red', 'red'], ['blue', 'blue']],
      },
    ],
    [
      'backgroundColor',
      {
        theme: {
          colors: {
            primary: 'red',
          },
        },
        styleRule: 'background-color',
        expectations: [['primary', 'red'], ['blue', 'blue']],
      },
    ],
    [
      'backgroundImage',
      {
        styleRule: 'background-image',
        expectations: [['url(x.gif)', 'url(x.gif)']],
      },
    ],
    [
      'backgroundSize',
      {
        styleRule: 'background-size',
        expectations: [['cover', 'cover'], ['50%', '50%']],
      },
    ],
    [
      'backgroundRepeat',
      {
        styleRule: 'background-repeat',
        expectations: [['no-repeat', 'no-repeat'], ['repeat-y', 'repeat-y']],
      },
    ],
    [
      'position',
      {
        styleRule: 'position',
        expectations: [['absolute', 'absolute'], ['relative', 'relative']],
      },
    ],
    [
      'zIndex',
      {
        theme: {
          zIndexes: {
            alert: 100,
          },
        },
        styleRule: 'z-index',
        expectations: [['alert', '100'], [20, '20']],
      },
    ],
    [
      'top',
      {
        styleRule: 'top',
        expectations: [[10, '10px'], ['10px', '10px'], ['4%', '4%']],
      },
    ],
    [
      'right',
      {
        styleRule: 'right',
        expectations: [[10, '10px'], ['10px', '10px'], ['4%', '4%']],
      },
    ],
    [
      'bottom',
      {
        styleRule: 'bottom',
        expectations: [[10, '10px'], ['10px', '10px'], ['4%', '4%']],
      },
    ],
    [
      'left',
      {
        styleRule: 'left',
        expectations: [[10, '10px'], ['10px', '10px'], ['4%', '4%']],
      },
    ],
    [
      'border',
      {
        styleRule: 'border',
        expectations: [[1, '1px solid'], ['1px solid red', '1px solid red']],
      },
    ],
    [
      'borderTop',
      {
        styleRule: 'border-top',
        expectations: [[1, '1px solid'], ['1px solid red', '1px solid red']],
      },
    ],
    [
      'borderRight',
      {
        styleRule: 'border-right',
        expectations: [[1, '1px solid'], ['1px solid red', '1px solid red']],
      },
    ],
    [
      'borderBottom',
      {
        styleRule: 'border-bottom',
        expectations: [[1, '1px solid'], ['1px solid red', '1px solid red']],
      },
    ],
    [
      'borderLeft',
      {
        styleRule: 'border-left',
        expectations: [[1, '1px solid'], ['1px solid red', '1px solid red']],
      },
    ],
    [
      'borderColor',
      {
        theme: {
          colors: {
            primary: 'red',
          },
        },
        styleRule: 'border-color',
        expectations: [['primary', 'red'], ['blue', 'blue']],
      },
    ],
    [
      'borderRadius',
      {
        theme: {
          radii: {
            round: '50%',
          },
        },
        styleRule: 'border-radius',
        expectations: [['round', '50%'], [10, '10px']],
      },
    ],
    [
      'boxShadow',
      {
        theme: {
          shadows: {
            red: '10px 5px 5px red',
          },
        },
        styleRule: 'box-shadow',
        expectations: [
          ['red', '10px 5px 5px red'],
          [
            '12px 12px 2px 1px rgba(0, 0, 255, .2)',
            '12px 12px 2px 1px rgba(0,0,255,.2)',
          ],
        ],
      },
    ],
    [
      'opacity',
      {
        styleRule: 'opacity',
        expectations: [[1, '1'], [0.2, '0.2']],
      },
    ],
  ])('#%s', (name, config) => {
    const Dummy = styled.div`
      ${styles[name]};
    `

    it('should support basic value', () => {
      config.expectations.forEach(([value, expected]) => {
        const props = { [name]: value }
        const wrapper = mount(<Dummy theme={config.theme} {...props} />)
        expect(wrapper).toHaveStyleRule(config.styleRule, String(expected))
      })
    })

    it('should support breakpoints value', () => {
      config.expectations.forEach(([value, expected]) => {
        const props = { [name]: { md: value } }
        const wrapper = mount(<Dummy theme={config.theme} {...props} />)
        expect(wrapper).toHaveStyleRule(config.styleRule, String(expected), {
          media: '(min-width:768px)',
        })
      })
    })
  })
})
