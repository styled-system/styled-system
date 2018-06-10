import React from 'react'
import { withRouter } from 'react-router-dom'

// used to scroll react-router pages to top on navigation
class ScrollTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return false
  }
}

export default withRouter(ScrollTop)
