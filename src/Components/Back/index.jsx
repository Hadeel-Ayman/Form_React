import React, { Component } from 'react'
import './style.css'
export default class Back extends Component {
  render() {
    return (
        <span className="back" onClick={this.props.onclick}>
        <span>Back</span>
      </span>
    )
  }
}
