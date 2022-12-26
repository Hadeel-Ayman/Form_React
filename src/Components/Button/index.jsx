import React, { Component } from 'react'
import "./style.css"
export default class Button extends Component {
    render() {
      const { color, bgColor, width } = this.props
    return (
        <button className={this.props.className} onClick={this.props.onclick} type={this.props.type} style={{ backgroundColor: `${bgColor}`, color:`${color}`,width:`${width}` }}>{this.props.children}</button>
    )
  }
}
