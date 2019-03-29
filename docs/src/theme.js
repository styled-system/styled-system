export default {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#00f',
    secondary: '#00a',
    lightgray: '#fafafa',
  },
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
    }
  },
  // block variants
  blocks: {
    layout: {},
    header: {
      color: 'text',
      bg: 'white',
    },
    sidebar: {
      bg: 'white',
    },
    main: {}
  }
}
