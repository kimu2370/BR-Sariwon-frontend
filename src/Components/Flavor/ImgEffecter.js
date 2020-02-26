import React, { Component } from "react";
import "Components/Flavor/imgEffecter.scss";
class ImgEffecter extends Component {
  render() {
    return <img className="img" src={this.props.src}></img>;
  }
}
export default ImgEffecter;
