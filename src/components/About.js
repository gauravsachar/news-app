import React, { Component } from 'react'
import './NewsItem.css'
export class About extends Component {
  render() {
    return (
        <>

  {/* <div className="abt-cls"> */}
      <div className='container d-flex justify-content-center my-5'>
          <div>
          <h2><strong>About</strong></h2>
          </div>
      </div>


    <div className='about'>News websites can be intriguing to examine from a design perspective. Regardless of what type of news they cover, they all face the challenge of displaying a huge amount of content on the home page, which creates plenty of layout, usability and navigational challenges for the designer. The lessons that can be learned from examining how news websites address these challenges can be valuable for designers who work with other types of websites, including ones with blog theme designs.</div>

    <div className="about-cls">
      <img src="https://i.pinimg.com/originals/c6/38/6d/c6386d57201322f2dabd7117cee0953b.gif" alt="" className="imageInAbout"/>
      
      </div>

  {/* </div> */}


</>
    )
  }
}

export default About