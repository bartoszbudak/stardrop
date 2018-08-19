//===========//
// Header.js //
//===========//
import React from 'react'
import axios from 'axios'

class Photos extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      lang: this.props.lang
    }
  }


  render() {

    let photos;

    switch(this.props.lang){
      case 'eng':
        photos = 'PHOTOS'
        break;
      case 'jp':
        photos = 'ギャラリー'
        break;
      default:

    }


    return (
        <section class="hero" id='photos'>
        <div class="hero-body">
          <div class="container">
          <div className="is-divider" data-content={photos}></div>

          </div>
        </div>
      </section>
        
    )
  }
}

export default Photos