//===========//
// Layout.js //
//===========//
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Site from './layout/Site'
import Header from './layout/Header'
import Content from './layout/Content'
import Footer from './layout/Footer'

class Layout extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      lang: 'eng'
    }

  }

  setLanguage = (lang) =>{
    this.setState({lang: lang})
  }

  render (){
    return (
      <Site>
      <Helmet
        title="Star Drop"
        meta={[
          { name: 'description', content: 'Stardrop NJ'},
          { name: 'keywords', content: 'resume, blog, portfolio, star drop' },
        ]}
        script={[
          { 'src': 'https://use.fontawesome.com/releases/v5.0.4/js/all.js'},
        ]}
        link={[
          {'rel':'stylesheet', 'href': 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}
        ]}
      />
      <Header lang={this.state.lang}/>
      <Content lang={this.state.lang}/>
      <Footer lang={this.state.lang} setLang={this.setLanguage}/> 
    </Site>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout