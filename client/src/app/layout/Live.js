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

  
  componentDidMount() {
    (function (d, s, id) {
      var js;
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://embedsocial.com/embedscript/in.js";
      d.getElementsByTagName("head")[0].appendChild(js);
    }(document, "script", "EmbedSocialInstagramScript"));
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
          <a className="twitter-timeline" data-width="400" data-height="500" data-theme="light"
             href="https://twitter.com/StarDropMusic?ref_src=twsrc%5Etfw">Tweets by StarDropMusic</a>
        </section>
        
    )
  }
}

export default Live