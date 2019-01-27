//===========//
// Header.js //
//===========//
import React from 'react'

class News extends React.Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }

  render() {

    return (
        <section id='news'>
        <div className="is-divider" data-content="NEWS"></div>

          <div class="hero" >
            <div class="hero-body">
              <div class="container">
                <a className="twitter-timeline" data-width="400" data-height="500"
                   href="https://twitter.com/StarDropMusic?ref_src=twsrc%5Etfw">Tweets by StarDropMusic</a>
              </div>
            </div>
          </div>


      </section>
        
    )
  }
}

export default News