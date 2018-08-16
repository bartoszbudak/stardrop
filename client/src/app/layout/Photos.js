//===========//
// Header.js //
//===========//
import React from 'react'

class Photos extends React.Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }

  render() {

    return (
        <section class="hero" id='photos'>
        <div class="hero-body">
          <div class="container">
          <div className="is-divider" data-content="PHOTOS"></div>

          </div>
        </div>
      </section>
        
    )
  }
}

export default Photos