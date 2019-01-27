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
      showModal: false,
    }
  }

  toggleModal = () =>{
    this.setState(prevState => ({
        showModal: !prevState.showModal
      }))
  }
d
  render() {

    let title;
    let subtitle;

    return (
      <section className="content">
       <section className="content-main">

        <img className="hero-image__group" src="img/group.jpg"></img>

        <Members lang={this.props.lang}></Members>
        {/* <Releases lang={this.props.lang}></Releases> */}
        <News lang={this.props.lang}></News>
        {/* <Live lang={this.props.lang}></Live>
        <Photos lang={this.props.lang}></Photos> */}
        <MV lang={this.props.lang}></MV>
        <Contact lang={this.props.lang}></Contact>


      </section>






      </section>
        
    )
  }
}

export default Content