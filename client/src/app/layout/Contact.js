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

      </section>
        
    )
  }
}

export default Contact