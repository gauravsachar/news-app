import React, { Component } from 'react'
import './NewsItem.css'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
          <img src="https://ihatetomatoes.net/wp-content/uploads/2014/07/img_css3-spinning-preloader-01.png" className='spinner' alt="Processing/Loading"/>
      </div>
    )
  }
}

export default Spinner