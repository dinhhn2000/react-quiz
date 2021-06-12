import React, { Component } from 'react'
import './layout.css'

import Toolbar from '../../components/toolbar'
import Auxiliary from '../Auxiliary'

class Layout extends Component {
  checkIsInAuthSites = () => {
    return window.location.pathname === '/sign-in' || window.location.pathname === '/sign-up'
  }

  render() {
    return (
      <Auxiliary>
        <Toolbar isAuth={this.checkIsInAuthSites()} />
        <main
          className="content"
          style={{ paddingTop: this.checkIsInAuthSites() ? 0 : 100, minHeight: '100vh' }}
        >
          {this.props.children}
        </main>
      </Auxiliary>
    )
  }
}

export default Layout
