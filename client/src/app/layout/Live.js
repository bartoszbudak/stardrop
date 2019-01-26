//===========//
// Header.js //
//===========//
import React from 'react'

class Live extends React.Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }

  

  render() {

    let live;

    switch(this.props.lang){
      case 'eng':
        live = 'LIVE'
        break;
      case 'jp':
        live = 'ライブ情報'
        break;
      default:

    }

    return (
        <section id='live'>

          <div className="is-divider" data-content={live}></div>
      </section>
        
    )
  }
}

export default Live