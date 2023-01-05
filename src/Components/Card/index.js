import React, { Component } from "react";
import './style.css'
export default class Card extends Component {
  render() {
    const { backgroundImg, description, direction } = this.props;
    return (
      <div>
        <div className="card">
            <img
              src={backgroundImg}
              alt="backgroundImg"
              className="backgroundImg"
            />
          <div className="overlay_content">
            <p className={`description ${direction}`}>{description}</p>
          </div>
        </div>
      </div>
    );
  }
}


