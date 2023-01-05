import React, { Component } from "react";
import "./style.css";
export default class Player extends Component {
  render() {
    const { Img, desc } = this.props;
    return (
      <div className="playAll">
        <img src={Img} alt="Img" className="Img" />
        <p className="desc">{desc}</p>
      </div>
    );
  }
}
