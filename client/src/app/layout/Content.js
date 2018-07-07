//===========//
// Header.js //
//===========//
import React from 'react'


class Content extends React.Component {


  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  constructor(props){
    super(props);

    this.state = {
      isActive: false,
      showModal: false
    }
  }

  toggleModal = () =>{
    this.setState(prevState => ({
        showModal: !prevState.showModal
      }))
  }

  render() {

    let title;
    let subtitle;

    switch(this.props.lang){
      case 'eng':
        title = 'Bart Budak'
        subtitle = 'Web Developer with a Passion for Human-Computer Interaction'
        break;
      case 'jp':
        title = 'ブダック・バート'
        subtitle = 'マンマシンインタフェースに興味があるHTMLコーダー'
        break;
      case 'pl':
        title = 'Bartek Budak'
        subtitle = 'Programista stron WWW z pasją do UI/UX'
        break;
      default:
        title = 'Bart Budak'
        subtitle = 'Web Developer with a Passion for Human-Computer Interaction'
    }

    return (
      <section>

      </section>
        
    )
  }
}

export default Content