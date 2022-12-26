import React, { Component } from "react";
import "./style.css";
export default class FormText extends Component {
  render() {
    return (
      <div className='login'>
        <h1 className="title">{this.props.title}</h1>
        <p className="para">{this.props.para}</p>
      </div>
    );
  }
}
