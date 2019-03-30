const colors = {
  text: '#000',
  background: '#fff',
  primary: '#00f',
  secondary: '#00a',
  gray: '#eee',
  lightgray: '#fafafa',
  modes: {
    dark: {
      text: '#fff',
      background: '#000',
      primary: '#0cf',
      secondary: '#f0e',
      gray: '#222',
      lightgray: '#111',
    },
    cyan: {
      text: '#023',
      background: '#0ff',
      primary: '#03c',
      secondary: '#01a',
      gray: '#0cc',
      lightgray: '#0ee',
    },
    gray: {
      text: '#eef',
      background: '#333336',
      primary: '#09f',
      secondary: '#0bf',
      gray: '#55555a',
      lightgray: '#444448',
    },
    book: {
      text: '#322',
      background: '#fff9f9',
      primary: '#c30',
      secondary: '#400',
      gray: '#e9e6e6',
      lightgray: '#f9f6f6',
    },
    magenta: {
      text: '#203',
      background: '#f3f',
      primary: '#208',
      secondary: '#106',
      gray: '#c0c',
      lightgray: '#e0e',
    },
  }
}

export default {
  colors,
  fonts: {
    body: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  // base component styles
  styles: {
    a: {
      color: 'primary',
      '&:hover': {
        color: 'secondary',
      }
    },
    h1: {
      fontSize: [5, 6],
      a: {
        color: 'inherit',
        textDecoration: 'none',
      }
    },
    h2: {
      fontSize: [4, 5],
      a: {
        color: 'inherit',
        textDecoration: 'none',
      }
    },
    h3: {
      fontSize: 3,
      a: {
        color: 'inherit',
        textDecoration: 'none',
      }
    },
    h4: {
      fontSize: 2,
      a: {
        color: 'inherit',
        textDecoration: 'none',
      }
    },
    h5: {
      fontSize: 1,
      a: {
        color: 'inherit',
        textDecoration: 'none',
      }
    },
    h6: {
      fontSize: 0,
      a: {
        color: 'inherit',
        textDecoration: 'none',
      }
    },
    pre: {
      fontFamily: 'monospace',
      p: 3,
      my: 3,
      bg: 'lightgray',
      overflowX: 'auto',
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 14,
      color: 'secondary',
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'secondary',
    },
    ul: {
      pl: 3,
      ul: {
        // pl: 2
        // textIndent: '1em',
      }
    },
    table: {
      width: '100%',
      my: 4,
      // borderColor: colors.gray,
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      verticalAlign: 'bottom',
      paddingTop: '4px',
      paddingBottom: '4px',
      paddingRight: '4px',
      paddingLeft: 0,
      borderColor: 'inherit',
      borderBottomWidth: '2px',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      verticalAlign: 'top',
      paddingTop: '4px',
      paddingBottom: '4px',
      paddingRight: '4px',
      paddingLeft: 0,
      borderColor: 'inherit',
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid'
    }
  },
  // block variants
  layout: {
    root: {},
    header: {},
    sidebar: {
      color: 'text',
      bg: 'background',
    },
    main: {}
  }
}
