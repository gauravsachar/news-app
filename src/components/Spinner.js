import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
          <img src="https://i.gifer.com/origin/6a/6a2dfb96f278692f0900cc08975efe0e_w200.gif" alt="Processing/Loading"/>
      </div>
    )
  }
}

export default Spinner