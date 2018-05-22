import React from 'react'
import styled from 'styled-components'
import {
  Pre,
  Code,
  Link,
} from 'rebass'
import {
  link,
  heading
} from '@comp/md'

const table = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  max-width: 100%;
  width: 100%;
  font-size: 14px;
  margin-bottom: 32px;

  & th {
    text-align: left;
    font-weight: bold;
    vertical-align: bottom;
  }

  & td {
    vertical-align: top;
    /* hard-coded */
    width: 20%;
  }

  & td, th {
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 4px;
    padding-right: 4px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #f6f6f6;
  }
`

export default {
  pre: props =>
    <Pre
      {...props}
      px={3}
      my={3}
      color='blue'
    />,
  code: props => <Code {...props} />,
  a: link(props =>
    <Link
      {...props}
    />
  ),
  table
}
