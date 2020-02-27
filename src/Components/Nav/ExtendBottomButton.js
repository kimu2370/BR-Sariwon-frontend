import React, { Component } from "react";
import "Components/Nav/extend-bottom-button.scss";

export default class ExtendBottomButton extends Component {
  render() {
    return (
      <li>
        <span>{this.props.title}</span>
      </li>
    );
  }
}
