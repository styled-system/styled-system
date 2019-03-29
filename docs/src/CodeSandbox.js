import React from 'react'

const src = 'https://codesandbox.io/embed/github/jxnblk/styled-system/tree/master/examples/basic'

export default () =>
  <iframe
    title='sandbox'
    src={src}
    style={{
      width: '100%',
      height: '500px',
      border: 0,
      borderRadius: '4px',
      overflow: 'hidden'
    }}
    sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
  />
