//===========//
// Header.js //
//===========//
import React from 'react'


class Members extends React.Component {


  constructor(props){
    super(props);

    this.state = {

    }
  }



  render() {


    return (
        <section class="hero" id='members'>
        <div class="hero-body">
          <div class="container">
          <div className="is-divider" data-content="MEMBERS"></div>
          <div className="columns is-centered">
                <div className="column project-cont">
                    <div className="columns is-centered">
                    <div className="column is-one-fifths"> 
                        <div>
                            <figure className="image is-128x128">
                                <img src="img/seira.jpg" alt=""/>
                            </figure>
                        </div>
                    </div>
                    <div className="column is-four-fifths"> 
                        <ul>
                            <li>Seira</li>
                            <li>Vocals / Guitar 2</li>
                            <li>Blood Type: A</li>
                            <li>Horoscope: Gemini</li>
                            <li>Fun Fact: My childhood dream was to become a magical girl*~</li>
                        </ul>
                    </div>
                    </div>
                </div>
              </div>
              <div className="columns is-centered">
                <div className="column project-cont">
                    <div className="columns is-centered">
                    <div className="column is-four-fifths"> 
                        <ul className="member__even">
                            <li>Haru</li>
                            <li>Guitar 1</li>
                            <li>Blood Type: N/A</li>
                            <li>Horoscope: Aquarius</li>
                            <li>Fun Fact: N/A</li>
                        </ul>
                    </div>
                    <div className="column is-one-fifths"> 
                    <div>
                            <figure className="image is-128x128 project-circle">
                                <img src="img/haru.jpg" alt=""/>
                            </figure>
                        </div>

                    </div>
                    </div>
                </div>
              </div>
              <div className="columns is-centered">
                <div className="column project-cont">
                    <div className="columns is-centered">
                    <div className="column is-one-fifths"> 
                        <div>
                            <figure className="image is-128x128 project-circle">
                                <img src="img/rin.jpg" alt=""/>
                            </figure>
                        </div>
                    </div>
                    <div className="column is-four-fifths"> 
                        <ul>
                            <li>Lyn / Rin</li>
                            <li>Bass</li>
                            <li>Blood Type: O</li>
                            <li>Horoscope: Leo</li>
                            <li>Fun Fact: I grew up in Ibaraki, Japan!</li>
                        </ul>
                    </div>
                    </div>
                </div>
              </div>
              <div className="columns is-centered">
                <div className="column project-cont">
                    <div className="columns is-centered">
                    <div className="column is-four-fifths"> 
                        <ul className="member__even">
                            <li>K.</li>
                            <li>Drums</li>
                            <li>Blood Type: B</li>
                            <li>Horoscope: Gemini</li>
                            <li>Fun Fact: I can cook minute rice in 58 seconds</li>
                        </ul>
                    </div>
                    <div className="column is-one-fifths"> 
                        <div>
                                <figure className="image is-128x128 project-circle">
                                    <img src="img/k.jpg" alt=""/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </section>


           )
  }
}

export default Members