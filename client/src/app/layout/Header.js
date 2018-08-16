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
    console.log($('#releaes'));

    switch(event.target.id){
      case 'members-href':
        scrollSection = $('#members');
        break;
      case 'releases-href':
        scrollSection = $('#releases');
        break;
      case 'news-href':
        scrollSection = $('#news');
        break;
      case 'live-href':
        scrollSection = $('#live');
        break;
      case 'photos-href':
        scrollSection = $('#photos');
        break;
      case 'mv-href':
        scrollSection = $('#mv');
        break;
      case 'contact-href':
        scrollSection = $('#contact');
        break;
      default:

    }

    scrollSection[0].scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  render() {
    let contact, members, live, photos, news, mv, releases;


    switch(this.props.lang){
      case 'eng':
        contact = 'CONTACT'
        members = 'MEMBERS'
        live = 'LIVE'
        photos = 'PHOTOS'
        news = 'NEWS'
        mv = 'MV'
        releases = 'RELEASES'
        break;
      case 'jp':
        contact = 'お問い合わせ'
        members = 'メンバー'
        live = 'ライブ情報'
        photos = 'ギャラリー'
        news = 'ニュース', 
        mv = 'MV'
        releases = 'リリース情報'
        break;
      default:

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
              <div className="navbar-item" onClick={this.handleScrollToElement} id="members-href" href="">
                {members}
              </div>
              <div className="navbar-item" onClick={this.handleScrollToElement} id="releases-href" href="">
                {releases}
              </div>            
              <div className="navbar-item" onClick={this.handleScrollToElement} id="news-href" href="">
                {news}
              </div>
              <div className="navbar-item" onClick={this.handleScrollToElement} id="live-href" href="">
                {live}
              </div>
              <div className="navbar-item" onClick={this.handleScrollToElement} id="photos-href" href="">
                {photos}
              </div>
              <div className="navbar-item" onClick={this.handleScrollToElement} id="mv-href" href="">
                {mv}
              </div>
              <div className="navbar-item" onClick={this.handleScrollToElement} id="contact-href" href="">
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
