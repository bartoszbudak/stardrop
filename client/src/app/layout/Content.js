//===========//
// Header.js //
//===========//
import React from 'react'
import Members from './Members'
import Live from './Live'
import Contact from './Contact'
import Releases from './Releases'
import MV from './MV'
import Photos from './Photos'
import News from './News'



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
        {/* Image */}
        <section class="hero">
          <div class="hero-body">
            <div class="container">
              <div class="card">
                <div class="card-image">
                  <img src="img/group.jpg"></img>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* MEMBERS */}

        <Members></Members>
        <Releases></Releases>
        <News></News>
        <Live></Live>
        <Photos></Photos>
        <MV></MV>
        <Contact></Contact>




      </section>
        
    )
  }
}

export default Content