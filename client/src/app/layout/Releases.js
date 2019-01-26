//===========//
// Header.js //
//===========//
import React from 'react'

class Releases extends React.Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }

  render() {

    let releases;

    switch(this.props.lang){
      case 'eng':
        releases = 'RELEASES'
        break;
      case 'jp':
        releases = 'リリース情報'
        break;
      default:

    }

    return (
        <section id='releases'>
          <div className="is-divider" data-content={releases}></div>
          <div className="hero">
            <div class="hero-body">
              <div class="container">

              </div>
            </div>
          </div>
      </section>
        
    )
  }
}

export default Releases