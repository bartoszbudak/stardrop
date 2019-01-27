//===========//
// Header.js //
//===========//
import React from 'react'

class Contact extends React.Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }

  render() {

    let contact;

    switch(this.props.lang){
      case 'eng':
        contact = 'CONTACT'
        break;
      case 'jp':
        contact = 'お問い合わせ'
        break;
      default:

    }

    return (
      <section id='contact'>

        <div className="is-divider" data-content={contact}></div>
        <div className="social-icons">
          <span class="icon">
            <a href="https://www.facebook.com/StarDropMusic/" target="_blank"><i class="fab fa-facebook-square"></i></a>
          </span>
          <span class="icon">
          <a href="http://twitter.com/StarDropMusic/" target="_blank"><i class="fab fa-twitter-square"></i></a>
          </span>
          <span class="icon">
          <a href="https://www.facebook.com/StarDropMusic/" target="_blank"><i class="fab fa-youtube-square"></i></a>
          </span>
          <span class="icon">
          <a href="https://www.instagram.com/stardropmusic/" target="_blank"><i class="fab fa-instagram"></i></a>
          </span>
          <span class="icon">
          <a href="https://open.spotify.com/artist/5RJZygK4IjHSr8yytplzFX" target="_blank"><i class="fab fa-spotify"></i></a>
          </span>
          <span class="icon">
          <a href="https://stardropmusic.bandcamp.com/" target="_blank"><i class="fab fa-bandcamp"></i></a>
          </span>
        </div>


      </section>
        
    )
  }
}

export default Contact