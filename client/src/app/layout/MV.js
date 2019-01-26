//===========//
// Header.js //
//===========//
import React from 'react'

class MV extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      videosYT : [
        "https://www.youtube.com/embed/wsxK9c4wlEY",
        "https://www.youtube.com/embed/i8kuPdFgMCs",
        "https://www.youtube.com/embed/bzNxxVvlJoA"

      ]
    }
  }

  render() {

    return (

        <section id='mv'>
         <div className="is-divider" data-content="MV"></div>
          <div className="hero">
            <div className="hero-body">
            <div className="container">

            {this.state.videosYT.map((item, index) => 

              <div key={index} className="columns">
                  <div className="column">
                      <iframe title='{index}' width="100%" height="500em" src={item} allowFullScreen></iframe>
                  </div>
              </div>
            
            )}


              </div>
            </div>
         </div>


      </section>
        
    )
  }
}

export default MV