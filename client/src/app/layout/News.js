//===========//
// Header.js //
//===========//
import React from 'react'

class News extends React.Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }

  render() {

    return (
        <section class="hero" id='news'>
        <div class="hero-body">
          <div class="container">
          <div className="is-divider" data-content="NEWS"></div>

          </div>
        </div>
      </section>
        
    )
  }
}

export default News