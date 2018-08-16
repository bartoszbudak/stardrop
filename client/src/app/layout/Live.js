//===========//
// Header.js //
//===========//
import React from 'react'

class Live extends React.Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }

  render() {

    return (
        <section class="hero" id='live'>
        <div class="hero-body">
          <div class="container">
          <div className="is-divider" data-content="LIVE"></div>

          </div>
        </div>
      </section>
        
    )
  }
}

export default Live