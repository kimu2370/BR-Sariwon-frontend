import React, { Component } from "react";
import "Components/Flavor/imgEffecter.scss";
class ImgEffecter extends Component {
  render() {
    const { imgClass, active, imgSrc } = this.props;
    return <img className={`${imgClass} ${active}`} src={imgSrc} alt=""></img>;
  }
}

export default ImgEffecter;
