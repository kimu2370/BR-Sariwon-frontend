import React, { Component } from "react";
import "Components/Flavor/imgEffecter.scss";
class ImgEffecter extends Component {
  render() {
    return (
      <img
        className={`${this.props.imgClass} ${this.props.active}`}
        src={this.props.imgSrc}
      ></img>
    );
  }
}

export default ImgEffecter;
