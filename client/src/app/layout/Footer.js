//===========//
// Header.js //
//===========//
import React from 'react'

class Footer extends React.Component {

  render() {
    return (
      <nav className="navbar is-transparent is-fixed-bottom" aria-label="main navigation">
        <div className="navbar-brand navbar-menu-override">
            <div className="navbar-item" onClick={(e) => this.props.setLang('eng')}>English</div>
            <div className="navbar-item" onClick={(e) => this.props.setLang('jp')}>日本語</div>
        </div>
      </nav>
    )
  }
}

export default Footer