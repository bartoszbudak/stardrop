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
            <i class="fab fa-facebook-square"></i>
          </span>
          <span class="icon">
            <i class="fab fa-twitter-square"></i>
          </span>
          <span class="icon">
            <i class="fab fa-youtube-square"></i>
          </span>
          <span class="icon">
            <i class="fab fa-instagram"></i>
          </span>
          <span class="icon">
            <i class="fab fa-bandcamp"></i>
          </span>
        </div>


      </section>
        
    )
  }
}

export default Contact