//===========//
// Header.js //
//===========//
import React from 'react'
import ContactModal from '../../Components/ContactModal'
import $ from 'jquery'
import ClickOutside from 'react-click-outside'


class Header extends React.Component {

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
    this.hideNav();
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  hideNav = () => {
    this.setState(prevState => ({
      isActive: false
    }))
  }

  handleScrollToElement = (event) => {
    event.preventDefault();
    let scrollSection;
    if(event.target.id === 'about-href'){
      scrollSection = $('#about')
    } else{
      scrollSection = $('#proj')
    }
    scrollSection[0].scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  render() {
    let about;
    let projects;
    let contact;

    switch(this.props.lang){
      case 'eng':
        about = 'ABOUT'
        projects = 'PROJECTS'
        contact = 'CONTACT'
        break;
      case 'jp':
        about = 'アバウトミー'
        projects = 'プロジェクト'
        contact = 'コンタクト'
        break;
      default:
        about = 'ABOUT'
        projects = 'PROJECTS'
        contact = 'CONTACT'
    }

    return (
      <ClickOutside onClickOutside={this.hideNav}>

      <nav className="navbar is-transparent is-fixed-top" aria-label="main navigation">

        <div className="navbar-brand">
          <a role="button" className="navbar-burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
          <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
            <div className="navbar-end navbar-menu-override">
              <div className="navbar-item" onClick={this.handleScrollToElement} id="about-href" href="">
                {about}
              </div>
              <div className="navbar-item" onClick={this.handleScrollToElement} id="proj-href" href="">
                {projects}
              </div>            
              <div className="navbar-item" onClick={this.toggleModal}>
                {contact}
              </div>
            </div>
          </div>
        

        <ContactModal toggleModal={this.toggleModal} showModal={this.state.showModal} lang={this.props.lang} />

      </nav>
      </ClickOutside>

    )
  }
}

export default Header
